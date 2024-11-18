import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utility/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemsFromCart,
  clearCart,
  removeItem,
} from '../reduxToolkit/cartSlice';

export default function Cart({navigation}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  function addItem(item) {
    dispatch(addItemsFromCart(item));
  }
  function removeItems(item) {
    dispatch(removeItem(item));
  }
  function clear() {
    dispatch(clearCart());
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: hp(2),
          }}>
          Cart
        </Text>
        <TouchableOpacity
          onPress={() => {
            clear();
          }}
          style={{
            alignSelf: 'flex-end',
            // borderWidth: 1,
            marginHorizontal: wp(3),
          }}>
          <Text
            style={{
              textAlign: 'right',
              padding: '2%',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            X
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1, paddingHorizontal: wp(4), paddingTop: hp(4)}}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={cartItems}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {item});
                }}
                style={{
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // borderWidth: 1,
                  borderRadius: 50,
                  padding: '3%',
                  elevation: 4,
                  backgroundColor: '#FFF',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 100, width: 100, borderRadius: 100}}
                    source={{uri: item.image}}
                  />
                  <View
                    style={{
                      left: 40,
                      justifyContent: 'space-evenly',
                      height: 60,
                    }}>
                    <Text>{item.name}</Text>
                    <Text>{`$${Math.round(item?.totalPrice)}`}</Text>
                  </View>
                </View>
                <View style={{right: 10}}>
                  <TouchableOpacity
                    onPress={() => {
                      addItem(item.id);
                    }}>
                    <Text
                      style={{
                        padding: '1%',
                        borderWidth: 1,
                        margin: 1,
                        fontSize: 15,
                        height: 30,
                        width: 30,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        borderRadius: 100,
                        fontWeight: 'bold',
                        backgroundColor: '#000',
                        color: '#FFF',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      padding: '1%',
                      // borderWidth: 1,
                      margin: 1,
                      fontSize: 15,
                      height: 30,
                      width: 30,
                      textAlignVertical: 'center',
                      textAlign: 'center',
                      borderRadius: 100,
                      fontWeight: 'bold',
                      // backgroundColor: '#000',
                      color: '#000',
                    }}>
                    {item?.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      removeItems(item.id);
                    }}>
                    <Text
                      style={{
                        padding: '1%',
                        borderWidth: 1,
                        margin: 1,
                        fontSize: 15,
                        height: 30,
                        width: 30,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        borderRadius: 100,
                        fontWeight: 'bold',
                        backgroundColor: '#000',
                        color: '#FFF',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
