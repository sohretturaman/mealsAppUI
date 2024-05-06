import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight * 0.08,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.01,
   justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:winWidth * 0.01

}
,
image:{
    width: winWidth * 0.15,
    height: winWidth * 0.15,
    borderRadius: winWidth * 0.1,
},
innerContainer:{
    flexDirection:'row',
    alignItems:'center'
}
,
imageContainer:{
    marginRight: winWidth * 0.05
},
text:{
    color:'gray',
    fontSize: winWidth * 0.03,
    fontWeight:'500'
},
title:{
    fontSize: winWidth * 0.05,
    fontWeight:'600',
    color:'black'
},
icon:{
    width: winWidth * 0.06,
    height: winWidth * 0.06
}
});
export default styles;