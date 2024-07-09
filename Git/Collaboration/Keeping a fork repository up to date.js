/*
Keeping a fork repository up to date

In the local repository we have a reference to our forked repository called origin (git remote),
we can add a reference to the base repository (git remote add "name" "URL") and then use the pull command
to bring the new commits. And then we can push them to our forked repository.

After we make the changes in the base repository we use (git fetch "name of repository")
then we merge. Then we apply (git push).
*/