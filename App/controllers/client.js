const { request, response } = require("express");
const { Sequelize } = require("sequelize");
const { Client } = require("pg");
const { Clients, Comments } = require("../models");
const Op = Sequelize.Op;

const clientController = {
  addClient: (request, response) => {
    const {
      firstName,
      lastName,
      commercialName,
      fixPhone,
      celPhone,
      email,
      adress,
      zipCode,
      city,
    } = request.body;
    console.log(
      firstName,
      lastName,
      commercialName,
      fixPhone,
      celPhone,
      email,
      adress,
      zipCode,
      city
    );
    Clients.create({
      first_name: firstName,
      last_name: lastName,
      commercial_name: commercialName,
      fix_phone: fixPhone,
      cel_phone: celPhone,
      email: email,
      adress: adress,
      zip_code: zipCode,
      city,
      subscription: "",
    })
      .then((client) => {
        response.json({ succes: true, client });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
  getClient: (request, response) => {
    Clients.findAll().then((clients) => {
      if (!clients) {
        throw new Error("No clients");
      }

      response.json({
        succes: true,
        clients,
      });
    });
  },
  getOneClient: (request, response) => {
    const { id } = request.params;
    Clients.findByPk(id, {
      include: ["comments", "payments"],
    }).then((client) => {
      response.json({ succes: true, client });
    });
  },
  deleteOneComment: (request, response) => {
    const { id } = request.params;
    Comments.destroy({
      where: {
        id,
      },
    }).then((comment) => {
      response.json({ succes: true, comment, id });
    });
  },
  home: (request, response) => {
    response.json({ succes: true, text: "bienvenue" });
  },
  editClient: (request, response) => {
    const {
      client_id,
      first_name,
      last_name,
      commercial_name,
      fix_phone,
      cel_phone,
      editMail,
      editAdress,
      editCity,
      editZipCode,
    } = request.body;
    Clients.update(
      {
        first_name,
        last_name,
        commercial_name,
        fix_phone,
        cel_phone,
        email: editMail,
        adress: editAdress,
        city: editCity,
        zip_code: editZipCode,
      },
      { returning: true, where: { id: client_id } }
    )
      .then((client) => {
        console.log(client);
        response.json({ succes: true, client });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
  getFilterClient: (request, response) => {
    const { value, filter } = request.query;
    Clients.findAll({
      where: {
        [filter]: { [Op.iLike]: `%${value.toLowerCase()}%` },
      },
    })
      .then((result) => {
        response.json({ succes: true, result });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
  deleteOneClient: (request, response) => {
    const { clientId } = request.params;
    Clients.destroy({
      where: {
        id: clientId,
      },
    })
      .then((client) => {
        response.json({ succes: true, client, clientId });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
  addComment: (request, response) => {
    const { clientId, commentInput } = request.body;
    Comments.create({
      client_id: clientId,
      comment: commentInput,
    })
      .then((comment) => {
        response.json({ succes: true, comment });
      })
      .catch((error) => {
        response.status(500).json({
          succes: false,
          error: error.message,
        });
      });
  },
  deleteSub: (request, response) => {
    console.log(request.params);
    Clients.update(
      { subscription: null },
      { returning: true, where: { id: clientId } }
    );
  },
  addSubsciption: (request, response) => {
    const { value, clientId } = request.body;
    Clients.update(
      {
        subscription: value,
      },
      { returning: true, where: { id: clientId } }
    ).then((client) => {
      console.log(client);
      response.json({ succes: true, client });
    });
  },
  addPayment: (request, response) => {},
};

module.exports = clientController;
