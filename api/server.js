// implement your server here
// require your posts router and connect it here

const express = require('express')
const port = 3000;

const server = express()
// middleware
server.use(express.json());
server.use(express.urlencoded());

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

module.exports = server;