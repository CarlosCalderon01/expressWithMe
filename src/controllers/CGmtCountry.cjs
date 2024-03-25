const MGmtCountry = require('../models/MGmtCountry.cjs')

async function CGmtCountrysGetByAll (req, res) {
  try {
    const result = await MGmtCountry.findAll()
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error getting countries.' })
  }
}

async function CGmtCountrysGetById (req, res) {
  const { id } = req.params
  try {
    const result = await MGmtCountry.findByPk(id)
    if (!result) {
      return res.status(404).json({ error: 'No country was found with the provided ID.' })
    }
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error getting country by ID.' })
  }
}

async function CGmtCountrysPost (req, res) {
  const { name, description, createdAt, updatedAt } = req.body
  try {
    const result = await MGmtCountry.create({ name, description, createdAt, updatedAt })
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error creating a new country.' })
  }
}

async function CGmtCountrysPut (req, res) {
  const { id } = req.params
  const { name, description } = req.body
  try {
    const result = await MGmtCountry.update({ name, description }, { where: { id } })
    if (result[0] === 0) {
      return res.status(404).json({ error: 'No country was found with the provided ID.' })
    }
    res.json({ message: 'Country updated correctly.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error updating country.' })
  }
}

async function CGmtCountrysDelete (req, res) {
  const { id } = req.params
  try {
    const result = await MGmtCountry.destroy({ where: { id } })
    if (result === 0) {
      return res.status(404).json({ error: 'No country was found with the provided ID.' })
    }
    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error deleting country.' })
  }
}

module.exports = {
  CGmtCountrysGetByAll,
  CGmtCountrysGetById,
  CGmtCountrysPost,
  CGmtCountrysPut,
  CGmtCountrysDelete
}
