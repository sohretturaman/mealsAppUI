import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    marginVertical:winWidth * 0.02,
    width: winWidth * 0.8,
    alignSelf:'center',
    marginVertical:winWidth * 0.02,

}
,
inputWrapper:{
    width: winWidth * 0.8,
    height: winWidth * 0.1,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.01,
    borderRadius: winWidth * 0.02,
    borderColor:'gray',
    borderWidth:winWidth * 0.001,
    elevation:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    }
   
},
textInput: {
    color: 'black',
    fontSize: winWidth * 0.04,
    fontWeight: '400',
},
title: {
    color: '#333333',
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    padding:winWidth * 0.009
}
});
export default styles;