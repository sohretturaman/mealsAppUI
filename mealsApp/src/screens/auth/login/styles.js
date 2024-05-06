import { StyleSheet, Text, View,Dimensions } from "react-native";
import React from "react";



const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
container: {
    height:winHeight,
    width:winWidth,
    backgroundColor:'white'
},
image: {
    width: winWidth*0.6,
    height: winWidth * 0.6,
    borderRadius: winWidth * 0.5,
    position: "absolute",
    top:- winWidth * 0.12,
    left: -winWidth * 0.14,
    resizeMode: "cover",
},
imgWrapper: {
    width: winWidth,
    height: winWidth * 0.45,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    
},
orContainer:{
    width:winWidth,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:winWidth * 0.05,
  
},
line:{
    width:winWidth*0.8,
    position:'absolute',
    height:winWidth * 0.005,
    backgroundColor:'#333333',
},
orText:{
    marginVertical:winWidth * 0.01,
    fontSize:winWidth * 0.04,
    fontWeight:'bold',
    backgroundColor:'white',
    paddingHorizontal   :winWidth * 0.02,
    color:'#333333'
}

});

export default styles;