import { View, Text } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {   Details, Home, Settings } from "../screens";
import { RouterNames } from "../config";
import AuthStack from "./AuthStack";
import { Header } from "../components";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={"authHome"} screenOptions={{
    headerShown:false
    }} >
        <Stack.Screen  name={RouterNames.HOME}  component={Home} options={{headerShown:true, header:()=>
        <Header />}}  />
        <Stack.Screen name={RouterNames.DETAILS} component={Details}  />
        <Stack.Screen name={RouterNames.SETTİNGS} component={Settings}  />
         <Stack.Screen name={'authHome'} component={AuthStack} />{/**ask ? */}
    </Stack.Navigator>
  );
};

export default Navigation;
