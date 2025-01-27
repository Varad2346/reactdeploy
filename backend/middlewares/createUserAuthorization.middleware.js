const AppError = require("../utils/appError");

const createUserAuthorization = (req, res, next) => {
  const { role } = req.body;

  if (!role) {
    throw new AppError("user role is required to create a user.", 400);
  }

  const allowedRolesForHR = ["employee", "trainer"];

  if (req.user.role === "hr" && !allowedRolesForHR.includes(role)) {
    throw new AppError("HR can only create employee or trainer accounts.", 400);
  }

  next();
};

module.exports = createUserAuthorization;
