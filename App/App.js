const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const router = require("./router");
const bodySanitizer = require("./middlewares/body-sanitizer");
const multer = require("multer");
const { request } = require("express");
const bodyParser = multer();

const app = express();

// j'ajoute un middleware va indiquer au client que l'on peut accéder a cette API depuis un autre domaine. En fait on rassure le naviguateur en lui disant "pas de souci je veut bien qu'un autre site accède à mes services"
// si on met l'option origin: 'oclock.io' on ne pourra accéder a l'api depuis un navigateur uniquement si on est sur le site oclock.io
// si on met l'option origin : '*' alors n'importe quel site peut executer dans le navigateur une requete vers mon API
app.use(
  cors({
    origin: "*",
  })
);
// IL FAUT ABSOLUMENT DECODER LE BODY AVANT LE ROUTEUR
// On a décidé que notre API comprend du contenu formaté en JSON
app.use(express.json());
app.use(bodyParser.none());
// a chaque requete si le body contient quelque chose on le nettoie
app.use(bodySanitizer);
// Si on souhaite faire avec du URL Encoded :
// app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
