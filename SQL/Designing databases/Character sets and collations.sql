/*
Character sets and collations 

It is a table that maps each character to a number.

In the navegation panel, right click a database, go to schema inspector. It will display 
the character set, collation, etc...

You can change the character set on a table or column level, display one of the tables 
on the design mode, select a "character column", below you have the charset and collation.

SHOW CHARACTERSET to show all possibilities.

There are two ways to change the character set in a database:

1) You can set the characterset whe you are doing a database.

    Example:
    CREATE DATABASE "name"
        CHARACTER SET "name"

2) After creating a database  
ALTER DATABASE "name"
        CHARACTER SET "name"



*/