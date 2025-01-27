
const pool = require("../../config/database");

module.exports = {
  createAchievement: (data, callback) => {
    pool.query(
      "INSERT INTO achievements (achievements_name, duration, courseid) VALUES (?, ?, ?)",
      [data.achievement_name, data.duration, data.courseid],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAchievements: (callback) => {
    pool.query(
      `SELECT  achievementsid, achievements_name, duration, courseid FROM achievements`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getAchievementById: (id, callback) => {
    pool.query(
      `SELECT  achievementsid,  achievements_name, duration, courseid FROM achievements WHERE  achievementsid = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateAchievement: (data, callback) => {
    pool.query(
      "UPDATE achievements SET achievements_name = ?, duration = ?, courseid = ? WHERE achievementsid = ?",
      [
        data.achievements_name,
        data.duration,
        data.courseid,
        data.achievementid,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
},


deleteAchievement: (id, callback) => {
  pool.query(
    `DELETE FROM achievements WHERE achievementsid = ?`,
    [id],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
}

};
