import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tab from './tab';

import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Details from '../screens/Details';

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tab">
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Prod" component={Product} />
      <Stack.Screen name="Carts" component={Cart} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
