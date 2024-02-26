const express = require('express')
const app = express()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST PARAMS
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

app.get('/', (req, res) => {
  res.send('Page Home!')
})

// reading query
// http://localhost:3000/search
// http://localhost:3000/search?q=javascript%20books
// http://localhost:3000/search?user=carl&user=brayan&user=marcus
app.get('/search', (req, res) => {
  console.log(req.query)
  if (req.query.q === 'javascript books') {
    res.send('lista de libros de javascript')
  } else {
    res.send('pagina normal')
  }
})
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST PARAMS
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING SERVER
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
// console.log(`Server on port ${3000}`)
