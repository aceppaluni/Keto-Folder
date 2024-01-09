const recipeRouter = require('express').Router()

const Recipe = require('../models/Recipe');

recipeRouter
.get('/', (req, res) => {
    Recipe.find()
        .then(recipe => {
            res.statusCode = 200,
            res.setHeader('Content-Type', 'application/json')
            res.json(recipe)
        })
        .catch(err => res.json(err))
})
.post('/', (req, res) => {
    const { title } = req.body
    Recipe.find({ title }).then(result => {
        if (result.length != 0) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.json({
                error: "recipe exists!"
            })
            return
        }
        Recipe.create({ title })
            .then(recipe => {
                res.statusCode = 201
                res.setHeader('Content-Type', 'application/json')
                res.json(recipe)
            })
            .catch(err => res.json(err))
    })
})

module.exports = recipeRouter
