import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
   container:{
       width:winWidth,
       height:winHeight,
       backgroundColor:'black',
       alignItems:'center',
     
   },
   footer:{
    flexDirection:'row',
    width:winWidth *0.9,
    alignItems:'center',
    justifyContent:'space-between',
    height:winWidth*0.2

   }
});