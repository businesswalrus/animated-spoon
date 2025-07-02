-- Migration to add material markup tracking fields to existing database
-- Run this if you already have the calculations table and need to add the new fields

ALTER TABLE calculations 
ADD COLUMN material_markup_percent DECIMAL(5,2) NOT NULL DEFAULT 0 AFTER material_cost,
ADD COLUMN material_charge DECIMAL(10,2) NOT NULL DEFAULT 0 AFTER material_markup_percent;

-- Optional: Update existing records with calculated values
-- This assumes the original material_cost was the raw cost without markup
UPDATE calculations 
SET material_markup_percent = 
    CASE 
        WHEN material_cost <= 1.00 THEN 400.00
        WHEN material_cost <= 5.00 THEN 300.00
        WHEN material_cost <= 10.00 THEN 250.00
        WHEN material_cost <= 25.00 THEN 200.00
        WHEN material_cost <= 50.00 THEN 150.00
        WHEN material_cost <= 75.00 THEN 125.00
        WHEN material_cost <= 500.00 THEN 100.00
        ELSE 67.59
    END,
material_charge = 
    CASE 
        WHEN material_cost <= 1.00 THEN material_cost * 5.00
        WHEN material_cost <= 5.00 THEN material_cost * 4.00
        WHEN material_cost <= 10.00 THEN material_cost * 3.50
        WHEN material_cost <= 25.00 THEN material_cost * 3.00
        WHEN material_cost <= 50.00 THEN material_cost * 2.50
        WHEN material_cost <= 75.00 THEN material_cost * 2.25
        WHEN material_cost <= 500.00 THEN material_cost * 2.00
        ELSE material_cost * 1.6759
    END
WHERE material_charge = 0;