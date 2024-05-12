DROP DATABASE IF EXISTS `fms`;

-- Create the database
CREATE DATABASE IF NOT EXISTS `fms`;

-- Use the database
USE `fms`;

-- Create Student tablea
CREATE TABLE IF NOT EXISTS Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(100),
    Role VARCHAR(100),
    DietaryPreferences VARCHAR(255)
);

-- Create Teacher table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Teacher (
    TeacherID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(100)
);

-- Create FamilyMember table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS FamilyMember (
    FamilyMemberID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Relationship VARCHAR(100),
    TeacherID INT,
    FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);

-- Create Task table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Task (
    TaskID INT PRIMARY KEY AUTO_INCREMENT,
    Description VARCHAR(255),
    Status VARCHAR(50),
    Deadline DATE,
    AssignedTo INT,
    FOREIGN KEY (AssignedTo) REFERENCES Student(StudentID)
);

-- Create Performance table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Performance (
    PerformanceID INT PRIMARY KEY AUTO_INCREMENT,
    Type VARCHAR(100),
    Duration INT,
    SpecialRequirements VARCHAR(255),
    ProposedBy INT,
    FOREIGN KEY (ProposedBy) REFERENCES Student(StudentID)
);

-- Create MenuItem table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS MenuItem (
    MenuItemID INT PRIMARY KEY AUTO_INCREMENT,
    ItemName VARCHAR(100),
    Votes INT
);

-- Create Attendance table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Attendance (
    AttendanceID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    Status VARCHAR(50) DEFAULT 'Absent',
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);

-- Create Budget table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Budget (
    BudgetID INT PRIMARY KEY AUTO_INCREMENT,
    Item VARCHAR(100),
    Amount DECIMAL(10, 2),
    Category VARCHAR(100)
);