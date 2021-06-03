const express = require("express");
const router = express.Router();
const userController = require("./controllers/user");
const clientController = require("./controllers/client");
const authJwt = require("./middlewares/authJwt");

router.post("/login", userController.login);
router.post("/home", authJwt, userController.login);
router.post("/addClient", clientController.addClient);
router.patch("/editClient", clientController.editClient);
router.get("/clients", clientController.getClient);
router.post("/addComment", clientController.addComment);
router.post("/addPayment", clientController.addPayment);
router.get("/client/:id", clientController.getOneClient);
router.delete("/deleteComment/:id", clientController.deleteOneComment);
router.get("/getFilterList", clientController.getFilterClient);
router.delete("/deleteClient/:clientId", clientController.deleteOneClient);
router.patch("/addSubscription", clientController.addSubsciption);
router.get("/", clientController.home);
router.patch("/deleteSub", clientController.deleteSub);

module.exports = router;
