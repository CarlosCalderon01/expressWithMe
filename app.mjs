// import { sequelize } from './config/sequelize.js'
// const sequelize = require('./config/sequelize.js')

import express from 'express'
import sequelize from './config/sequelize.cjs'

const app = express()

sequelize
  .sync()
  .then(() => {
    console.log('Successful connection to the database.')
  })
  .catch((error) => {
    console.error('Database connection error:', error)
  })

/*

const express = require('express')
const sequelize = require('./config/sequelize') // path correct from file sequelize.js
const User = require('./models/user.model') // path correct from user models

*/
