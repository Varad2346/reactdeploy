const departmentControllers = require("../controller/department.controllers");

const router = require("express").Router();
// const {  checktoken }= require("../../auth/token_validation");

router.get("/department", departmentControllers.getDepartments);
router.post("/department", departmentControllers.createDepartment);
router.get("/department:id", departmentControllers.getDepartmentById);
router.patch("/department", departmentControllers.updateDepartment);
router.delete("/department", departmentControllers.deleteDepartment);

module.exports = router;
