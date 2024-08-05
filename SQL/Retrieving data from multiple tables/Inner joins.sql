/*
Inner joins

To show information from multiple tables.

1)SELECT 
2)FROM 
3)INNER JOIN/JOIN (it is the same)

(JOIN "table" ON "from table"."attribute" = "join table"."attribute")

Example
SELECT *
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id

Note: if you want to select a attribute that is on both tables you have to 
qualify them by prefixing them with the name of their table. To simplify the 
code you can create a tag to the name's repeated.

*/