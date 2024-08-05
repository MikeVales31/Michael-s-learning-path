/*
The any keyword

The ANY/SOME keyword are equivalent and it is equivalent to the IN operator.

Example:

SELECT *
FROM clients
WHERE client_id = ANY (
    SELECT client_id
    FROM invoices
    GROUP BY client_id
    HAVING COUNT(*) >= 2
)
*/