const express = require('express')
const router = express()

router.use(express.json())
router.get('/', (req, res) => {
  res.send('Hello World')
})
router.get('/api/submittedDrink', (req, res) => {
  res.send('Got the message')
})

module.exports = router
