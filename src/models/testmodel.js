const Sequelize = require('sequelize')
const sequelize = require('../database.js')

const testthing = sequelize.define('testthing', {
  
    desc:{
        type: Sequelize.STRING,
        allowNull: false,   
      }
})

module.exports = testthing;