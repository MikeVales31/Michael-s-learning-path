/*
JSON type

Lightweight format for storing and transferring data over the internet.
It's is used heavily in web and mobile applications.

In JSON we use {"key": value} to define an object.

First we add a column and in the datatype write JSON.
Example:

UPDATE products
SET properties = '
{
	"dimensions": [1,2,3], 
    "weight": 10,
    "manufacturer": {"name": "sony"}
}
'
WHERE product_id = 1;

--can be written also like 

UPDATE products
SET properties = JSON_OBJECT(
'weight', 10, 
'dimensions', JSON_ARRAY(1,2,3),
'manufacturer', JSON_OBJECT('name', 'sony')
)
WHERE product_id = 1;

--But also have a benefit, we can extract a individual key value pairs from this 
JSON object with JSON_EXTRACT("JSON obj", "path"). The $ is on the current.

Example:

SELECT product_id, JSON_EXTRACT(properties, '$.weight')
FROM products
WHERE product_id = 1

--can be written like

SELECT product_id, properties -> '$.weight'
FROM products
WHERE product_id = 1

if it is an array you specify with [] and the index,
if it is a string to get rid of the quotes you add > (->>)

--To update an specific key or value or add we use the JSON_SET()

Example:

UPDATE products
SET properties = JSON_SET(
properties,
'$.weight', 20,
'$.age', 10 
)
WHERE product_id = 1;

--We can remove one or more properties with JSON_REMOVE()

Example:

UPDATE products
SET properties = JSON_REMOVE(
properties,
'$.age' 
)
WHERE product_id = 1;
*/