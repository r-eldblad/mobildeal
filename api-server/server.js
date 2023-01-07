const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const subscriptionsRoute = require('./routes/subscriptions')
const adminsRoute = require('./routes/admins')
const operatorsRoute = require('./routes/operators')

const corsOptions = {
    origin: 'https://mobildeal.se',
    credentials: true,
    optionSuccessStatus: 200,
    exposedHeaders: 'auth-token',
}

const server = express()
dotenv.config()

// Database connection
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('Connected to database')
})

server.use(cors(corsOptions))
server.use(express.json())
server.use('/images', express.static('assets'))

server.use('/api/subscriptions', subscriptionsRoute)
server.use('/api/admins', adminsRoute)
server.use('/api/operators', operatorsRoute)

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})
