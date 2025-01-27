const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const constants = require("../constants");
const { getUserByEmail, createUser } = require("../daos/user.dao");

const registerAdmin = async (adminData) => {
  const { email, password } = adminData;

  // Ensure no duplicate admins
  const existingAdmin = await getUserByEmail(email);
  if (existingAdmin) {
    throw new AppError(constants.ERROR_USER_ALREADY_EXISTS, 400);
  }

  const hashedPassword = await bcrypt.hash(password, constants.SALT_ROUNDS);
  adminData.password = hashedPassword;

  return await createUser(adminData);
};

const loginUser = async (userData) => {
  const { email, password } = userData;

  // Fetch user
  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError(constants.ERROR_INVALID_CREDENTIALS, 401);
  }

  // Generate JWT
  const token = jwt.sign(
    { id: user.userId, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  return token;
};

module.exports = {
  registerAdmin,
  loginUser,
};
