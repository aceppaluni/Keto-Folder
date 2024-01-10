import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Header from '../components/Header';
//import recipes from '../components/recipesSclice';
import RNPickerSelect from 'react-native-picker-select';
import { FlatList } from 'react-native-gesture-handler';
//import RenderRecipes from '../components/renderRecipes';



const RecipeScreen = () => {
  const [data, setData] = useState(recipes)
  const [filterChoice, setFilterChoice] = useState('')

  // const addRecipe = () => {
  //   console.log('Recipe Added');
  // }

  const filterRecipesByCategory = (selectedType) => {
    try {
      const filteredRecipes = selectedType ? recipesArray.filter((recipe) => recipesArray.type === selectedType) : recipesArray;
      console.log('Filtered Data', filteredRecipes)
      setData(filteredRecipes)
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
      <Header />
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
      data={data}
      renderItem={({item: recipe}) => <RenderRecipes  filteredData={[recipe]} />}
      keyExtractor={(recipe) => recipe.id.toString()}/>
    </View>
  )

  // return (
  //   <View>
  //     <Text> Recipe Screen</Text>
  //   </View>
  // )
}

const styles = StyleSheet.create({
  view: {
      backgroundColor: "blue",
      color: 'white'
  },
})

export default RecipeScreen