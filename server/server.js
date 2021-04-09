const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('drinkdb.json')
const middlewares = jsonServer.defaults()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

server.listen(port, () => console.log(`server is listening on ${port}`))
