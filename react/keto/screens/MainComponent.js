import React from 'react';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import RecipeScreen from './RecipeScreen';
import {StyleSheet, View, Image, Text} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import {Icon} from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
        title: "Home",
        headerLeft: () => (<Icon name='home' type='font-awesome' onPress={() => navigation.toggleDrawer()}></Icon>)
        })} />
    </Stack.Navigator>
  )
}

const AboutNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator >
      <Stack.Screen name="About" component={AboutScreen}  options={({navigation}) => ({
        title: "About",
        headerLeft: () => (<Icon name='info-circle' type='font-awesome' onPress={() => navigation.toggleDrawer()}></Icon>)
        })} />
    </Stack.Navigator>
  )
}

const RecipeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Recipes' component={RecipeScreen} options={({navigation}) => ({
        title: 'Recipes',
        headerLeft: () => (<Icon name="list" type='font-awesome' onPress={() => navigation.toggleDrawer()} />)
      })} />
    </Stack.Navigator>
  )
}

const customDrawerContent = (props) => (
  <DrawerContentScrollView>
    <View style={styles.drawerHeader}>
      <View style={{flex: 3}}>
        <Text style={styles.drawerHeaderText}>Keato Neato</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{fontWeight: 'bold'}}/>
  </DrawerContentScrollView>
  // need props in list to add styling effects defined below
)

const Main = () => {
  
  //need the style attribute inside the view tag to make page render and appear correctly
  return (
    <View style={{
      flex: 1, 
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}} >
      <Drawer.Navigator initialRouteName="Home" drawerContent={customDrawerContent} drawerStyle={{backgroundColor: '#6E5135'}}>
        <Drawer.Screen name="Home" component={HomeNavigator} options={{
          title: 'Home',
          drawerIcon: ({color}) => (<Icon name='home' type='font-awesome' size={24} iconStyle={{width: 24}} color={color}/>)
          }}/>
        <Drawer.Screen name="About" component={AboutNavigator} options={{
          title: 'About',
          drawerIcon: ({color}) => (<Icon name='info-circle' type='font-awesome' size={24} iconStyle={{width: 24}} color={color}/>)
          }}/>
        <Drawer.Screen name='Recipe' component={RecipeNavigator} options={{
          title: 'Recipes', 
          drawerIcon: ({color}) => (<Icon name='list' type='font-awesome' size={24} iconStyle={{width: 24}} color={color}/>) }}/>
      </Drawer.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#A2BCFF'
  },
  drawerHeader: {
    flexDirection: 'row'
  },
  drawerHeaderText: {
    fontSize: 24,
    color: 'green',
    textAlign: 'center'
  },
  drawerImage: {
    width: 20
  }
})

export default Main