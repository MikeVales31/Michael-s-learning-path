/*
When indexes are ignored 

If you are using an OR operator in the where clause, the index will throw a condirable number
of rows that scan, we can optimize using only the where clause with the UNION opertator.
Whenever you use a column in a expression MySQL is not able to use our index in the best possible way.

Note: You should isolate the column in the expression.

Example:

EXPLAIN SELECT customer_id FROM customers
WHERE points > 2000;
*/