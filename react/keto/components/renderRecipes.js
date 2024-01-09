import { Card } from 'react-native-elements';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import React from 'react'

const RenderRecipes = ({filteredData}) => {

  return (
   <ScrollView styles={styles.view}>
    {filteredData.map((recipe) => (
        <View key={recipe.id}>
            <Card>
                <Card.Title>{recipe.title}</Card.Title>
            </Card>
        </View>
    ))}
   </ScrollView>
  )
}

const styles = StyleSheet.create({ 
    view: {
      backgroundColor: "black",
      color: 'pink'
  },
});

export default RenderRecipes