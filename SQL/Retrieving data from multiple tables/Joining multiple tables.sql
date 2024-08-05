/*
Joining multiple tables

do multiple joins in order to take multiple tables.

Example 
SELECT *
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
JOIN order_statuses or
    ON o.status = os.order_status_id
*/