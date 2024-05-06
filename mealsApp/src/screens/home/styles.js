import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
        width: winWidth,
        height: winHeight*0.9 ,
        backgroundColor: 'white',
        
        
    }
    ,
    scrollView:{
        height:winHeight*0.8,
        backgroundColor:'red'
    }
});


export default styles;
