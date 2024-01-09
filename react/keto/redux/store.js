import {configureStore} from '@reduxjs/toolkit';
import {RecipesReducer} from '../components/recipesSlice'

export const store = configureStore({
    reducer: {
        recipes: RecipesReducer
    }
})