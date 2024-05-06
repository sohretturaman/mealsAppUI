import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight*0.98 ,
    backgroundColor: '#F6F4F4',
    
},
innerContainer: {
    width: winWidth,
    height: winHeight*0.5 ,
    paddingHorizontal: winWidth * 0.05,
    alignItems:'center',
    marginVertical:winWidth * 0.05
    
}


});
export default styles;