/*
Concurrency problems

1) Lost updates: two transactions try to update the same data and we don't use locks.
2) Dirty reads: a transaction tries to read data that hasn't been commited yet.
3) Non-repeating reads: the transaction read twice and has different results.
4) Phantom reads: data that suddenly appears and we miss them in our query. Because it was 
    updated after the commit.

*/
