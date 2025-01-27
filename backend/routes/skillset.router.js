const { createAchievement } = require("../controller/skillset.controllers");

const router = require("express").Router();
// const {  checktoken }= require("../../auth/token_validation");

router.post("/", createuser);
router.get("/", getusers);
router.get("/:id", getuserbyuserid);
router.patch("/", updateuser);
router.delete("/", deleteuser);

router.post("/login", login);
// router.post("/login",login);

module.exports = router;
