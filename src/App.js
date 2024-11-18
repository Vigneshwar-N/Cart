import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './reduxToolkit/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
