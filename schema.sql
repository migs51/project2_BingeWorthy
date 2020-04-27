-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS binge_db;
-- Creates the "blogger" database --
CREATE DATABASE binge_db;

USE binge_db;

CREATE TABLE shows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  release_date INT NOT NULL,
  streaming_service VARCHAR(100) NOT NULL,
  binge_rank INT NOT NULL,
);


CREATE TABLE recommendation (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users VARCHAR(100) NOT NULL,
  shows VARCHAR(100) NOT NULL,
  bingeable BOOLEAN NOT NULL
);