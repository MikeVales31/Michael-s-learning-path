/*
Transactions

Is a group of SQL statements that represent a single unit of work, all the statement must be completed
or the transaction will fail.

We use transactions in situations where we want to make multiple changes to a database.

The transactions have the next properties:

1) Atomicity: are unbreakable is a single unit not matter how many statements have.
2) Consistency: our database always remain in a consistent state.
3) Isolation: are protected from each other if they tried to modify the same data.
4) Durability: once a transaction is commited the changes are permanent.
*/