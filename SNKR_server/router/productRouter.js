const experss = require('express')
const router = experss.Router()
const productsModel = require('../mongodb/model/productModel')

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    let product = await productsModel.findOne({ _id: id }).exec()
    res.json(product)
  } catch (error) {
    res.status(404).json([])
  }
})

router.get('/', async (req, res) => {
  const { brand, query, page, limit, typeOfShoes } = req.query
  let startIndex = (page - 1) * limit
  let endIndex = limit
  try {
    let product = await productsModel
      .find({
        $or: [
          { title: new RegExp(query, 'i') },
          { brand: new RegExp(query, 'i') }
        ]
      })
      .find({ brand: new RegExp(brand, 'i') })
      .find({ typeOfShoes: { $in: new RegExp(typeOfShoes, 'i') } })
      .skip(Number(startIndex))
      .limit(Number(endIndex))
      .exec()
    res.json(product)
  } catch (error) {
    res.status(404).json([])
  }
})

module.exports = router
