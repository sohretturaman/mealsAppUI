import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
container: {
 flexDirection: 'row',
 alignItems: 'center',
 width: winWidth*0.75,
 alignSelf:'center'
}
,
line:{
    width: winWidth*0.12,
    height: winWidth * 0.01,
    borderRadius: 2,
    marginTop:winWidth * 0.01,
    backgroundColor:'red',
    marginHorizontal:winWidth * 0.01
}

});
export default styles;