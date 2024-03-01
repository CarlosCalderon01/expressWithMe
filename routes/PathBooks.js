import express from 'express'
import Book from '../models/ModelBooks.js'
const router = express.Router()

router.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener libros' })
  }
})

router.get('/books/:id', async (req, res) => {
  const bookId = req.params.id

  try {
    const book = await Book.findByPk(bookId)
    if (book) {
      res.json(book)
    } else {
      res.status(404).json({ error: 'Libro no encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener el libro' })
  }
})

router.post('/books', async (req, res) => {
  const { title, description, autor, scorebook, review, pricebook, datepublic, datesell } = req.body

  try {
    //const newBook = await Book.create({ title, description, autor, scorebook, review, pricebook, datepublic, datesell })

    const newBook = await Book.create({
      title: 'Ejemplo de Libro',
      description: 'Una descripción del libro.',
      autor: 'Autor del Libro',
      scorebook: 'A',
      review: true,
      pricebook: 19.99,
      datepublic: new Date(),
      datesell: new Date()
    });

    res.json(newBook)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear el libro' })
  }
})

router.put('/books/:id', async (req, res) => {
  const bookId = req.params.id
  const updatedBookData = req.body

  try {
    const book = await Book.findByPk(bookId)
    if (book) {
      await book.update(updatedBookData)
      res.json(book)
    } else {
      res.status(404).json({ error: 'Libro no encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al actualizar el libro' })
  }
})

router.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id

  try {
    const book = await Book.findByPk(bookId)
    if (book) {
      await book.destroy()
      res.json({ message: 'Libro eliminado exitosamente' })
    } else {
      res.status(404).json({ error: 'Libro no encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al eliminar el libro' })
  }
})

router.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Error interno del servidor' })
})

export default router
