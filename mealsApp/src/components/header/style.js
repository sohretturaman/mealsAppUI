import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight * 0.07,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.05,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:winWidth * 0.02,
    elevation:0.5
}
,
icon: {
   width: winWidth * 0.07,
   height: winWidth * 0.07,
},
text:{
    fontSize:winWidth * 0.045,
    color:'black',
    fontWeight  : '600',
}
});
export default styles;