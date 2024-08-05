/*
Full-text indexes

We use this indexes to build fast and flexible applications in our search engines.

CREATE FULLTEXT INDEX "name" ON "table name"("columns")

Example:

CREATE FULLTEXT INDEX idx_title_body ON posts (title, body);

SELECT *, MATCH(title, body) AGAINST ('react redux')
FROM posts
WHERE MATCH(title, body) AGAINST ('react -redux'IN BOOLEAN MODE)

Note: in boolean mode the - ignore the word, + search for that word, "" search exactly the word.
*/