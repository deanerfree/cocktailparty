const CocktailModel = require('../Models/cocktailSchema')

//Requests a list of cocktails
exports.getCocktails = async (req, res) => {
  try {
    const listOfCocktails = await CocktailModel.find()
    res.status(200).json(listOfCocktails)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

//Creates a new cocktail in the library based on the CocktailModel
exports.createCocktails = async (req, res) => {
  const body = req.body

  const newCocktail = new CocktailModel(body)
  try {
    //Need to check for duplicates in the library. Cannot have more than one cocktail of the same name
    await newCocktail.save()

    res.status(201).json(newCocktail)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
