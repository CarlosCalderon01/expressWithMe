const express = require('express')
const router = express.Router()
const CGmtCountry = require('../../controllers/CGmtCountry.cjs')

router.get('/', CGmtCountry.CGmtCountrysGetByAll)
router.get('/:id', CGmtCountry.CGmtCountrysGetById)
router.post('/', CGmtCountry.CGmtCountrysPost)
router.put('/:id', CGmtCountry.CGmtCountrysPut)
router.delete('/:id', CGmtCountry.CGmtCountrysDelete)

module.exports = router
