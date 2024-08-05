/*
Creating a copy of a table

Copy data from a table to another,

--Create a copy of a table 
CREATE TABLE "table name" AS 
SELECT "what you want"
FROM "original table"

In the new table we don't have a primary key.
In the Schemas navigator we do a right click on the new table, it will display some options,
if you want to delete all the data from a table select "truncate table"

--Copy some information from a table to another
INSERT INTO "table"

SELECT *
FROM "original table"
WHERE "condition"


*/