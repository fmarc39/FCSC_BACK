const express = require("express");
const router = express.Router();
const userController = require("./controllers/user");
const authJwt = require("./middlewares/authJwt");

router.post("/login", userController.login);
router.post("/home", authJwt, userController.login);

module.exports = router;
