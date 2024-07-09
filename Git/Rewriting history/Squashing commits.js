/*
Squashing commits 

You start with the parent of the commit you want copying the commit ID

(git rebase -i "commit ID")

Replace the pick command with squash, with this git will combine with the previous one.
You can use fixup git doesn't take the message of the commit 
*/