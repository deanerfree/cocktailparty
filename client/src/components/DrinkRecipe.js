import React from "react"

const DrinkRecipe = ({ drink }) => {
	let ingredients = []
	console.log("The drinkList", drink)

	for (let j = 1; j < 16; j++) {
		let ingredient = ""
		if (drink[`strMeasure${j}`] === null) {
			ingredient = drink[`strIngredient${j}`]
		} else {
			if (
				drink[`strMeasure${j}`] !== "" &&
				drink[`strMeasure${j}`][-1] !== " "
			) {
				ingredient = drink[`strMeasure${j}`] + " " + drink[`strIngredient${j}`]
			} else {
				ingredient = drink[`strMeasure${j}`] + drink[`strIngredient${j}`]
			}
		}
		ingredients.push(ingredient)
	}

	return (
		<div className='drink'>
			<div className='drkImgIng'>
				<img
					className='drinkImage'
					src={`${drink.strDrinkThumb}`}
					height='200'
					width='200'
					alt='drinkImg'
				/>
				<div className='ingredients'>
					<h3>Ingredients:</h3>
					<ul>
						{ingredients.map((ingredient, index) => {
							if (
								ingredient === null ||
								ingredient === 0 ||
								ingredient === ""
							) {
								return null
							} else {
								if (ingredient === "cubes Ice") {
									ingredient = "Ice cubes"
								}
								return <li key={index}>{ingredient}</li>
							}
						})}
					</ul>
				</div>
			</div>
			<hr />
			<div>
				<h3>Directions:</h3>
				{drink.strInstructions}
				<br />
				<br />
				<span>
					<strong>Serve In: </strong>
					{drink.strGlass}
				</span>
			</div>
		</div>
	)
}

export default DrinkRecipe
