const mongoose = require('mongoose')

let Schema = mongoose.Schema

const productSchema = new Schema({
  discount: Number,
  id: Number,
  title: String,
  price: Number,
  description: String,
  quantity: Number,
  src: [String],
  brand: String,
  availableSizes: [Number],
  size: Number,
  colors: [String],
  typeOfShoes: [String],
  sexe: String,
  stock: Number
})

module.exports = mongoose.model('Product', productSchema)
