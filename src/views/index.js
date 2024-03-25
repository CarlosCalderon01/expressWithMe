const express = require('express')
const router = express.Router()
const viewsGlobal = require('./Global/index')

router.get('/', (req, res) => {
  res.send(`<h2> Path here ${req.baseUrl}! </h2>`)
})

router.use('/mtglobal', viewsGlobal)
module.exports = router
