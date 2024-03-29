const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
    },
    description: {
        type: String
    },
    type: {
        type: String
    }
}, {
    timestamps: true
});

const RecipeModel = mongoose.model('Recipe', RecipeSchema);
module.exports = RecipeModel