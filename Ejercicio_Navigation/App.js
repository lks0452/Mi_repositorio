import React from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigatior, createStackNavigator} from 'react-navigation-stack';
import home from './Home';
import detalle from './Detalle';
import item from './Item';
import datos from './Datos';




const AppNavigator = createStackNavigator({
  Home: {
    screen:home
  },
  DetallePok:{
    screen: detalle
  }
}, {initialRouteName: 'Home'})

export default createAppContainer(AppNavigator);


