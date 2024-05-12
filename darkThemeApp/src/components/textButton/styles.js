import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth*0.3,
        height: winWidth * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
          
    },
    text:{
        color: 'gray',
        fontSize: winWidth * 0.04,
        fontWeight: '600',
    }
});


export default styles;
