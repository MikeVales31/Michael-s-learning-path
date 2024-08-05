/*
The all keyword

As the name says the all keyword can compare to a list of values.

Example:

SELECT *
FROM invoices
WHERE invoice_total > ALL (
    SELECT invoice_total
    FROM invoices
    WHERE client_id = 3    
)
*/