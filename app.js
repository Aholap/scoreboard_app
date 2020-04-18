const express = require('express')
const app = express()
const router = require('./scoreboard_router')
const cors = require('cors')
const http = require('http')
const mongo = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()


const url = process.env.URL

mongo.connect(url, { useNewUrlParser: true, useFindAndModify : false })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })



//PASSWORD TO DOT ENV!!

app.use(bodyParser.json())
app.use(express.static('build'))
app.use(cors())
app.use('/Players', router)



const server = http.createServer(app)

server.listen(3000, () => console.log('server running on port 3000'))






  
  
  