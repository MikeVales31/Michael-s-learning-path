/*
Deleting rows

If you want to delete all the records from a table
DELETE FROM "table"

If you want to delete specifically something
DELETE FROM "table"
WHERE "condition"

You can also do it with subqueries 
DELETE FROM "table"
WHERE "attribute" = (
    SELECT *
    FROM "table"
    WHERE "condition")
*/