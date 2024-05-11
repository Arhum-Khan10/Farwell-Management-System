const db = require('../config/database');

exports.recordAttendance = (req, res) => {
    const { studentID } = req.body;

    const query = 'INSERT INTO Attendance (StudentID, Status) VALUES (?, "Present") ON DUPLICATE KEY UPDATE Status = "Present"';

    db.query(query, [studentID], (err, result) => {
        if (err) {
            console.error("Error updating attendance status:", err);
            res.status(500).send('Error updating attendance status');
        } else {
            res.redirect('/attendance');
        }
    })
};

exports.viewAttendance = (req, res) => {
    const query = `
        SELECT s.StudentID, s.Name, IFNULL(a.Status, 'Absent') AS Status
        FROM Student s
        LEFT JOIN Attendance a ON s.StudentID = a.StudentID
        ORDER BY s.Name;
    `;
    db.query(query, (err, attendanceRecords) => {
        if (err) {
            console.error("Error fetching attendance records:", err);
            res.status(500).send('Error fetching attendance records');
        } else {
            res.render('viewAttendance', { attendanceRecords: attendanceRecords, user: req.session.user });
        }
    });
};
