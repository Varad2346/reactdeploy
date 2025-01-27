const pool = require("../../config/database");

module.exports = {
  createAchievement: (data, callback) => {
    pool.query(
      "INSERT INTO achievements (note) VALUES (?)",
      [data.note],
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
      `SELECT id, note FROM achievements`,
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
      `SELECT id, note FROM achievements WHERE id = ?`,
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
      "UPDATE achievements SET note = ? WHERE id = ?",
      [
        data.note,
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

  deleteAchievement: (id, callback) => {
    pool.query(
      `DELETE FROM achievements WHERE id = ?`,
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
