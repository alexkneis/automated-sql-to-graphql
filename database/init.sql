DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS contacts;

CREATE TABLE author(
  id Int,
  firstName varchar,
  lastName varchar,
  PRIMARY KEY(id)
);

CREATE TABLE book (
  id Int,
  authorid Int,
  title varchar,
  PRIMARY KEY (id),
  CONSTRAINT author
      FOREIGN KEY(authorid) 
	  REFERENCES author(id)
);

INSERT INTO author(id, firstName, lastName) VALUES (0, 'Joanne K.','Rowling');
INSERT INTO author(id, firstName, lastName) VALUES (1,'John Ronald Reuel', 'Tolkien');
INSERT INTO book(id, authorid, title) VALUES (0, 1, 'The Lord of the Rings');
INSERT INTO book(id, authorid, title) VALUES (1, 0, 'Harry Potter');