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
    const title = { color: 'grey', fontSize: '40px' }
    return (
      <div className="results">
        <div className="drinklist" key={`${results.drinks[0].idDrink}`}>
          <h2 style={title}>{results.drinks[0].strDrink}</h2>
          <hr />
          <div>
            <img
              src={`${results.drinks[0].strDrinkThumb}`}
              height="200"
              width="200"
              justifyContent="center"
            />
          </div>
          <hr />

          <div>
            <h3>Directions:</h3> {results.drinks[0].strInstructions}
          </div>

          <hr />
          <div>
            <h3>Ingredients:</h3>
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
          <hr />
        </div>
      </div>
    )
  }
}

export default Results
