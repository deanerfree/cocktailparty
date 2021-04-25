const mongoose = require('mongoose')

let newCocktail = new Schema({
  //The name of the cocktail
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 256,
  },
  //What is the type of cocktail Whiskey, Gin, Rum, etc...
  type: {
    type: String,
    required: true,
  },
  //Is this alcoholic or non-alcoholic
  alcohol: {
    type: true,
  },
  //list of ingredients
  ingredients: [
    {
      name: String,
      volume: String,
      unit: String,
      required: true,
    },
  ],
  //directions to make the cocktail
  directions: {
    body: String,
    required: true,
  },
  history: {
    body: String,
  },
  video: {
    type: String,
  },
  image: {
    type: String,
  },
})

module.export = mongoose.model('drink', newCocktail)
