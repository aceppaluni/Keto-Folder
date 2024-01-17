import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
//import recipes from '../components/recipesSlice';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import RenderRecipes from '../components/renderRecipes';
import { fetchRecipes } from '../components/recipesSlice';

const RecipeScreen = () => {
//   const recipes = useSelector((state) => state.recipes);
//   const dispatch = useDispatch();

//   useEffect(() => {
//   if (recipes.isLoading) {
//    dispatch(fetchRecipes());
//   }
//  }, []);
  const recipesState = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipesState.isLoading) {
      dispatch(fetchRecipes());
    }
  }, [recipesState.isLoading, dispatch]);

  const [filterChoice, setFilterChoice] = useState('') 

  const filterRecipesByCategory = (type) => {
    try {
      const recipes = recipesState.recipesArray || []; // new line
      const filteredRecipes = type ? recipes.filter((recipe) => recipe.type === type) : recipes;
      console.log('data hello')
      return filteredRecipes
    } catch (error) {
      console.log('Error occured', error)
    }
  } 


  const handelFilter = (text) => {
    setFilterChoice(text)
    filterRecipesByCategory(text)
  }

  const Types = [
    {label: 'Breakfast', value: 'Breakfast'},
    {label: 'Lunch', value: 'Lunch'},
    {label: 'Dinner', value: 'Dinner'},
    {label: 'Dessert', value: 'Dessert'},
  ]


  return (
    <View>
      <RNPickerSelect 
      value={filterChoice} 
      onValueChange={(text) => handelFilter(text)} 
      placeholder={{label: "Filter By Type", value: ''}}
      items={Types}
      style={{inputAndroid: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
      },
      inputIOS: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
      },}}/>
      <FlatList 
      data={recipesState.recipesArray}
      renderItem={({ item: recipe }) => <RenderRecipes filteredRecipes={[recipe]} />}
      keyExtractor={(recipe) => recipe._id} 
      />
    </View>
  )
}

export default RecipeScreen