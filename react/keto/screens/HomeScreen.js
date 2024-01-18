//import React from 'react';
import { useEffect, useRef } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Animated} from 'react-native';
import {Card }  from 'react-native-elements';
import Avocado from '../assets/avocado.webp'

const images = [
  require('../assets/IMG_2189.jpeg'),
  require('../assets/stirfry.jpg'),
  require('../assets/cucumber.jpg')
]

const FeaturedItem = ({imageSource}) => {
  //const {recipe }= props
  return (
    <Card containerStyle={{padding: 0}}>
      <Card.Image source={imageSource}></Card.Image>
    </Card>
  )
}


const HomeScreen = () => {

  const scaleValue = useRef(new Animated.Value(0)).current;
  const scaleAnimatioon = Animated.timing(scaleValue, {
    toValue: 1,
    duration:  1500,
    useNativeDriver: true,
  } )

  useEffect(() => {scaleAnimatioon.start();}, [scaleAnimatioon])

  return (
    <ScrollView style={styles.view}>
      <View>
        <Image source={Avocado} style={styles.image}/>
        <Text style={styles.headerText}>Welcome to Keto Neato!</Text>
      </View>
      <View stye={styles.secondView}>
        <Text style={styles.text}>Keto Neato is designed to help those doing the diet as well as new comers. </Text>
        <Text style={styles.text}>Here you will find recipe suggestions, tips, tricks and so much more.</Text>
        <Text style={styles.text}>Below are featured recipes we think you will love!</Text>
      </View>
      <Animated.ScrollView style={{transform: [{scale: scaleValue}]}}>
        {images.map((image, index) => 
        <FeaturedItem key={index} imageSource={image}/>)}
      </Animated.ScrollView>
      <View>
        <Text style={styles.textSub}>Tips and Tricks!</Text>
        <Text style={styles.text}>• Avocado Spray is best when making chiken in the Airfryer, spices will stick!</Text>
        <Text style={styles.text}>• Keto bagel dough is best when adding in 1 teaspoon of salt.</Text>
        <Text style={styles.text}>• Keto pasta can be found in places like Acme, Publix and Amazon.</Text>
        <Text style={styles.text}>• When cooking spaghetti squash, cut in half for easier use!</Text>
      </View>
    </ScrollView>
  )
  
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#A2BCFF",
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
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
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    color: '#307418',
    margin: 10,
    padding: 5
  },
  textSub: {
    fontSize: 20,
    color: '#307418',
    margin: 10,
    padding: 5,
    fontWeight: 'bold'
  }
})

export default HomeScreen