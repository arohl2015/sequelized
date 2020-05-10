-- schema creation for the burgers DB
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (200) NOT NULL,
    -- default to false - want them to not be devoured first
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
