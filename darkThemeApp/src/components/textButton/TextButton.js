import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const TextButton = (props) => {
    const {text,handlePress} = props
    
  return (
    <Pressable onPress={handlePress} style={[styles.container]}>
      <Text style={[styles.text]}>{text}</Text>
    </Pressable>
  );
};


export default TextButton;
