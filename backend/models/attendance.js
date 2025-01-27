const pool = require("../../config/database");

module.exports = {
  getAttendanceByUserId: (userId, callback) => {
    pool.query(
      `SELECT attendanceid, userid, date, time, status FROM Attendance WHERE userid = ?`,
      [userId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  //----------------------------------
  createattendance: (data, callback) => {
    pool.query(
      "INSERT INTO attendance (userid, date, time, status, created_on, created_by) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.userid,
        data.date,
        data.time,
        data.status,
        data.created_on,
        data.created_by,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAttendance: (callback) => {
    pool.query(
      `SELECT attendanceid, userid, date, time, status FROM attendance`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getAttendanceById: (id, callback) => {
    pool.query(
      `SELECT attendanceid, userid, date, time, status FROM attendance WHERE attendanceid = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        if (results.length === 0) {
          return callback(null, null); // Return null if attendance not found
        }
        return callback(null, results[0]);
      }
    );
},

  updateAttendance: (data, callback) => {
    pool.query(
      "UPDATE attendance SET userid = ?, date = ?, time = ?, status = ?, created_on = ?, created_by = ? WHERE attendanceid = ?",
      [
        data.userid,
        data.date,
        data.time,
        data.status,
        data.updated_on,
        data.updated_by,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  deleteAttendance: (id, callback) => {
    pool.query(
      `DELETE FROM attendance WHERE attendanceid = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
