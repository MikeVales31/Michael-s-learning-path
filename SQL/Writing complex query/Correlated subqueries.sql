/*
Correlated subqueries

When you have correlation with the output query, you are referencing the alias from the outer query.
When we use a correlated subquery, the query is exectued for each row in the main query.

Example:
SELECT *
FROM invoices i
WHERE i.invoice_total > (
SELECT AVG(invoice_total)
FROM invoices
WHERE client_id = i.client_id
)
*/