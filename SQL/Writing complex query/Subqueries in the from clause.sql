/*
Subqueries in the from clause 

Reserve it only for simple queries because if you don't the query will look complex and difficult to
read, it is useful for filter data and do operations. You must put an alias.

Example:

SELECT*
FROM (
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
) AS sales_summary
WHERE total_sales IS NOT NULL
*/