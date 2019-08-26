import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/component/login'
import MapScreen from './app/component/map';
import Login from './app/Screens/login'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
  LoginScreen,
  MapScreen,
  Login,
});

const App = createAppContainer(DrawerNavigator);

export default App;

