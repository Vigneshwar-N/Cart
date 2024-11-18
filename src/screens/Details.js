import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utility/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeItem} from '../reduxToolkit/cartSlice';

export default function Details({route}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const {item} = route.params;
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

  function addItem() {
    dispatch(addToCart(item));
  }
  function removeItems(item) {
    dispatch(removeItem(item));
  }

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
          {cartItem ? `$${Math.round(cartItem.totalPrice)}` : `$${item.price}`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={addItem}>
          <Text
            style={{
              padding: '2%',
              borderWidth: 1,
              height: 50,
              width: 50,
              verticalAlign: 'middle',
              textAlign: 'center',
              borderRadius: 100,
              backgroundColor: '#000',
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            +
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            padding: '2%',
            height: 50,
            width: 50,
            verticalAlign: 'middle',
            textAlign: 'center',
            borderRadius: 100,
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {cartItem ? `${cartItem.quantity}` : '0'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            removeItems(item.id);
          }}>
          <Text
            style={{
              padding: '2%',
              borderWidth: 1,
              height: 50,
              width: 50,
              verticalAlign: 'middle',
              textAlign: 'center',
              borderRadius: 100,
              backgroundColor: '#000',
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
