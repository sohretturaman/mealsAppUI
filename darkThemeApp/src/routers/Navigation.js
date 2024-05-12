
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {   Details, Home, Products, Splash } from "../screens";
import { RouterNames } from "../config";


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouterNames.HOME} screenOptions={{
    headerShown:false
    }} >
      <Stack.Screen name = {RouterNames.SPLASH} component={Splash} />
        <Stack.Screen  name={RouterNames.HOME}  component={Home} />
        <Stack.Screen name={RouterNames.DETAILS} component={Details}  />
        <Stack.Screen name ={RouterNames.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};

export default Navigation;
