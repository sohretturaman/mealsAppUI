import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { googleLogo } from "../../assets/icons";
const IconComp = (props) => {
  const {logo=googleLogo}= props
  return (
    <View style={styles.iconWrapper}>
    <Image source={logo}  style={styles.icon}/>
    </View>
  );
};

export default IconComp;
