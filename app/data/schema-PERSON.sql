show databases;
CREATE DATABASE msis;

USE msis;

CREATE TABLE user(
  id INTEGER NOT NULL AUTO_INCREMENT,
  commentText VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user(commentText) VALUES
("I have something important to say"),
("D&S is awesome"),
("😁");
