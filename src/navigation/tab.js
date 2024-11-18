import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import {image} from '../assets/images';

export default function Tab() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Product">
      <BottomTab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: () => (
            <Image source={image.home} style={{width: 20, height: 20}} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Image source={image.cart} style={{width: 20, height: 20}} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
