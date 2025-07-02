<?php
require_once 'config.php';

// Require login
requireLogin();

$message = '';
$messageType = '';

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'calculate') {
    // Verify CSRF token
    if (!verifyCSRFToken($_POST['csrf_token'] ?? '')) {
        $message = 'Invalid form submission. Please try again.';
        $messageType = 'error';
    } else {
        // Get and validate form data
        $serviceType = sanitizeInput($_POST['service_type'] ?? '');
        $materialCost = $_POST['material_cost'] ?? '';
        $laborCategory = sanitizeInput($_POST['labor_category'] ?? '');
        $minutes = $_POST['minutes'] ?? '';
        $includeTax = isset($_POST['include_tax']) ? 1 : 0;
        
        // Allowed values
        $allowedServiceTypes = ['Residential', 'Commercial'];
        $allowedLaborCategories = ['Regular Time', 'Time and a Half', 'Double Time'];
        // Generate allowed minutes: 15-minute increments up to 16 hours
        $allowedMinutes = [];
        for ($i = 15; $i <= 960; $i += 15) {
            $allowedMinutes[] = $i;
        }
        
        // Validation
        $errors = [];
        
        // Validate service type
        if (empty($serviceType)) {
            $errors[] = 'Service Type is required.';
        } elseif (!in_array($serviceType, $allowedServiceTypes)) {
            $errors[] = 'Invalid Service Type selected.';
        }
        
        // Validate material cost
        if ($materialCost === '') {
            $errors[] = 'Material Cost is required.';
        } elseif (!is_numeric($materialCost)) {
            $errors[] = 'Material Cost must be a valid number.';
        } else {
            $materialCost = floatval($materialCost);
            if ($materialCost < 0) {
                $errors[] = 'Material Cost cannot be negative.';
            } elseif ($materialCost > 999999.99) {
                $errors[] = 'Material Cost cannot exceed $999,999.99.';
            }
        }
        
        // Validate labor category
        if (empty($laborCategory)) {
            $errors[] = 'Labor Category is required.';
        } elseif (!in_array($laborCategory, $allowedLaborCategories)) {
            $errors[] = 'Invalid Labor Category selected.';
        }
        
        // Validate minutes
        if ($minutes === '') {
            $errors[] = 'Labor Time is required.';
        } elseif (!is_numeric($minutes)) {
            $errors[] = 'Labor Time must be a valid number.';
        } else {
            $minutes = intval($minutes);
            if (!in_array($minutes, $allowedMinutes)) {
                $errors[] = 'Invalid Labor Time selected. Please choose from the available options.';
            }
        }
        
        // Check for errors
        if (!empty($errors)) {
            $message = implode('<br>', $errors);
            $messageType = 'error';
        } else {
            // Calculate charges
            $laborRate = getLaborRate($laborCategory);
            $laborCharge = calculateLaborCharge($minutes, $laborRate);
            
            // Get material markup details
            $materialDetails = calculateMaterialMarkup($materialCost, true);
            
            $totals = calculateTotal($materialCost, $laborCharge, $includeTax);
            
            try {
                // Save to database
                $pdo = getDBConnection();
                $stmt = $pdo->prepare("
                    INSERT INTO calculations (
                        user_id, service_type, material_cost, material_markup_percent,
                        material_charge, labor_category, minutes, labor_rate, 
                        labor_charge, include_tax, tax_amount, total_amount
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ");
                
                $stmt->execute([
                    $_SESSION['user_id'],
                    $serviceType,
                    $materialCost,
                    $materialDetails['percent'],
                    $materialDetails['charge'],
                    $laborCategory,
                    $minutes,
                    $laborRate,
                    $laborCharge,
                    $includeTax,
                    $totals['tax'],
                    $totals['total']
                ]);
                
                $message = 'Flat rate price generated!';
                $messageType = 'success';
                
                // Log activity
                logActivity($_SESSION['user_id'], 'calculation_saved', "Total: " . formatCurrency($totals['total']));
                
            } catch (PDOException $e) {
                error_log("Calculation save error: " . $e->getMessage());
                $message = 'Error saving calculation. Please try again.';
                $messageType = 'error';
            }
        }
    }
}

// Get recent calculations for field techs
$recentCalculations = [];
if ($_SESSION['role'] === 'tech') {
    try {
        $pdo = getDBConnection();
        $stmt = $pdo->prepare("
            SELECT * FROM calculations 
            WHERE user_id = ? 
            ORDER BY created_at DESC 
            LIMIT 10
        ");
        $stmt->execute([$_SESSION['user_id']]);
        $recentCalculations = $stmt->fetchAll();
    } catch (PDOException $e) {
        error_log("Error fetching recent calculations: " . $e->getMessage());
    }
}

$csrfToken = generateCSRFToken();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Field Service Calculator</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="navbar-content">
            <h1>Field Service Calculator</h1>
            <div class="navbar-nav">
                <span>Welcome, <?php echo sanitizeInput($_SESSION['username']); ?></span>
                <?php if ($_SESSION['role'] === 'admin'): ?>
                    <a href="admin.php">Dashboard</a>
                    <a href="manage_users.php">Manage Users</a>
                <?php endif; ?>
                <a href="logout.php">Logout</a>
            </div>
        </div>
    </nav>
    
    <div class="container">
        <div class="calculator-card">
            <div class="calculator-header">
                <h2>Service Calculator</h2>
                <p>Calculate service charges for field work</p>
            </div>
            
            <?php if ($message): ?>
                <div class="alert alert-<?php echo $messageType; ?>">
                    <?php echo sanitizeInput($message); ?>
                </div>
            <?php endif; ?>
            
            <?php displayFlashMessage(); ?>
            
            <form method="POST" action="index.php" id="calculatorForm">
                <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                <input type="hidden" name="action" value="calculate">
                
                <div class="form-grid">
                    <div class="form-group">
                        <label for="service_type">Service Type</label>
                        <select id="service_type" name="service_type" required>
                            <option value="">Select Service Type</option>
                            <option value="Residential" <?php echo ($serviceType ?? '') === 'Residential' ? 'selected' : ''; ?>>Residential</option>
                            <option value="Commercial" <?php echo ($serviceType ?? '') === 'Commercial' ? 'selected' : ''; ?>>Commercial</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="material_cost">Material Cost ($)</label>
                        <input type="number" id="material_cost" name="material_cost" 
                               min="0" max="999999.99" step="0.01" value="<?php echo htmlspecialchars($materialCost ?? '0'); ?>" required 
                               title="Enter material cost between $0 and $999,999.99">
                    </div>
                    
                    <div class="form-group">
                        <label for="labor_category">Labor Category</label>
                        <select id="labor_category" name="labor_category" required>
                            <option value="">Select Labor Category</option>
                            <option value="Regular Time" <?php echo ($laborCategory ?? '') === 'Regular Time' ? 'selected' : ''; ?>>Regular Time</option>
                            <option value="Time and a Half" <?php echo ($laborCategory ?? '') === 'Time and a Half' ? 'selected' : ''; ?>>Time and a Half</option>
                            <option value="Double Time" <?php echo ($laborCategory ?? '') === 'Double Time' ? 'selected' : ''; ?>>Double Time</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="minutes">Labor Time</label>
                        <select id="minutes" name="minutes" required>
                            <option value="">Select Time</option>
                            <?php
                            // Generate time options in 15-minute increments up to 16 hours
                            $selectedMinutes = $_POST['minutes'] ?? '';
                            for ($min = 15; $min <= 960; $min += 15) {
                                $hours = floor($min / 60);
                                $mins = $min % 60;
                                
                                if ($hours > 0 && $mins > 0) {
                                    $display = $hours . " hr " . $mins . " min";
                                } elseif ($hours > 0) {
                                    $display = $hours . " hour" . ($hours > 1 ? "s" : "");
                                } else {
                                    $display = $mins . " minutes";
                                }
                                
                                $selected = ($selectedMinutes == $min) ? 'selected' : '';
                                echo "<option value=\"$min\" $selected>$display</option>\n";
                            }
                            ?>
                        </select>
                    </div>
                    
                    <div class="form-group full-width">
                        <div class="checkbox-group">
                            <input type="checkbox" id="include_tax" name="include_tax" <?php echo ($includeTax ?? false) ? 'checked' : ''; ?>>
                            <label for="include_tax">Include Sales Tax (7%)</label>
                        </div>
                    </div>
                </div>
                
                <?php if ($message && $messageType === 'success' && isset($totals)): ?>
                <div class="results-preview" id="resultsPreview">
                    <h3>Flat Rate Price</h3>
                    <?php if ($_SESSION['role'] === 'admin'): ?>
                    <div class="result-line">
                        <span>Material Cost (entered):</span>
                        <span><?php echo formatCurrency($materialCost); ?></span>
                    </div>
                    <div class="result-line">
                        <span>Material Charge (with markup):</span>
                        <span id="previewMaterial"><?php echo formatCurrency(calculateMaterialMarkup($materialCost)); ?></span>
                    </div>
                    <div class="result-line">
                        <span>Labor Charge:</span>
                        <span id="previewLabor"><?php echo formatCurrency($laborCharge); ?></span>
                    </div>
                    <?php if ($includeTax && $totals['tax'] > 0): ?>
                    <div class="result-line" id="taxLine">
                        <span>Sales Tax (7%):</span>
                        <span id="previewTax"><?php echo formatCurrency($totals['tax']); ?></span>
                    </div>
                    <?php endif; ?>
                    <?php endif; ?>
                    <div class="result-line total">
                        <span><?php echo $_SESSION['role'] === 'admin' ? 'Total:' : 'Price:'; ?></span>
                        <span id="previewTotal"><?php echo formatCurrency($totals['total']); ?></span>
                    </div>
                </div>
                <?php endif; ?>
                
                <div class="button-group">
                    <button type="submit" class="btn-primary">Calculate</button>
                    <button type="reset" class="btn-secondary" id="resetBtn">Clear Form</button>
                </div>
            </form>
        </div>
        
        <?php if ($_SESSION['role'] === 'tech' && count($recentCalculations) > 0): ?>
        <div class="recent-calculations">
            <h3>Your Recent Calculations</h3>
            <div class="table-wrapper">
                <table class="calculations-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Service Type</th>
                            <th>Flat Rate Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($recentCalculations as $calc): ?>
                        <tr>
                            <td><?php echo date('m/d/y h:i A', strtotime($calc['created_at'])); ?></td>
                            <td><?php echo sanitizeInput($calc['service_type']); ?></td>
                            <td><?php echo formatCurrency($calc['total_amount']); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
        <?php endif; ?>
    </div>
    
    <script src="js/calculator.js"></script>
</body>
</html>