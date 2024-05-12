import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from 'prop-types'
const winWidth = Dimensions.get('window').width;
const Button = (props) => {
  const { onPressFunc,title='Button',bgColor ='black', radious=0, textColor='white', textSize= winWidth * 0.05,} = props;
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgColor, borderRadius:radious}]} onPress={onPressFunc}>
      <Text style={[styles.text,{color:textColor,fontSize:textSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPressFunc: PropTypes.func,
  title: PropTypes.string
}

export default Button;
