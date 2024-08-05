/*
Using subqueries in updates

A sub query  is a select statement that is within another SQL statement 

Example:
UPDATE orders
SET comments = 'Gold customer'
WHERE customer_id IN 
					(SELECT customer_id
					FROM sql_store.customers
					WHERE points > 3000)

Note: we use IN for multiple references, if there is only 1 use =
*/