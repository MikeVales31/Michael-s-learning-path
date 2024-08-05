/*
The with option check clause

When you update or delete data through a view, some of the rows will disappear.
We can use the WITH CHECK OPTION to prevent this.

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
WITH CHECK OPTION 
*/