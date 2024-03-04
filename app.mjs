import express from 'express'
import { sequelize } from './config/sequelize.js'
// const sequelize = require('./config/sequelize.js')

const app = express()

sequelize
  .sync()
  .then(() => {
    console.log('Conexión exitosa con la base de datos.')
  })
  .catch((error) => {
    console.error('Error de conexión con la base de datos:', error)
  })

// Resto de tu configuración de Express...

/*

const express = require('express')
const sequelize = require('./config/sequelize') // Ruta correcta a tu archivo sequelize.js
const User = require('./models/user.model') // Ruta correcta a tu modelo de usuario

*/
