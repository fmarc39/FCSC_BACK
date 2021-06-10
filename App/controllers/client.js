const { request, response } = require("express");
const { Sequelize } = require("sequelize");
const { Client } = require("pg");
const { Clients, Comments, Payments } = require("../models");
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
  deleteOnePayment: (request, response) => {
    const { id } = request.params;
    Payments.destroy({
      where: {
        id,
      },
    }).then((payment) => {
      response.json({ succes: true, payment, id });
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
    const body = request.body;
    console.log(body.client_id);

    Clients.update(
      { subscription: null },
      { returning: true, where: { id: body.client_id } }
    )
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
  addSubsciption: (request, response) => {
    const { value, clientId, amount } = request.body;
    console.log(amount);
    Clients.update(
      {
        subscription: value,
        sub_price: amount,
      },
      { returning: true, where: { id: clientId } }
    )
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
  addPayment: (request, response) => {
    const { amount, clientId, date } = request.body;
    Payments.create({
      client_id: clientId,
      date,
      amount,
    }).then((payments) => {
      response.json({ succes: true, payments });
    });
  },
};

module.exports = clientController;
