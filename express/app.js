//mongod --dbpath=data
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const recipeRouter = require('./routes/RecipeRouter')

const PORT = process.env.PORT || 5000
const url = 'mongodb://localhost:27017/recipesdb'

mongoose.connect(url, {  
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected successfully!")

    const app = express()

    app.use(express.json())
    app.use(cors({ origin: '*'}))

    app.use('/recipes', recipeRouter)

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})
.catch(err => console.log(err))