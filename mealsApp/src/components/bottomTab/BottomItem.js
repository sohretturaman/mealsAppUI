import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from 'prop-types'
import {homeIcon} from '../../assets/icons'
const BottomItem = (props) => {
    const {icon=homeIcon }=props; 
  return (
    <View style={styles.iconContainer}>
      <Image  source={icon} style={styles.icon}/>
    </View>
  );
};
BottomItem.propTypes = {
  icon: PropTypes.any

}

export default BottomItem;

