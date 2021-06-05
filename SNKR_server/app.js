const express = require('express')
const path = require('path')
const app = express()
const initialColors = require('./initialData/colorsData')
const initialSizes = require('./initialData/sizesData')
const productRouter = require('./router/productRouter')
require('./mongodb/mongooseConnection')

app.use(express.static('dist'))

app.use('/products', productRouter)
app.use('/sizes', (req, res) => res.json(initialSizes))
app.use('/colors', (req, res) => res.json(initialColors))

app.all('*', (req, res) =>
  res.sendFile(path.join(__dirname, './dist/index.html'))
)

app.listen(3000, () =>
  console.log(
    '==========the server is active on: http://localhost:3000 =========='
  )
)
