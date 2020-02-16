### Schema
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_type varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL false,
	PRIMARY KEY (id)
);
