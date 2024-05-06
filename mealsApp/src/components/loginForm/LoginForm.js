import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Button, TextInputComp } from "..";
import { useNavigation } from "@react-navigation/native";
import { RouterNames } from "../../config";
const LoginForm = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TextInputComp placeholder={'jhondoe@gmail.com'} title={'Email'}  />
    <TextInputComp  placeholder={'password'} title={'Password'} secureTextEntry={true} />
    <View style={styles.info}>
         <Text style={styles.forgetPswrd}>
           Forgot Password ?
         </Text>
         <View style={styles.rememberMe}>
             <View style={styles.checkBox} />
             <Text style={styles.rememberMeText}>Remeber Me</Text>
         </View>
    </View>
    <Button title={ 'Login'} bgColor={'#C64D03'} onPressFunc={() => {navigation.navigate(RouterNames.HOME)}}/>
 </View>
  );
};

export default LoginForm;
