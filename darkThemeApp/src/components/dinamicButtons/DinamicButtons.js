import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const DinamicButtons = (props) => {
    const {count = 0, onIncrease, onDecrease} = props

  return (
    <View style={styles.container}>
        <TouchableOpacity 
         onPress={onDecrease}
        style={styles.darkButton}>
            <Text style={styles.lightText}> - </Text>
        </TouchableOpacity>

       
       <View style={styles.middleButton}>
       <Text style={styles.lightText}>{count}</Text>
       </View>
  
      <TouchableOpacity 
       onPress={onIncrease}
      style={styles.lightButton}>
        <Text style={styles.darkText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DinamicButtons;
