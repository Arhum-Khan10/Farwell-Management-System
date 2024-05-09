-- Active: 1709544121297@@127.0.0.1@3306@northwind
-- Create the database
CREATE DATABASE IF NOT EXISTS `fms`;

-- Use the database
USE `fms`;

-- Create the table IF NOT EXISTSs
-- Create Student tablea
CREATE TABLE IF NOT EXISTS Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100),
    DietaryPreferences VARCHAR(255)
);

-- Create Teacher table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Teacher (
    TeacherID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100)
);

-- Create FamilyMember table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS FamilyMember (
    FamilyMemberID INT PRIMARY KEY,
    Name VARCHAR(100),
    Relationship VARCHAR(100),
    TeacherID INT,
    FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);

-- Create Task table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Task (
    TaskID INT PRIMARY KEY,
    Description VARCHAR(255),
    Status VARCHAR(50),
    Deadline DATE,
    AssignedTo INT,
    FOREIGN KEY (AssignedTo) REFERENCES Student(StudentID)
);

-- Create Performance table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Performance (
    PerformanceID INT PRIMARY KEY,
    Type VARCHAR(100),
    Duration INT,
    SpecialRequirements VARCHAR(255),
    ProposedBy INT,
    FOREIGN KEY (ProposedBy) REFERENCES Student(StudentID)
);

-- Create MenuItem table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS MenuItem (
    MenuItemID INT PRIMARY KEY,
    ItemName VARCHAR(100),
    Votes INT
);

CREATE TABLE IF NOT EXISTS Venue (
    VenueID INT PRIMARY KEY,
    Name VARCHAR(100),
    Location VARCHAR(100),
    Capacity INT
);

-- Create Attendance table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Attendance (
    AttendanceID INT PRIMARY KEY,
    StudentID INT,
    TeacherID INT,
    FamilyMemberID INT,
    VenueID INT,
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID),
    FOREIGN KEY (FamilyMemberID) REFERENCES FamilyMember(FamilyMemberID),
    FOREIGN KEY (VenueID) REFERENCES Venue(VenueID)
);

-- Create Budget table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Budget (
    BudgetID INT PRIMARY KEY,
    Item VARCHAR(100),
    Expense DECIMAL(10, 2),
    Category VARCHAR(100),
    VenueID INT,
    FOREIGN KEY (VenueID) REFERENCES Venue(VenueID)
);

-- Create Decorations table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS Decorations (
    DecorationID INT PRIMARY KEY,
    Description VARCHAR(255),
    Cost DECIMAL(10, 2)
);

