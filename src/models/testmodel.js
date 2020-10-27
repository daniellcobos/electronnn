const Sequelize = require('sequelize')
const sequelize = require('../database.js')

const testthing = sequelize.define('testthing', {
    id:{
      type: Sequelize.INTEGER,
      autoincrement: true,
      allowNull: false,
      primaryKey: true
    },
    desc:{
        type: Sequelize.STRING,
        allowNull: false,   
      }
})

module.exports = testthing;