<?php
require_once 'config.php';

// Require admin role
requireRole('admin');

// Set memory limit for large exports
ini_set('memory_limit', '256M');
set_time_limit(300); // 5 minutes

// Get filter parameters
$filterUser = $_GET['user'] ?? '';
$filterDateFrom = $_GET['date_from'] ?? '';
$filterDateTo = $_GET['date_to'] ?? '';
$filterServiceType = $_GET['service_type'] ?? '';

// Determine export type
$exportType = $_GET['export'] ?? 'filtered'; // 'filtered' or 'all'

// Build query
function buildExportQuery($filters, $exportAll = false) {
    $baseQuery = "
        SELECT 
            c.created_at as 'Date/Time',
            u.username as 'Technician',
            c.service_type as 'Service Type',
            c.material_cost as 'Material Cost',
            c.material_markup_percent as 'Material Markup %',
            c.material_charge as 'Material Charge',
            c.labor_category as 'Labor Category',
            c.minutes as 'Minutes',
            c.labor_rate as 'Labor Rate',
            c.labor_charge as 'Labor Charge',
            CASE WHEN c.include_tax = 1 THEN 'Yes' ELSE 'No' END as 'Tax Included',
            c.tax_amount as 'Tax Amount',
            c.total_amount as 'Total Amount'
        FROM calculations c
        JOIN users u ON c.user_id = u.id
    ";
    
    $where = [];
    $params = [];
    
    if (!$exportAll) {
        if (!empty($filters['user'])) {
            $where[] = 'c.user_id = ?';
            $params[] = $filters['user'];
        }
        
        if (!empty($filters['date_from'])) {
            $where[] = 'c.created_at >= ?';
            $params[] = $filters['date_from'] . ' 00:00:00';
        }
        
        if (!empty($filters['date_to'])) {
            $where[] = 'c.created_at <= ?';
            $params[] = $filters['date_to'] . ' 23:59:59';
        }
        
        if (!empty($filters['service_type'])) {
            $where[] = 'c.service_type = ?';
            $params[] = $filters['service_type'];
        }
    }
    
    $whereClause = empty($where) ? '' : 'WHERE ' . implode(' AND ', $where);
    $query = $baseQuery . ' ' . $whereClause . ' ORDER BY c.created_at DESC';
    
    return ['query' => $query, 'params' => $params];
}

// Stream CSV output
function streamCSV($pdo, $query, $params) {
    // Set headers for CSV download
    $filename = 'field_service_calculations_' . date('Y-m-d_His') . '.csv';
    
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    
    // Open output stream
    $output = fopen('php://output', 'w');
    
    // Add BOM for Excel UTF-8 compatibility
    fprintf($output, chr(0xEF).chr(0xBB).chr(0xBF));
    
    try {
        // Prepare statement
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        
        // Write headers
        $headerWritten = false;
        $rowCount = 0;
        $chunkSize = 1000; // Process 1000 rows at a time
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // Write CSV headers on first row
            if (!$headerWritten) {
                fputcsv($output, array_keys($row));
                $headerWritten = true;
            }
            
            // Format date
            $row['Date/Time'] = date('m/d/Y h:i A', strtotime($row['Date/Time']));
            
            // Format currency values
            $row['Material Cost'] = number_format($row['Material Cost'], 2, '.', '');
            $row['Material Markup %'] = number_format($row['Material Markup %'], 2, '.', '');
            $row['Material Charge'] = number_format($row['Material Charge'], 2, '.', '');
            $row['Labor Rate'] = number_format($row['Labor Rate'], 2, '.', '');
            $row['Labor Charge'] = number_format($row['Labor Charge'], 2, '.', '');
            $row['Tax Amount'] = number_format($row['Tax Amount'], 2, '.', '');
            $row['Total Amount'] = number_format($row['Total Amount'], 2, '.', '');
            
            // Write row
            fputcsv($output, $row);
            $rowCount++;
            
            // Flush output buffer periodically
            if ($rowCount % $chunkSize == 0) {
                ob_flush();
                flush();
            }
        }
        
        // Add summary row
        if ($rowCount > 0) {
            // Calculate totals
            $totalsQuery = str_replace(
                "SELECT 
            c.created_at as 'Date/Time',
            u.username as 'Technician',
            c.service_type as 'Service Type',
            c.material_cost as 'Material Cost',
            c.labor_category as 'Labor Category',
            c.minutes as 'Minutes',
            c.labor_rate as 'Labor Rate',
            c.labor_charge as 'Labor Charge',
            CASE WHEN c.include_tax = 1 THEN 'Yes' ELSE 'No' END as 'Tax Included',
            c.tax_amount as 'Tax Amount',
            c.total_amount as 'Total Amount'",
                "SELECT 
                    SUM(c.material_cost) as material_total,
                    SUM(c.labor_charge) as labor_total,
                    SUM(c.tax_amount) as tax_total,
                    SUM(c.total_amount) as grand_total",
                $query
            );
            
            $stmt = $pdo->prepare($totalsQuery);
            $stmt->execute($params);
            $totals = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Write empty row
            fputcsv($output, []);
            
            // Write summary
            fputcsv($output, ['SUMMARY']);
            fputcsv($output, ['Total Rows:', $rowCount]);
            fputcsv($output, ['Total Material:', '$' . number_format($totals['material_total'], 2)]);
            fputcsv($output, ['Total Labor:', '$' . number_format($totals['labor_total'], 2)]);
            fputcsv($output, ['Total Tax:', '$' . number_format($totals['tax_total'], 2)]);
            fputcsv($output, ['Grand Total:', '$' . number_format($totals['grand_total'], 2)]);
            
            // Write export info
            fputcsv($output, []);
            fputcsv($output, ['Exported by:', $_SESSION['username']]);
            fputcsv($output, ['Export date:', date('m/d/Y h:i A')]);
            
            if (!empty($params)) {
                fputcsv($output, ['Filters applied:', 'Yes']);
            }
        }
        
        // Log export activity
        logActivity($_SESSION['user_id'], 'csv_export', "Exported $rowCount calculations");
        
    } catch (PDOException $e) {
        error_log("CSV export error: " . $e->getMessage());
        // If headers not sent, show error
        if (!$headerWritten) {
            header('Content-Type: text/html');
            die("Export failed. Please try again.");
        }
    }
    
    fclose($output);
    exit();
}

// Main execution
try {
    $pdo = getDBConnection();
    
    $filters = [
        'user' => $filterUser,
        'date_from' => $filterDateFrom,
        'date_to' => $filterDateTo,
        'service_type' => $filterServiceType
    ];
    
    $exportAll = ($exportType === 'all');
    $queryData = buildExportQuery($filters, $exportAll);
    
    // Stream the CSV
    streamCSV($pdo, $queryData['query'], $queryData['params']);
    
} catch (Exception $e) {
    error_log("Export error: " . $e->getMessage());
    
    // If we haven't started output, redirect with error
    if (!headers_sent()) {
        setFlashMessage('error', 'Export failed. Please try again.');
        redirect('admin.php');
    }
}
?>