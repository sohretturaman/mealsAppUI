import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {DummyData} from "../../../assets/contants";
import styles from "./styles";
import { LoginFooter, LoginForm, MiddleHeader, TextInputComp } from "../../../components";


const Login = () => {
  const [loginOption, setLoginOption] = useState(false);
    const img= DummyData[0].image
    console.log('image',Image)
  return (
    <View style={styles.container}>
        <View style={styles.imgWrapper}>
        <Image source={{uri:img}} style={styles.image}/> 
        </View>
        <MiddleHeader setLoginOption={setLoginOption} loginOption={loginOption} />
       <LoginForm />

       <View style={styles.orContainer}>
          <View style={styles.line}/>
            <Text style={styles.orText}>OR</Text>
         
       </View>
      
       <LoginFooter />

    </View>
  );
};

export default Login;
