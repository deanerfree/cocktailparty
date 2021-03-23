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
    return (
      <div className="results">
        {results.drink.map((drink) => {
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
