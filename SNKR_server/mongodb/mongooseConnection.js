const mongoose = require('mongoose')
const productModel = require('./model/productModel')
const initialProducts = require('../initialData/productsData')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/snkr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const db = mongoose.connection

db.once('open', async () => {
  if ((await productModel.countDocuments().exec()) > 0) return
  //add all the products in the database
  try {
    await productModel.insertMany(initialProducts)
    console.log('=========database initialisation success=========')
  } catch (error) {
    console.log(error)
  }
})
