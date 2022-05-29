import { useState } from "react"

const Dropdown = ({ results }) => {
	const [selectedItem, setSelectedItem] = useState("Bourbon")
	const spiritList = [
		"Bourbon",
		"Brandy",
		"Gin",
		"Rum",
		"Rye",
		"Scotch",
		"Tequila",
		"Vodka",
	]
	if (results === null || results === undefined) {
		return
	} else {
		const filteredArray = results.filter((result) => {
			for (let ingredient of result.ingredients) {
				if (ingredient.name.toLowerCase() === selectedItem.toLowerCase()) {
					return true
				}
			}
			return false
		})
		console.log("newArray", filteredArray)
	}
}

export default Dropdown
