const express = require('express')
const app = express()

app.get('/products', (req, res) => {
  res.send('Get list Products')
})

// enviado imagenes
app.get('/imgwalpaper', (req, res) => {
  res.sendFile('./static/img1.jpg', {
    root: __dirname
  })
})

// enviado json
app.get('/user', (req, res) => {
  res.json({
    name: 'carlitos',
    lastname: 'calangas',
    age: 30,
    points: [1, 2, 3, 4],
    adress: {
      city: 'New York',
      state: 'asdasd'
    }
  })
})

// comprobar estado servidor
app.get('/isAlive', (req, res) => {
  res.sendStatus(200)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
