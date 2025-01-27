const catchAsync = require("../utils/catchAsync");
const {
  registerUser,
  findUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  findTrainers,
} = require("../services/user.service");

const createUser = catchAsync(async (req, res) => {
  const user = await registerUser(req.user, req.body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

const getUsers = catchAsync(async (req, res) => {
  const user = await findUsers();
  res.status(200).json({
    success: true,
    message: "User found successfully",
    data: user,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await findUserById(req.params.userId);
  res.status(200).json({
    success: true,
    message: "User found successfully",
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await updateUserById(req.params.userId, req.body);
  res.status(200).json({
    success: true,
    message: "User updated successfully",
  });
});

const deleteUser = catchAsync(async (req, res) => {
  await deleteUserById(req.params.userId);
  res.status(204).json({
    success: true,
    message: "User deleted successfully",
  });
});

const getTrainers = catchAsync(async (req, res) => {
  const trainer = await findTrainers();
  res.status(200).json({
    success: true,
    message: "Trainer found successfully",
    data: trainer,
  });
});

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getTrainers,
};
