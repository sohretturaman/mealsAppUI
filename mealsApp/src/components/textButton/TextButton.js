import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const TextButton = (props) => {
    const {text,handlePress, active,isHomeScreen} = props
    textColor = isHomeScreen&&active ? '#C64D03':'#333333'
  return (
    <Pressable onPress={handlePress} style={[styles.container, {borderBottomColor:active ? '#C64D03':'white'}]}>
      <Text style={[styles.text,{opacity:active ? 1 : 0.5,color: isHomeScreen? textColor:'#C64D03'}]}>{text}</Text>
    </Pressable>
  );
};


export default TextButton;
