/* - DEPENDENCIES: THIRD - */
/* - DEPENDENCIES: LOCAL - */
const Movie = require('../models/movie.cjs')

async function getAllMovies (req, res) {
  try {
    const movies = await Movie.findAll()
    console.log(movies)
    res.json(movies)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const createMovie = async (req, res) => {
  const { name, description } = req.body
  try {
    const newMovie = await Movie.create({ name, description })
    res.json(newMovie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getMovieById = async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findByPk(id)
    res.json(movie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateMovie = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body
  try {
    const updatedMovie = await Movie.update({ name, description }, { where: { id } })
    res.json(updatedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteMovie = async (req, res) => {
  const { id } = req.params
  try {
    await Movie.destroy({ where: { id } })
    res.json({ message: 'Movie delete complete!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie
}
