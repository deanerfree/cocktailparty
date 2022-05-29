const express = require("express")
const router = express.Router()
//imported from controller
const cocktailController = require("../controller/cocktailSubmit")

router.use(express.json())
//GET request list of cocktails
router.get("/test", async(console.log("hello")))
//POST request for creating a new cocktail
// router.post('/newCocktail', cocktailController.createCocktails)

module.exports = router
