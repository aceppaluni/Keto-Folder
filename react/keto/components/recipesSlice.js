import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://localhost:5000'
//const url = 'mongodb://localhost:27017/recipesdb'

export const fetchRecipes = createAsyncThunk( 
    'recipes/fetchRecipes',
    async () => {
        try {
            const r = await axios.get(url + '/recipes');
            console.log('data:', r)
            return r.data
        }
        catch (err) {
           console.error("Error fetching recipes:", err)
           throw err
        }
    }
); 

export const recipesSlice = createSlice({ 
    name: 'recipes',
    initialState: {isLoading: true, errMess: null, recipesArray: []},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRecipes.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchRecipes.fulfilled, (state, action) => {
            state.isLoading = false,
            state.errMess = '',
            state.recipesArray = action.payload;
        })
        .addCase(fetchRecipes.rejected, (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Failed to Fetch'
        })
    }
});

export const selectAllRecipes = (state) => state.recipes.recipesArray

export const RecipesReducer = recipesSlice.reducer