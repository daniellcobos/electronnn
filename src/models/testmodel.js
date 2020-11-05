const Sequelize = require("sequelize");
const sequelize = require("../database.js");

const testthing = sequelize.define("testthing", {
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  A: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  B: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  C: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  D: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Respuesta: {
    type: Sequelize.CHAR,
    allowNull: false,
  },
});

module.exports = testthing;
