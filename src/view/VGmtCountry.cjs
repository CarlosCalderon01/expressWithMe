// VGmtCountry.cjs
const express = require('express')
const router = express.Router()
const CGmtCountry = require('../controller/CGmtCountry.cjs')

router.get('/', CGmtCountry.getCGmtCountrysByAll)
router.post('/', CGmtCountry.postCGmtCountrys)
router.get('/:id', CGmtCountry.getCGmtCountrysById)
router.put('/:id', CGmtCountry.putCGmtCountrys)
router.delete('/:id', CGmtCountry.deleteCGmtCountrys)

module.exports = router
