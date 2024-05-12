import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Lines = ({ item }) => { // Use object destructuring to get the 'item' prop
  const color1 = item === "line1" ? '#BBB7B7' : '#333333';
  const color2 = item === "line2" ? '#BBB7B7' : '#333333';
  const color3 = item === "line3" ? '#BBB7B7' : '#333333';
  const color4 = item === "line4" ? '#BBB7B7' : '#333333';
  const color5 = item === "line5" ? '#BBB7B7' : '#333333';

  return (
    <View style={styles.container}>
      <View style={[styles.line, { backgroundColor: color1 }]} />
      <View style={[styles.line, { backgroundColor: color2 }]} />
      <View style={[styles.line, { backgroundColor: color3 }]} />
      <View style={[styles.line, { backgroundColor: color4 }]} />
      <View style={[styles.line, { backgroundColor: color5 }]} />
    </View>
  );
};

export default Lines;
