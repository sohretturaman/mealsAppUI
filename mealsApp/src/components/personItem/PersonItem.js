import { View, Text, Image } from "react-native";
import React from "react";
import { pImage } from "../../assets/images";
import {chatIcon} from '../../assets/icons'
import styles from "./styles";
import PropTypes from 'prop-types'
const PersonItem = (props) => {
  const {pImage=pImage, Icon=chatIcon ,name='John Doe', title='Person Name'} = props
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        
    
      <View style={styles.imageContainer}>
         <Image source={pImage} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{title} </Text>
        <Text style={styles.title}>{name}</Text>
      </View>
      </View>
      <Image  source={Icon} style={styles.icon} tintColor={'blue'}/>
    </View>
  );
};

PersonItem.prototypes =  {
  pImage: PropTypes.any,
  Icon: PropTypes.any
}

export default PersonItem;


