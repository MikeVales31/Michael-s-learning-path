/*
Using triggers for auditing 

Another common use case for triggers is logging changes to the data for auditing.
An example is whenever someone inserts or deletes a record, so we can see who made the changes and when.

In the body of the trigger we insert with the statement INSERT INTO "name of the table"
then VALUES()

So first, you need to do 2 triggers one for insert and another one to delete, then you add
the next examples.

Examples:

--To insert
INSERT INTO "name of the table"
VALUES(NEW.client_id, NEW.date, NEW.amount, 'Insert', NOW());

--to delete
INSERT INTO "name of the table"
VALUES(OLD.client_id, OLD.date, OLD.amount, 'Delete', NOW());

*/