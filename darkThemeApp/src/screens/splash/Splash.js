import { View, Text, Image } from "react-native";
import React from "react";
import { dubai, mall } from "../../assets/images";
import styles from './styles'

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
      <Text style={styles.text}> THE DUBAI MALL </Text>
      </View>

      <Image style={styles.dubai} source={mall}/>
    </View>
  );
};

export default Splash;
