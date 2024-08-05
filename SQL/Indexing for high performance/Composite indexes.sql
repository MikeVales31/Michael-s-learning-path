/*
Composite indexes

With this index we can quickly find the data.

Example:
USE sql_store;
CREATE INDEX idx_state_points ON customers(state, points);
EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA' AND points > 1000;

Note: most of the time we should use composite indexes.
*/