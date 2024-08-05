/*
Updatable views

If the view doesn't have "DISTINCT" and any aggregate functions like (MIN, MAX, SUM)
GROUP BY/HAVING or the UNION operator. Then we refer to it as a updatable view.

This means that we can update data so we can use the INSERT, UPDATE or DELETE statements.

Example:

CREATE OR REPLACE VIEW invoices_with_balance AS
SELECT
	invoice_id,
    number,
    client_id,
    invoice_total,
    payment_total,
    invoice_total - payment_total AS balance,
    invoice_date,
    due_date,
    payment_date
FROM invoices
WHERE (invoice_total - payment_total) > 0

-- this is an updatable view so we can update data.

UPDATE invoices_with_balance
SET due_date = DATE_ADD(due_date, INTERVAL 2 DAY)
WHERE invoice_id = 2
*/