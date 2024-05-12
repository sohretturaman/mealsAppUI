import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winWidth * 0.2,
    backgroundColor: 'black',
    paddingHorizontal: winWidth * 0.02,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
}
,
shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
},
text: {
    color: 'black',
    fontSize: winWidth * 0.05,
    fontWeight: '500',
},
innerContainer:{
    flexDirection:'row',
    alignItems:'center'
},

icon:{
    width: winWidth * 0.08,
    height: winWidth * 0.08,
    
},
iconContainer:{
    padding:winWidth * 0.02
}
});
export default styles;