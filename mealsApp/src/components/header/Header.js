import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import PropTypes from 'prop-types'
import { cart,back } from "../../assets/icons";
import {useNavigation} from "@react-navigation/native"

const Header = (props) => {
    const {title='Header'} =props
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} >
      <Image  source={back}  style={styles.icon}/>
         </TouchableOpacity>
     
      <Text style={styles.text}>{title}</Text>
      <Image  source={cart} style={styles.icon} />
    </View>
  );
};

Header.propTypes = {
    title: PropTypes.string
}



export default Header;

