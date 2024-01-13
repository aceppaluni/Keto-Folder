import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
//import recipes from '../components/recipesSlice';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import RenderRecipes from '../components/renderRecipes';
import { fetchRecipes, selectAllRecipes } from '../components/recipesSlice';

const RecipeScreen = () => {
  const recipes = useSelector((state) => state.recipes)
  console.log('top data', recipes)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
   }, []);
   
  const [filterChoice, setFilterChoice] = useState('') 

  const filterRecipesByCategory = (selectedType) => {
    try {
      const filteredRecipes = selectedType ? recipes.filter((recipe) => recipe.type === selectedType) : recipes;
      console.log('data', filteredRecipes)
      return filteredRecipes
    } catch (error) {
      console.log('Error occured', error)
    }
  } 

  const handelFilter = (text) => {
    setFilterChoice(text);
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
      style={styles.view}
      data={recipes.recipesArray}
      renderItem={({ item: recipe }) => <RenderRecipes filteredData={[recipe]} />}
      keyExtractor={(recipe) => recipe.id.toString()} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
      backgroundColor: "blue",
      color: 'white'
  },
})

export default RecipeScreen