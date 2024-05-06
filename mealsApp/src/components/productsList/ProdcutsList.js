import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { ProductItem } from "..";
import { DummyData } from "../../assets/contants";

const ProdcutsList = () => {
  const [columns, setColumns] = useState(2);//for columns

 
  return (
    <View style={styles.container}>
      <FlatList
      disableVirtualization={true}
        data={DummyData}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={columns.toString()} 
      />
    
    </View>
  );
};

export default ProdcutsList;

