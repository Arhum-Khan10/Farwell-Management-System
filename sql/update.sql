USE `fms`;

-- Create 6 students
INSERT INTO Student (StudentID, Name, Email, Password, Role, DietaryPreferences) VALUES (1920, 'Ali Ahmed', 'i221920@nu.edu.pk', 'ali123', 'Senior Student', 'Vegetarian'),
(1877, 'Akbar Khan', 'i221877@nu.edu.pk', 'akbar123', 'Menu Manager', 'None'),
(2001, 'Abdullah Masood', 'i222001@nu.edu.pk', 'abduallah123', 'Menu Team', 'Vegetarian'),
(1968, 'Ammar Kashif', 'i221968@nu.edu.pk', 'abduallah123', 'Performances Manager', 'Meat'),
(1990, 'Muneeb Ali', 'i221990@nu.edu.pk', 'muneeb123', 'Performance Team', 'Seafood'),
(1966, 'Aurangzeb Ahmed', 'i221966@nu.edu.pk', 'aurangzeb123', 'Budget Team', 'None');

-- Create 3 teachers
INSERT INTO Teacher (TeacherID, Name, Email, Password) VALUES (1, 'Hasaan Mujtaba', 'hassan.mujtaba@nu.edu.pk', 'hassan123'); 