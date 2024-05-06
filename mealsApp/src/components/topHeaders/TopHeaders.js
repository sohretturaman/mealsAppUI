import React from "react";
import { View } from "react-native";
import { TextButton } from "..";
import styles from "./styles";

const TopHeaders = (props) => {
  const { loginOption, setLoginOption } = props;

  const handlePress = (option) => {
    setLoginOption(option);
  };

  return (
    <View style={styles.container}>
      <TextButton
        text="Meals"
        active={loginOption === "Meals"}
        handlePress={() => handlePress("Meals")}
        
      />
      <TextButton
        text="Sides"
        active={loginOption === "Sides"}
        handlePress={() => handlePress("Sides")}
     
      />
      <TextButton
        text="Screens"
        active={loginOption === "Screens"}
        handlePress={() => handlePress("Screens")}
  
      />
    </View>
  );
};

export default TopHeaders;
