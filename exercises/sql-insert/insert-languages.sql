INSERT INTO "languages" ("name")
VALUES	('HTML'),
	('CSS'),
	('Javascript')
RETURNING *;
