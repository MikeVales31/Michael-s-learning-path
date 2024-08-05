/*
Prefix indexes

String columns:

CHAR 
VARCHAR 
TEXT 
BLOB 

Note: we can specify the number of chars in the index for CHAR and VARCHAR.

Example:

CREATE INDEX idx_lastname ON customers (last_name(20));

SELECT 
	COUNT(DISTINCT LEFT(last_name,1)),
    COUNT(DISTINCT LEFT(last_name,5)),
    COUNT(DISTINCT LEFT(last_name,10))
FROM customers
    
*/