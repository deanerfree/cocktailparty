import React from 'react'
import DrinkRecipe from './DrinkRecipe'

const Results = ({ results }) => {
  if (results?.drinks === null || results?.drinks === undefined) {
    return (
      <div className="results">
        <div className="drinklist">No Drink Found</div>
      </div>
    )
  } else {
    const title = { color: 'grey', fontSize: '40px' }
    console.log('These are the results', results)
    return (
      <div className="results">
        {results.drinks.map((drink) => {
          return (
            <div className="drinklist" key={`${drink.idDrink}`}>
              <h2 style={title}>{drink.strDrink}</h2>
              <hr />
              <DrinkRecipe drink={drink} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Results
