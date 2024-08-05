/*
Altering or droping views

DROP VIEW "name of the view" and then create it again or CREATE OR REPLACE VIEW.

Example:

CREATE OR REPLACE VIEW sales_by_client AS
SELECT 
	c.client_id,
	c.name,
    SUM(invoice_total) AS total_sales
FROM clients c
JOIN invoices i USING (client_id)
GROUP BY client_id, name
*/