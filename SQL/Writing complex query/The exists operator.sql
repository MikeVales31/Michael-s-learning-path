/*
The exists operator

It will check if someone exists in the criterion.
It is similar to the IN operator but more efficent when you use in larger lists.

Example:
SELECT *
FROM products p
WHERE NOT EXISTS (
SELECT product_id
FROM order_items
WHERE product_id = p.product_id
)

*/