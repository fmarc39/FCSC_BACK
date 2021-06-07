const express = require("express");
const router = express.Router();
const userController = require("./controllers/user");
const clientController = require("./controllers/client");
const authJwt = require("./middlewares/authJwt");

router.post("/login", userController.login);
router.post("/home", authJwt, userController.login);
router.post("/addClient", authJwt, clientController.addClient);
router.patch("/editClient", authJwt, clientController.editClient);
router.get("/clients", authJwt, clientController.getClient);
router.post("/addComment", authJwt, clientController.addComment);
router.post("/addPayment", authJwt, clientController.addPayment);
router.get("/client/:id", authJwt, clientController.getOneClient);
router.delete("/deleteComment/:id", authJwt, clientController.deleteOneComment);
router.get("/getFilterList", authJwt, clientController.getFilterClient);
router.delete(
  "/deleteClient/:clientId",
  authJwt,
  clientController.deleteOneClient
);
router.patch("/addSubscription", authJwt, clientController.addSubsciption);
router.get("/", clientController.home);
router.patch("/deleteSub/:id", authJwt, clientController.deleteSub);

module.exports = router;
