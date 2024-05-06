import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { pImage } from "../../assets/images";
const ProductItem = (props) => {
    const {item} = props
  return (
    <View style={styles.container}>
        <Image source={{uri:item.image}} style={styles.image} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.price} $</Text>
        </View>
    
    </View>
  );
};

export default ProductItem;
