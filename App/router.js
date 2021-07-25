const express = require("express");
const router = express.Router();
const userController = require("./controllers/user");
const clientController = require("./controllers/client");
const authJwt = require("./middlewares/authJwt");

// Je mets en place mes routes et mes méthodes de controller
// Routes en post
router.post("/login", userController.login);
router.post("/home", authJwt, userController.login);
router.post("/addComment", authJwt, clientController.addComment);
router.post("/addClient", authJwt, clientController.addClient);
router.post("/addPayment", authJwt, clientController.addPayment);

// Routes en patch
router.patch("/editClient", authJwt, clientController.editClient);
router.patch("/deleteSub", authJwt, clientController.deleteSub);
router.patch("/updateDebt", authJwt, clientController.updateDebt);
router.patch("/addSubscription", authJwt, clientController.addSubsciption);

// Routes en get
router.get("/clients", authJwt, clientController.getClient);
router.get("/", clientController.home);
router.get("/client/:id", authJwt, clientController.getOneClient);
router.get("/getFilterList", authJwt, clientController.getFilterClient);

// Routes en delete
router.delete("/deleteComment/:id", authJwt, clientController.deleteOneComment);
router.delete("/deletePayment/:id", authJwt, clientController.deleteOnePayment);
router.delete(
  "/deleteClient/:clientId",
  authJwt,
  clientController.deleteOneClient
);

// J'exporte le router pour l'utiliser dans l'app
module.exports = router;
