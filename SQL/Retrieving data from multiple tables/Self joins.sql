/*
Self joins

it is used when you have your reference in the same table.

From "table name" "alias1"
Join "table name" "alias2"
    ON "use the reference" = "reference"

Example 
SELECT *
FROM employees e
JOIN employees m
    ON e.reports_to = m.employee_id
*/