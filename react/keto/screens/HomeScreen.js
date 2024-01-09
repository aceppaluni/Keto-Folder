import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../components/Header';
import Avocado from '../assets/avocado.webp'

const HomeScreen = () => {

  return (
    <ScrollView style={styles.view}>
      <Header />
      <View>
        <Image source={Avocado} style={styles.image}/>
        <Text style={styles.headerText}>welcome to Keto Neato!</Text>
      </View>
      <View stye={styles.secondView}>
        <Text style={styles.text}>Keto Neato is designed to help those doing the diet as well as new comers. </Text>
        <Text style={styles.text}>Here you will find recipie suggestions, tips, tricks and so much more.</Text>
        <Text style={styles.text}>Below are featured recipies we think you will love</Text>
      </View>
      <View>
        {/* {add in the animatible that will put the pictures on rotate} */}
      </View>
      <View>
        <Text style={styles.text}>Tips and Tricks!</Text>
        <Text style={styles.text}>Avocado Spray is best when making chiken in the Airfryer, spices will stick!</Text>
        <Text style={styles.text}>Keto bagel dough is best when adding in 1 teaspoon of salt.</Text>
        <Text style={styles.text}>Keto pasta can be found in places like Acme and Publix.</Text>
        <Text style={styles.text}>When cooking spaghetti squash, cut in half for easier use!</Text>
      </View>
    </ScrollView>
  )
  
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#A2BCFF",
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  secondView: {
    textAlign: 'center'
  },
  headerText: {
    textAlign: 'center',
    color: '#307418',
    margin: 5,
    fontSize: 25
  },
  text: {
    fontSize: 20,
    color: '#307418',
    margin: 5
  }
})

export default HomeScreen