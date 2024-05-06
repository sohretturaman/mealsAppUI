import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import PropTypes from 'prop-types'
import { cart,back } from "../../assets/icons";

const Header = (props) => {
    const {title='Header'} =props
  return (
    <View style={styles.container}>
      <Image  source={back}  style={styles.icon}/>
      <Text style={styles.text}>{title}</Text>
      <Image  source={cart} style={styles.icon} />
    </View>
  );
};

Header.propTypes = {
    title: PropTypes.string
}



export default Header;

