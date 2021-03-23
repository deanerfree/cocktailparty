import React from 'react'

const DrinkRecipe = ({ drink }) => {
  let ingredients = []
  console.log('The drinkList', drink)

  for (let j = 1; j < 16; j++) {
    let ingredient = drink[`strMeasure${j}`] + drink[`strIngredient${j}`]
    ingredients.push(ingredient)
  }

  return (
    <>
      <div>
        <img src={`${drink.strDrinkThumb}`} height="200" width="200" />
      </div>
      <hr />
      <div>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => {
            if (ingredient === null || ingredient === 0 || ingredient === '') {
              return
            } else {
              return <li key={index}>{ingredient}</li>
            }
          })}
        </ul>
      </div>
      <hr />
      <div>
        <h3>Directions:</h3> {drink.strInstructions}
      </div>

      <hr />
    </>
  )
}

export default DrinkRecipe
