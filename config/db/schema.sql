### Schema
DROP DATABASE IF EXISTS xdkice95y5171qmt;
CREATE DATABASE xdkice95y5171qmt;
USE xdkice95y5171qmt;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_type varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);