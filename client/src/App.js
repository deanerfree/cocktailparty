import "./App.css"
// import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Search from "./components/Search"
import Cocktails101 from "./components/Cocktails101"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
	// const [open, setOpen] = useState(false)
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={Search} path='/search' />
				<Route component={Cocktails101} path='/cocktails101' />
			</Switch>
		</BrowserRouter>
	)
}

export default App
