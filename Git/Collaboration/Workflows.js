/*
Workflows

Centralized workflow: everyone has a repository but there is also a central repository 
used to synchronized their work. We use the push command to send the commits to the central repository.
And we can use the pull command to bring the updates on the local repository (careful with errors).

Integration manager workflow (open source project): they are divided by maintainer and contributors, 
but only the maintainers have push access to the repository. They fork the repository in order to make
a copy of the repository in the cloud then clone to the contributors and they will work on the fork
repository, then the contributor send a pull request and the maintainer decides if he adds the 
changes in the original repository.

*/