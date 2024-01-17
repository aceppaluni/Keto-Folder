import { Card, ListItem } from 'react-native-elements';
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import React from 'react'
import icon from '../assets/icon.png'

const RenderRecipes = ({filteredRecipes}) => {
  
  return (
   <ScrollView style={styles.view}>
    {filteredRecipes.map((recipe) => (
        <View key={recipe._id}>
            <Card>
              <Card.Title>{recipe.title}</Card.Title>
              <Image source={icon} style={styles.photo}/>
              <Text>•{recipe.ingredients}</Text>
              <Text style={styles.description}>{recipe.description}</Text>
            </Card>
        </View>
    ))}
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  photo: {
    maxWidth: 150,
    height: 150,
    borderRadius: 40,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  description: {
    margin: 4,
  }
});

export default RenderRecipes