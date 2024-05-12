import { View, Text } from "react-native";
import React from "react";
import { ProdcutsList } from "../../components";
import DummyData from "../../assets/DummyData";
import styles from "./styles";
const Products = () => {

  return (
    <View style={styles.container}>
      <ProdcutsList  data= {DummyData} />
    </View>
  );
};

export default Products;
