/*
Checking out a commit

When you don't want to see the complete snapshot(changes of the projects).

We restore the working directory to a previous commit.
(git checkout "ID of the commit")

We recibe a warnirng "detached HEAD" that means you are on the commit selected DON'T MAKE OTHER COMMITS
, so you can view with (git log --oneline) the previous commitments or if you want to see all use 
(git log --oneline --all)

To attached the HEAD to the master again we use (git checkout master)
*/