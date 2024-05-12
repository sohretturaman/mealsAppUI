
import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;

const winHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight ,
    paddingHorizontal: winWidth * 0.05,
    justifyContent: 'center',
    borderRadius: 0,
    marginTop:winWidth * 0.05,
    backgroundColor:'black',
    alignItems:'center'
    
}
,
text: {
    color: 'white',
    fontSize: winWidth * 0.05,
    fontWeight: '500',
    textAlign:'center'
}
});
export default styles;