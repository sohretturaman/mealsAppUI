import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { BottomTab, ProdcutsList, TopHeaders } from "../../components";
import styles from "./styles";

const Home = () => {
  const [loginOption, setLoginOption] = useState('Meals');

  return (
    <View style={styles.container}> 
      <TopHeaders loginOption={loginOption} setLoginOption={setLoginOption} />
     <ScrollView  style={styles.scrollView}>
     <ProdcutsList  />
     </ScrollView>
     
      <BottomTab />
    </View>
  );
};

export default Home;
