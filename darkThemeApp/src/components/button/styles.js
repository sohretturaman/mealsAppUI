import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
container: {
    width: winWidth*0.35,
    height: winWidth * 0.1,
    paddingHorizontal: winWidth * 0.05,
    justifyContent: 'center',
    borderRadius: 0,
    marginTop:winWidth * 0.05,
    alignSelf:'flex-start'
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