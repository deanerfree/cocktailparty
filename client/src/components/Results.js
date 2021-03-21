import React from 'react'

const Results = ({ results }) => {
  if (results?.drinks === null || results?.drinks === undefined) {
    return (
      <div className="results">
        <div className="drinklist">No Drink Found</div>
      </div>
    )
  } else {
    let ingredients = []
    for (let i = 1; i < 16; i++) {
      let ingredient =
        results.drinks[0][`strMeasure${i}`] +
        results.drinks[0][`strIngredient${i}`]
      ingredients.push(ingredient)
      // console.log(ingredients)
    }

    return (
      <div className="results">
        <div className="drinklist" key={`${results.drinks[0].idDrink}`}>
          <h2>Name: {results.drinks[0].strDrink}</h2>
          <div>Directions: {results.drinks[0].strInstructions}</div>
          <br />
          <div>
            Ingredients:
            <ul>
              {ingredients.map((ingredient, index) => {
                if (ingredient === null || ingredient === 0) {
                  return
                } else {
                  return <li key={index}>{ingredient}</li>
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Results
