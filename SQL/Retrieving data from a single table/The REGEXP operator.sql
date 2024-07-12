/*
Regexp operator 

Regular expresions allows us to search for much complex patterns

(WHERE "attribute" REGEXP "word") it shows you the attributes that contains that word.

^ it indicates the beginning of a string. (WHERE "attribute" REGEXP "^word")
$ it indicates the end of a string. (WHERE "attribute" REGEXP "word$")
| it inficates or. (WHERE "attribute" REGEXP "word1|word2")
[] it will match the letters (can be a range "a-h") inside the brackets with the indication.
(WHERE "attribute" REGEXP "[aem]e")


*/