/*
Inserting hierarchical rows

It is used to insert data into multiple tables

INSERT INTO "table 1"(specify the columns)
VALUES();

INSERT INTO "table 2"
VALUES(LAST_INSERT_ID(),"value1","value2",...)

Note: LAST_INSERT_ID() returns the last ID and we use it to make a reference to the same thing 
in both tables.
*/