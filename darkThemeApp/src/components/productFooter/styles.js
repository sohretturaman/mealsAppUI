import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  star_position: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: winWidth * 0.03,
  },

  food_name: {
    fontSize: winWidth * 0.06,
    fontWeight: '700',
    color: 'black',
  },
  top: {
    backgroundColor: 'white',
    height: winWidth * 0.16,
    width: winWidth * 1,
  },
  image: {
    height: winWidth * 0.7,
    width: winWidth * 1,
  },
  heart_view: {
    height: winWidth * 0.13,
    width: winWidth * 0.13,
    backgroundColor: 'white',
    borderRadius: winWidth * 1,
    shadowColor: 'black',
    shadowOpacity: winWidth * 1,
    shadowRadius: winWidth * 1,
    shadowOffset: {
      width: winWidth * 1,
      height: winWidth * 1,
    },
    elevation: 5,
    position: 'absolute',
    right: winWidth * 0.05,
    top: winWidth * 0.53,
  },
  heart_size: {
    height: winWidth * 0.09,
    width: winWidth * 0.09,
    margin: winWidth * 0.02,
    top: winWidth * 0.01,
  },
  scroll: {
    height: winHeight * 0.83,
  },
  screen: {
    height: winHeight * 1.4,
  },
  text_area: {
    width: winWidth * 0.9,
    alignSelf: 'center',
    padding: winWidth * 0.02,
  },
  star_size: {
    height: winWidth * 0.034,
    width: winWidth * 0.034,
  },
  plus: {
    backgroundColor: '#BE4E00',
    height: winWidth * 0.09,
    width: winWidth * 0.18,
    borderRadius: winWidth * 0.06,
  },
  plus_text: {
    fontSize: winWidth * 0.05,
    fontWeight: '800',
    color: '#E4DDC6',
  },
  des_style: {
    fontSize: winWidth * 0.045,
    fontWeight: '600',
    color: 'black',
  },
  text_des: {
    fontSize: winWidth * 0.036,
    fontWeight: '400',
    color: 'black',
  },
});
