import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../utility/responsive';
import {data} from '../data/data';
import {useDispatch} from 'react-redux';
import {addToCart} from '../reduxToolkit/cartSlice';

export default function Product({navigation}) {
  const dispatch = useDispatch();
  const onPressFunction = item => {
    dispatch(addToCart(item));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
        }}>
        Product
      </Text>
      <View style={{marginTop: 10, paddingBottom: 30, alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.products}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {item});
              }}
              style={{
                flexDirection: 'row',
                marginVertical: hp(1),
                elevation: 4,
                backgroundColor: '#FFF',
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <View style={{}}>
                <Image
                  style={{
                    height: 110,
                    width: 110,
                    left: 1,
                  }}
                  source={{uri: item.image}}
                  resizeMode="contain"
                />
              </View>
              <View style={{width: wp(70), top: 10, left: 6}}>
                <Text style={{padding: '0.5%', fontSize: 18}}>{item.name}</Text>
                <Text numberOfLines={1} style={{padding: '0.5%', fontSize: 16}}>
                  {item.description}
                </Text>
                <Text style={{padding: '0.5%', fontSize: 20}}>
                  {`$${item.price}`}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    onPressFunction(item);
                  }}
                  style={{
                    margin: '2%',
                    alignSelf: 'center',
                    elevation: 10,
                    backgroundColor: '#FFF',
                    borderRadius: 5,
                    top: 3,
                    left: 60,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      padding: '2%',
                      color: '#FFF',
                      backgroundColor: '#000',
                    }}>
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
