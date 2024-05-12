import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  sign_text: {
    fontSize: winWidth * 0.06,
    fontWeight: '800',
    color: '#C65A1C',
  },
  line: {
    backgroundColor: '#C65A1C',
    height: winWidth * 0.01,
    width: winWidth * 0.4,
    marginLeft: winWidth * 0.07,
  },
  input_pozition: {
    width: winWidth * 0.88,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: winWidth * 0.05,
  },
});