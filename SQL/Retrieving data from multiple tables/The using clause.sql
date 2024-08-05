/*
The using clause

we can use it with inner and outer joins, it serves to join columns with the same name.

for example:
SELECT *
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id

it is the same that:
SELECT *
FROM orders o
JOIN customers c
    USING(customer_id)
*/