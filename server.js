// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

// Books:
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// Listen
app.listen(PORT, () => {
    console.log('Server Success! Listening from port:', PORT)
})