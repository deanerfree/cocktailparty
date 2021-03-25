import React, { useState } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'

const Cocktails101 = () => {
  const [selectedItem, setSelectedItem] = useState()

  const handleClick = (event) => {
    event
  }
  return (
    <div>
      <div className="title">
        <h1>Getting Started</h1>
      </div>
      <div className="topicList">
        <div className="topicItem">Rum</div>
      </div>
    </div>
  )
}

export default Cocktails101
