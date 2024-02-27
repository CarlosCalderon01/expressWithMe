// MODULES THIRD
const express = require('express')
const morgan = require('morgan')
// MODULES LOCAL
const app = express()
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.use(morgan('dev'))
app.use(express.json())
const products = []

app.get('/', (req, res) => {
  res.json(products)
})

app.post('/products', (req, res) => {
  // console.log({ ...req.body, id: 3 })
  products.push({ ...req.body, id: products.length + 1 })
  res.send('Creando producto')
})

app.get('/products', (req, res) => {
  res.send('method get products')
})

app.put('/products', (req, res) => {
  res.send('method put products')
})

app.delete('/products', (req, res) => {
  res.send('method delete products')
})

app.get('/products/:id', (req, res) => {
  res.send('method get products:id')
})

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000)
console.log(`Escuchando el puerto ${3000}`)
