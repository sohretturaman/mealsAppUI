import { View, Text, Pressable } from "react-native";
import React from "react";
import { TextButton } from "..";
import styles from "./styles";
const MiddleHeader = (props) => {
    const{loginOption, setLoginOption} = props

    const handlePress = () => {
        setLoginOption(!loginOption);
    }
   
  return (
    <View style={styles.container}>
     
        <TextButton text="Sign In" active={loginOption}  handlePress={()=>handlePress(true)}  isHomeScreen={false}/>
        <TextButton text="Sign Up"  active={!loginOption}handlePress={()=>handlePress(false)} isHomeScreen={false} />

       
    </View>
  );
};

export default MiddleHeader;
