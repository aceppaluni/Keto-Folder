import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Keato Neato</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
      //width: '100%',
      //height: '200%'
      margin: '10%',
      display: 'flex',
      flexDirection:'row',
      flexDirection: 'row'
      //justifyContent: 'flex-end'
  },
  image: {
      width: '15%',
      height: '150%',
      borderRadius: '50%'
  },
  text:{
      color: '#307418',
      fontSize: 20,

      //textAlign: 'center'
  }
})
export default Header