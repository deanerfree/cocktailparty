import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results'
import { TextField, Button } from '@material-ui/core'
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone'

const Search = () => {
  const [query, setQuery] = useState(null)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState()
  const [returnedResults, setReturnedResults] = useState(false)

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    // console.log('getSearch called')
    setQuery(search)
    setReturnedResults(true)
    setSearch('')
  }

  useEffect(() => {
    const getDrinks = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      )
      // console.log(res.data)
      setResults(res.data)
    }
    getDrinks()
    console.log('Results', results)
  }, [query])

  return (
    <div className="search-bar">
      <form onSubmit={getSearch} className="form">
        <LocalBarTwoToneIcon />
        <TextField
          type="text"
          id="standard-basic"
          value={search}
          onChange={updateSearch}
          label={`Search`}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
      <div className="updatedResults">
        {returnedResults ? (
          <Results results={results} />
        ) : (
          <div>Look for something</div>
        )}
      </div>
    </div>
  )
}

export default Search
