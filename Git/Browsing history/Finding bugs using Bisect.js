/*
Finding bugs using Bisect

(git bisect start) begin the operation to start debugging
(git bisect bad) the last commit where is bad
(git bisect good "ID of commit") where the commit is good

Make the previous 2 steps until you find where the bad commit begins 

(git bisect reset) the HEAD goes to master

*/