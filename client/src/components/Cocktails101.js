import React, { useState } from 'react'

const Cocktails101 = () => {
  const [selectedItem, setSelectedItem] = useState()

  const spiritList = [
    'Bourbon',
    'Brandy',
    'Gin',
    'Rum',
    'Rye',
    'Scotch',
    'Tequila',
    'Vodka',
  ]
  return (
    <div>
      <div className="title">
        <h1>Common Cocktails by Spirit</h1>
      </div>

      <div className="topicList">
        <div className="topicItem"></div>
      </div>
    </div>
  )
}

export default Cocktails101
