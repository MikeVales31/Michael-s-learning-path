/*
Formatting the Log Output

%an => author name
%H => commit ID
%h => commit ID abbreviated
%cd => commit date
%Cgreen => change color to green

(git log --pretty=format:"%an committed %H") message "author commited commit ID"
(git log --pretty=format:"%an committed %h") message "author commited commit ID abbreviated"
(git log --pretty=format:"%an committed %h on %cd") message "author commited commit ID abbreviated and commit date"
(git log --pretty=format:"%Cgreen%an%Creset committed %h on %cd") message "author(in green) commited commit ID abbreviated and commit date"

*/