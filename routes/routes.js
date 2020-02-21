"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.homePage);
router
  .route("/login")
  .get(controller.loginPage)
  .post(controller.loginResult);
router
  .route("/registration")
  .get(controller.registrationPage)
  .post(controller.registrationResult);
router.get("/:user", controller.userHomePage);
router.get("/:user/mymusic", controller.myMusic);
router
  .route("/:user/profile")
  .get(controller.profilePage)
  .put(controller.updateProfile);

module.exports = router;
