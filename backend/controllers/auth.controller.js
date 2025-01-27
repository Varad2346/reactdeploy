const catchAsync = require("../utils/catchAsync");
const { registerAdmin, loginUser } = require("../services/auth.service");

const createAdmin = catchAsync(async (req, res, next) => {
  const admin = await registerAdmin(req.body);
  res
    .status(201)
    .json({ success: true, message: "User created successfully", data: admin });
});

const login = catchAsync(async (req, res) => {
  const token = await loginUser(req.body);
  res
    .status(200)
    .json({ success: true, message: "User login successfully", token: token });
});

module.exports = {
  createAdmin,
  login,
};
