/*
Using indexes for sorting

if you have a composite index you can sort by:
1) The first column.
2) Both columns in order.
3) Both columns in order and each one descending.

Example:

EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA'
ORDER BY points;
SHOW STATUS LIKE 'last_query_cost'
*/