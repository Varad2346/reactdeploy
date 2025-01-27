require("dotenv").config();
const db = require("./models");

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.middleware");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const courseRoute = require("./routes/course.routes");
const courseCategoryRoute = require("./routes/courseCategory.routes");
const plannedCourseRoutes = require("./routes/plannedCourse.routes");
const enrollmentRoutes = require("./routes/enrollment.routes");
const trainingReportRoutes = require("./routes/trainingReport.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route definitions
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/courses", courseRoute);
app.use("/api/courseCategory", courseCategoryRoute);
app.use("/api/planned-courses", plannedCourseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/reports", trainingReportRoutes);

// 404 Handler
app.all("*", (req, res) => {
  res.status(404).json({ success: false, message: "Page not found" });
});

// Error handling middleware
app.use(errorHandler);

(async () => {
  try {
    await db.sequelize.sync({ force: false }); // Use `force: true` for development only
    console.log("Database synced successfully.");

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database syncing error:", error.message);
  }
})();
