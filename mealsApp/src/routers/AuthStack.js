import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens";
import { RouterNames } from "../config";


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name={RouterNames.LOGIN} component={Login}/>
   </Stack.Navigator>
  );
};

export default AuthStack;
