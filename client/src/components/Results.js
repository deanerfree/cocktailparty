import React from 'react'
import DrinkList from './DrinkList'

const Results = ({ results }) => {
  if (results?.drinks === null || results?.drinks === undefined) {
    return (
      <div className="results">
        <div className="drinklist">No Drink Found</div>
      </div>
    )
  } else {
    let drinkList = []
    let count = 0

    for (let i = 0; i < results.drinks.length; i++) {
      count = i
      let result = results.drinks[i]
      drinkList.push(result)
    }

    const title = { color: 'grey', fontSize: '40px' }
    return (
      <div className="results">
        {drinkList.map((drink) => {
          return (
            <div className="drinklist" key={`${drink.idDrink}`}>
              <h2 style={title}>{drink.strDrink}</h2>
              <hr />
              <DrinkList drink={drink} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Results
