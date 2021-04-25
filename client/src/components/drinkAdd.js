import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { post } from '../../../server/Routes/drinkSubmit'

const addDrink = () => {
  const [submitting, setSubmitting] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    setSubmitting(true)

    setTimeout(()=> {
      setSubmitting(false)
    }, 3000)

    axios.
  }

  useEffect(() => {
    
  })
  return (
    <div className="wrapper">
      <h2>Submit a cocktail</h2>
      {submitting && <div>Submitting Form...</div>}
      <form>
        <fieldset>
        <lablel className="cocktailName">Cocktail Name</lablel>
        <input name="cocktailName" type="text" onChange={()=>{setCocktail}} />
        </fieldset>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default addDrink
