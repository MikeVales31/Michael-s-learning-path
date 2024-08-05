/*
Creating indexes

CREATE INDEX "name" ON "table name"("name of the column")

Note: the name has to be prefixed with idx_ then the name of the column.

Example:
EXPLAIN SELECT customer_id
FROM customers
WHERE state = 'CA';
CREATE INDEX idx_state ON customers (state);

*/