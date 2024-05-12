import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { ProductItem } from "..";


const ProdcutsList = (props) => {
  const [columns, setColumns] = useState(2);//for columns
  const {data,horizontal=false} = props

 
  return (
    <View style={styles.container}>
      <FlatList
      disableVirtualization={true}
        data={data}
        horizontal={horizontal}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
         numColumns={horizontal!==true? columns:1}
       
      
      />
    
    </View>
  );
};

export default ProdcutsList;

