import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results'
import { TextField, Button, Grid } from '@material-ui/core'
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone'

const Search = () => {
  const [query, setQuery] = useState(null)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState()
  const [returnedResults, setReturnedResults] = useState(false)

  const updateSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
    setReturnedResults(true)
    setSearch('')
  }

  useEffect(() => {
    const getDrinks = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      )

      console.log(res.data)
      setResults(res.data)
    }

    getDrinks()
  }, [query])

  return (
    <div className="search-bar">
      <Grid container item xs={8} spacing={3}>
        <form onSubmit={getSearch} className="form">
          <LocalBarTwoToneIcon />
          <TextField
            type="text"
            id="standard-basic"
            value={search}
            onChange={updateSearch}
            label={`Search`}
          />
          <Button
            className="search-button"
            type="submit"
            variant="outlined"
            onClick={getSearch}
          >
            Search
          </Button>
        </form>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <div className="updatedResults">
          {returnedResults ? (
            <Results results={results} />
          ) : (
            <div>Look for something</div>
          )}
        </div>
      </Grid>
    </div>
  )
}

export default Search
