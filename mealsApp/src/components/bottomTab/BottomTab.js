import { View, Text } from "react-native";
import React from "react";
import BottomItem from "./BottomItem";
import styles from "./styles";
import {chatIcon,heartIcon,homeIcon,settingsIcon} from '../../assets/icons'

const BottomTab = () => {
  return (
    <View style={[styles.container, styles.shadow]}> 
      <BottomItem  icon={homeIcon}/>
      <BottomItem  icon={heartIcon}/>
      <BottomItem  icon={settingsIcon}/>
      <BottomItem  icon={chatIcon}/>
    </View>
  );
};

export default BottomTab;
