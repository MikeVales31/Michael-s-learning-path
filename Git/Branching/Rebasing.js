/*
Rebasing

Rewrites history only for local commits in the repository.
It is used when the commits are diverged.

Go to the diverged branch.

(git rebase master)

We switch to master.

Then we merge the other branch.

if it is used several times and sends a conflict.
(git rebase --continue) tell Git to apply the next commit on top of master.
(git rebase --skip) skip the current commit and move on the next.
(git rebase --abort)
(cat "file name") look at the content in the file.


*/