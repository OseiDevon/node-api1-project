// BUILD YOUR SERVER HERE
const express = require('express')

const server = express()

server.get( '/api/users', (req, res) =>{
  res.json('users')
})

// wEJUEWjrwjfnwjrnwfn
// server.use('*', (req, res))

module.exports = server; // EXPORT YOUR SERVER instead of {}
