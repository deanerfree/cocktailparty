const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./Routes/cocktailSubmit')

const app = express()
dotenv.config()

app.use('/api', routes)
const port = process.env.PORT || 3000

//Connecting to the db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err))

app.listen(port, () => console.log(`server is listening on ${port}`))
