// Impoprtation du module permatant de lire le fichier .env
const dotenv = require("dotenv");
dotenv.config();
// Importation d'express.js
const express = require("express");
// Importaiton du router
const router = require("./router");
// Importation de modules utiles
const bodySanitizer = require("./middlewares/body-sanitizer");
const multer = require("multer");
const bodyParser = multer();
const cors = require("cors");

const app = express();

// Mise en en place des CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://rugby-fcsc.web.app"],
  })
);
// Middleware qui va parser notre body en Json
app.use(express.json());
app.use(bodyParser.none());

// a chaque requete si le body contient quelque chose on le nettoie
app.use(bodySanitizer);

// Mise en place du router
app.use(router);

// Mise en place du port d'écoute du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
