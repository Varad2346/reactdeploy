const db = require("../config/database");

module.exports = {
  createAttendance: async (req, res) => {
    try {
      const attendance = await db.TrainingAttendance.create(req.body);
      return res.status(201).json(attendance);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  getAllAttendances: async (req, res) => {
    try {
      const attendances = await db.TrainingAttendance.findAll();
      return res.status(200).json(attendances);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getAttendanceById: async (req, res) => {
    try {
      const attendance = await db.TrainingAttendance.findByPk(req.params.id);
      if (!attendance) {
        return res.status(404).json({ message: "Attendance not found" });
      }
      return res.status(200).json(attendance);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  updateAttendance: async (req, res) => {
    try {
      const attendance = await db.TrainingAttendance.findByPk(req.params.id);
      if (!attendance) {
        return res.status(404).json({ message: "Attendance not found" });
      }
      await attendance.update(req.body);
      return res.status(200).json(attendance);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  deleteAttendance: async (req, res) => {
    try {
      const attendance = await db.TrainingAttendance.findByPk(req.params.id);
      if (!attendance) {
        return res.status(404).json({ message: "Attendance not found" });
      }
      await attendance.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
