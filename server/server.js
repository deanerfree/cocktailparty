const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routes = require('./Routes/drinkSubmit')
const app = express()
dotenv.config()

app.use('/api/submittedDrink', routes)
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server is listening on ${port}`))
