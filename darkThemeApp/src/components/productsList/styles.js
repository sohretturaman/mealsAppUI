import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth,
        height:'auto'  ,
        backgroundColor: 'black',
        alignItems:'center',
    justifyContent:'center'
       
        

        
    },
 
});


export default styles;
