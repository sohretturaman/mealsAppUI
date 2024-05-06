import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { ProductItem } from "..";


const ProdcutsList = (props) => {
  const [columns, setColumns] = useState(2);//for columns
  const {data} = props

 
  return (
    <View style={styles.container}>
      <FlatList
      disableVirtualization={true}
        data={data}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={columns.toString()} 
      />
    
    </View>
  );
};

export default ProdcutsList;

