/*
Subqueries in the select clause

We can use it in the select clause to make operations like average and distinct operations.

Example:
SELECT 
	DISTINCT c.client_id,
    c.name,
    (SELECT SUM(invoice_total)
		FROM invoices i
		WHERE c.client_id = i.client_id 
		GROUP BY client_id) AS total_sales,
    (SELECT AVG(invoice_total) FROM invoices) AS average,
    (SELECT total_sales - average) AS difference
FROM clients c


*/