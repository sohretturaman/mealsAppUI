import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
container: {
    width: winWidth*0.35,
    height: winWidth * 0.1,
    justifyContent: 'center',
    borderRadius: winWidth * 0.05,
    flexDirection:'row'
 
}
,
darkButton:{
    borderColor:'white',
    backgroundColor:'#1D1C1C',
    borderWidth:1,
    width: winWidth*0.1,
    borderTopLeftRadius: winWidth * 0.05,
    borderBottomLeftRadius: winWidth * 0.05,
    justifyContent:'center',
    alignItems:'center'
},
middleButton:{
  width: winWidth*0.15,   
  justifyContent:'center',
  alignItems:'center'
},
lightButton:{
    borderTopRightRadius: winWidth * 0.05,
    borderBottomRightRadius: winWidth * 0.05,
    backgroundColor:'white',
    width: winWidth*0.1,
    justifyContent:'center',
    alignItems:'center'
},
lightText:{
    color:'white',
    fontSize:winWidth*0.04,
    fontWeight:'600'
},
darkText:{
    color:'black',
    fontSize:winWidth*0.04,
    fontWeight:'600'
}
});
export default styles;