import { View, Text, Image,Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { pImage } from "../../assets/images";
import {useNavigation} from '@react-navigation/native'
import { RouterNames } from "../../config";
const ProductItem = (props) => {
  const navigation = useNavigation()
    const {item} = props
  return (
    <Pressable onPress={() => {navigation.navigate(RouterNames.DETAILS,{item:item})}} style={styles.container}>
      <View style={styles.imageWrapper}>
      <Image source={{uri:item.image}} style={styles.image} />
      </View>
      
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.price} $ </Text>
        </View>
    
    </Pressable>
  );
};

export default ProductItem;
