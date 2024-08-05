/*
Transaction isolation levels

1) Read uncommited
2) Read commited
3) Repeatable reads
4) Serializable

SHOW VARIABLES STATEMENT LIKE 'transaction_isolation'; it will show you the isolation level.
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE; it will change the next transaction level.
SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE; it will change all future transactions levels.

*/