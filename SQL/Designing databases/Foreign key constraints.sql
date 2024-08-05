/*
Foreign key constraints

Whenever you have a foreign key in a table, you need to set the constrains in the 
foreign key.

The convention to a foreign key is fk_"foreign key table"_"primary key table"

Example:

fk_enrollments_students

Note: it is a bad practice to change the primary keys and foreng keys.

In the foreign keys tab on MySQL you can change the foreign key options "on update" or "on delete",
if you select cascate it will update or delete, "restrict" and "no action" are practically the same,
"set null" it is preferible not to use it.

As a rule we should always on update select "CASCADE" and on delete most of the time it is better
to reject the operation. You should always check with the business
*/