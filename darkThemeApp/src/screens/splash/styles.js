import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        width: winWidth,
        height: winHeight ,
        backgroundColor: 'black',
         justifyContent: 'flex-end',
        
    }
    ,
    dubai:{
        width: winWidth,
        height: winHeight * 0.6,
        resizeMode:'stretch',
        opacity:0.5
    },
    text:{
        color: '#ffffff',
        fontSize: winWidth * 0.08,
        fontWeight: '600',
   
       
    }
    ,
    textWrapper:{
        width: winWidth * 0.4,
        alignSelf:'center',
        alignItems:'center',
    }
 
});


export default styles;
