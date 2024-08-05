/*
The IN operator 

In the where clause after the attribute we use the IN or NOT IN operator 
to do another subquerie and search for results

Example:
SELECT DISTINCT c.client_id
FROM clients c 
WHERE client_id NOT IN (
	SELECT DISTINCT i.client_id
    FROM invoices i 
)
*/