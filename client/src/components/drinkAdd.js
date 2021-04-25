import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { post } from '../../../server/Routes/cocktailSubmit'

const addDrink = () => {
  const [submitting, setSubmitting] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
    }, 3000)

    try {
      const res = await axios.post(
        'http://localhost:4000/api/submittedDrink',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } catch (err) {
      res.status(400, console.log(err, err.response))
    }
  }

  useEffect(() => {})
  return (
    <div className="wrapper">
      <h2>Submit a cocktail</h2>
      {submitting && <div>Submitting Form...</div>}
      <form>
        <fieldset>
          <lablel className="cocktailName">Cocktail Name</lablel>
          <input
            name="cocktailName"
            type="text"
            onChange={() => {
              setCocktail
            }}
          />
        </fieldset>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default addDrink
