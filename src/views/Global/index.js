const express = require('express')
const router = express.Router()
const viewsGmtCountry = require('./VGmtCountry.cjs')

router.get('/', (req, res) => {
  res.send(`<h2> Hello from ${req.baseUrl} </h2>`)
})

router.use('/country', viewsGmtCountry)

module.exports = router
