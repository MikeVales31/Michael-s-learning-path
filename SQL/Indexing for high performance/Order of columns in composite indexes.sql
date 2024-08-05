/*
Order of columns in composite indexes

1) Put the most frequently used columns first.
2) Put the columns with a higher cardinality first.
3) Take your queries into account.

Cadinality represents the number of unique values in the index.

Note: the second rule depends on the queries 

--You can force the program to use an specific index

Example:

EXPLAIN SELECT customer_id
FROM customers
USE INDEX (idx_lastname_state)
WHERE state = 'CA' AND last_name LIKE 'A%';

--You can drop a index.
DROP INDEX "index name" ON "table name";

DROP INDEX idx_lastname_state ON customers;

*/