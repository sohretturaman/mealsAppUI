import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const HorizontalItem = props => {
  const {photo, food_name, price, children} = props;
  return (
    <TouchableOpacity style={{marginHorizontal: winWidth * 0.02, height: winHeight * 0.18}}>
      <View style={styles.eat_view}>
        <Image source={{uri: photo}} style={styles.eat_photo} />
        <View style={{margin: winWidth * 0.02}}>
          <Text style={styles.text_style}>{food_name}</Text>
          <Text style={styles.text_size}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalItem;