module.exports = {
  // Database
  DB_NAME: "training_institute",
  DB_USER: "root",
  DB_HOST: "localhost",
  DB_DIALECT: "mysql",
  DB_LOGGING: false,
  DB_SYNC_FORCE: true,
  USER_COURSE_FOREIGN_KEY: "courseId",
  DB_CONNECTION_SUCCESS: "Connection has been established successfully.",
  DB_CONNECTION_ERROR: "Unable to connect to the database:",
  DB_SYNC_SUCCESS: "Database synced successfully",
  DB_SYNC_ERROR: "Error syncing database:",
  DEFAULT_ROLE: "employee",

  // Controllers
  SALT_ROUNDS: 10,
  SUCCESS_ADMIN_REGISTERED: "registered successfully.",

  ERROR_USER_ALREADY_EXISTS: "User  already exists.",
  ERROR_USER_NOT_FOUND: "User  not found",
  ERROR_INVALID_CREDENTIALS: "Invalid credentials.",
  ERROR_INTERNAL_SERVER_ERROR: "Internal server error.",

  ERROR_FORBIDDEN_CREATE:
    "Forbidden: You do not have permission to create this user.",
  ERROR_FORBIDDEN_UPDATE:
    "Forbidden: You do not have permission to update this user.",
  ERROR_FORBIDDEN_DELETE:
    "Forbidden: You do not have permission to delete this user.",
  ERROR_FORBIDDEN_VIEW:
    "Forbidden: You do not have permission to view this user.",

  ERROR_COURSE_NOT_FOUND: "Course not found.",
  ERROR_CATEGORY_NOT_FOUND: "Course  category not found.",

  ERROR_USER_COURSE_ASSOCIATION_NOT_FOUND:
    "User -Course association not found.",

  //CourseCategory
  ERROR_INVALID_INPUT: "Invalid input. Please provide all required fields.",
  ERROR_INTERNAL_SERVER: "Internal server error. Please try again later.",
  ERROR_ACCESS_DENIED:
    "Access denied. You do not have permission to perform this action.",
  ERROR_CATEGORY_NOT_FOUND: "Category not found.",
  ERROR_NO_COURSES_FOUND: "No courses found for this category.",
  SUCCESS_CATEGORY_CREATED: "Course category created successfully.",
  SUCCESS_CATEGORY_UPDATED: "Course category updated successfully.",
  SUCCESS_CATEGORY_DELETED: "Course category deleted successfully.",
};
