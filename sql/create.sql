-- Create the database
CREATE DATABASE IF NOT EXISTS `fms`;

-- Use the database
USE `fms`;

-- Create the tables
CREATE TABLE IF NOT EXISTS `users` (
  `studentID` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `DieteryPreferences` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);