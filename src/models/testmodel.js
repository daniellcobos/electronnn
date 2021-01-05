const Sequelize = require("sequelize");
let {sequelize,authDatabase}= require("../database.js");

let testthing = sequelize.define("testthing", {
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contexto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  multimagen: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
  Categoria: {
    type: Sequelize.CHAR,
    defaultValue: 'General',
  },
  Imagen: {
    type: Sequelize.STRING,
    defaultValue: 'General',
  },
});

module.exports = testthing;
