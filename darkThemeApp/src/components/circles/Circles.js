import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Circles = () => {
  return (
    <View style={styles.container}>
          <View style={[styles.circle,{backgroundColor:'gray'}]}>
            <Text style={styles.sizeText}>7</Text>
          </View>
          <View style={[styles.circle,{backgroundColor:'#508CDC'}]}>
            <Text style={styles.sizeText}>8</Text>
          </View>
          <View style={[styles.circle,{backgroundColor:'gray'}]}>
            <Text style={styles.sizeText}>9</Text>
          </View>
          <View style={styles.colorsWrapper}>
          <View style={[styles.circle,{backgroundColor:'orange'}]}/>
          <View style={[styles.circle,{backgroundColor:'#3E219E'}]}/>
          <View style={[styles.circle,{backgroundColor:'#78D2862F'}]}/>
          </View>
       
          


    </View>
  );
};

export default Circles;
