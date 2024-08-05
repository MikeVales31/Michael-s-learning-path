/*
Creating transactions

We use the START TRANSACTION statement to begin the transaction.
COMMIT statement to finish the transaction. You can use the ROLLBACK to undo all the changes.

Example:

START TRANSACTION;

INSERT INTO orders (customer_id, order_date, status)
VALUE (1, '2019-01-01', 1);

INSERT INTO order_items
VALUES (LAST_INSERT_ID(), 1, 1, 1);

COMMIT;
*/