const { User } = require("../models");

const createUser = async (userData) => {
  return await User.create(userData);
};

const getUsers = async () => {
  return await User.findAll();
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

const getUserById = async (userId) => {
  return await User.findOne({ where: { userId: userId } });
};

const getTrainerById = async (trainerId) => {
  return await User.findOne({ where: { userId: trainerId, role: "trainer" } });
};

const updateUser = async (userId, userData) => {
  return await User.update(userData, { where: { userId: userId } });
};

const deleteUser = async (userId) => {
  return await User.destroy({ where: { userId: userId } });
};

const getTrainers = async () => {
  return await User.findAll({ where: { role: "trainer" } });
};

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  getUserById,
  getTrainerById,
  updateUser,
  deleteUser,
  getTrainers,
};
