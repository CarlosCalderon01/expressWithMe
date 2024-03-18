/* - DEPENDENCIES: THIRD - */
/* - DEPENDENCIES: LOCAL - */
const MGmtCountry = require('../models/MGmtCountry.cjs')

async function getCGmtCountrysByAll (req, res) {
  try {
    const result = await MGmtCountry.findAll()
    console.log(result)
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getCGmtCountrysById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await MGmtCountry.findByPk(id)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function postCGmtCountrys (req, res) {
  console.log(`METHOD POST REQ ${req.body}`)
  const { name, description, createdAt, updatedAt } = req.body
  try {
    const result = await MGmtCountry.create({ name, description, createdAt, updatedAt })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
  console.log(`METHOD POST RES ${res}`)
}

const putCGmtCountrys = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body
  try {
    const result = await MGmtCountry.update({ name, description }, { where: { id } })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteCGmtCountrys = async (req, res) => {
  const { id } = req.params
  try {
    await MGmtCountry.destroy({ where: { id } })
    res.json({ message: 'MGmtCountry delete complete!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getCGmtCountrysByAll,
  postCGmtCountrys,
  getCGmtCountrysById,
  putCGmtCountrys,
  deleteCGmtCountrys
}
