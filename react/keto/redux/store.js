import {configureStore} from '@reduxjs/toolkit';
import { RecipesReducer } from '../components/recipesSclice';

export const store = configureStore({
    reducer: {
        recipes: RecipesReducer
    }
})