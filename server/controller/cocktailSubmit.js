// const CocktailModel = require('../Models/CocktailSchema')
const express = require('express')
const router = express.Router()

router.get('/api/cocktailList', (req, res) => {
  res.send('made it this far!')
})
router.post('api/newCocktail', (req, res) => {
  res.send('Gotit')
})

module.exports = router
