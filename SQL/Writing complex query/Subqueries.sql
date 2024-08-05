/*
Subqueries 

When you apply the select command into a query.

We can make a subquery in the next clauses:
SELECT
FROM 
WHERE

Example:
SELECT*
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    )
*/