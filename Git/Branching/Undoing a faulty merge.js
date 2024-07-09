/*
Undoing a faulty merge

Remove commit (rewriting history) not ideal can make more errors
(git reset --hard HEAD~1) all the enviroments will look identical
(git reset --hard "ID commit") to undo 

(git revert -m 1 HEAD ) create a commit with undo of the last commit respecting the history.



*/