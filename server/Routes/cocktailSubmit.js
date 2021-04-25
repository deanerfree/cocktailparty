const express = require('express')
const router = express.Router()
// const { getCocktails, createCocktail } = require('../controller/cocktailSubmit')
const getCocktails = require('../controller/cocktailSubmit')
const createCocktail = require('../controller/cocktailSubmit')

router.use(express.json())

router.get('api/cocktailList', getCocktails)
router.post('/api/newCocktail', createCocktail)

module.exports = router
