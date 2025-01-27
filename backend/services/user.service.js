const bcrypt = require("bcrypt");
const constants = require("../constants");
const AppError = require("../utils/appError");
const {
  createUser,
  getUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  getTrainers,
} = require("../daos/user.dao");

const registerUser = async (loggedInUser, newUserData) => {
  const { role } = loggedInUser;
  const { role: newUserRole, email } = newUserData;

  // Only admins can create users with the admin role
  if (newUserRole === "admin" && role !== "admin") {
    throw new AppError("Only admins can create admin users", 403);
  }

  // HR can only create employees or trainers
  if (role === "hr" && !["employee", "trainer"].includes(newUserRole)) {
    throw new AppError("HR can only create employees or trainers", 403);
  }

  // Check if email already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new AppError("Email already exists", 400);
  }

  // Hash password only if provided (for roles not requiring passwords)
  const hashedPassword = newUserData.password
    ? await bcrypt.hash(newUserData.password, constants.SALT_ROUNDS)
    : null;

  const newUser = {
    ...newUserData,
    password: hashedPassword, // Null password for roles like "trainer" or "employee"
  };

  return await createUser(newUser);
};

const findUsers = async () => {
  const user = await getUsers();
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};

const findUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};

const updateUserById = async (userId, userData) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (userData.password) {
    userData.password = await bcrypt.hash(
      userData.password,
      10
    );
  }

  return await updateUser(userId, userData);
};

const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return await deleteUser(userId);
};

const findTrainers = async () => {
  const trainer = await getTrainers();
  if (!trainer) {
    throw new AppError("Trainer not found", 404);
  }
  return trainer;
};

module.exports = {
  registerUser,
  findUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  findTrainers,
};
