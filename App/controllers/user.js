const { request, response } = require("express");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../auth.config");

const userController = {
  login: (request, response) => {
    const { email, password } = request.body;
    Users.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          return response.status(404).send({ message: "Email Not Found" });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400,
        });

        response.status(200).send({
          id: user.id,
          email: user.email,
          username: user.username,
          accessToken: token,
        });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
};

module.exports = userController;
