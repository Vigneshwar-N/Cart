import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utility/responsive';
import {data} from '../data/data';

export default function Details({route}) {
  const {item} = route.params;
  const {products} = data;

  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: hp(3),
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Details
      </Text>
      <View style={{paddingHorizontal: wp(2)}}>
        <Image
          style={{height: hp(50), width: wp(96)}}
          source={{uri: item.image}}
        />
        <Text
          style={{
            color: '#000',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 25,
            paddingTop: hp(3),
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: '#000',
            textAlign: 'left',
            fontWeight: '400',
            fontSize: 20,
            paddingTop: hp(1),
          }}>
          {item.description}
        </Text>
        <Text
          style={{
            color: '#000',
            textAlign: 'left',
            fontWeight: '900',
            paddingTop: hp(1),
            fontSize: 26,
          }}>
          {`$${item.price}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
