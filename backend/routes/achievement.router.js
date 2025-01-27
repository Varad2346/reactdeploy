const {
    createAchievement,
    getAchievementById,
    getAchievements,
    updateAchievement,
    deleteAchievement
  } = require("../controller/achivement.controllers");


  
  const router = require("express").Router();
  // const {  checktoken }= require("../../auth/token_validation");
  
  router.post("/achivement", createAchievement);
  router.get("/achivement", getAchievements);
  router.get("/achivement/:id", getAchievementById);
  router.patch("/achivement", updateAchievement);
  router.delete("/achivement", deleteAchievement);

  module.exports = router;