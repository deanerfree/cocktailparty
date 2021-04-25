import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from './Dropdown'

const Cocktails101 = () => {
  const [results, setResults] = useState(null)

  console.log('before use effect')
  useEffect(() => {
    const getDrinks = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/drinks`)
        console.log('This is the data returned', res.data)
        setResults(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getDrinks()
  }, [])

  return (
    <div>
      <div className="title">
        <h1>Common Cocktails by Spirit</h1>
      </div>
      <Dropdown results={results} />
      <div className="topicList">
        <div className="topicItem"></div>
      </div>
    </div>
  )
}

export default Cocktails101
