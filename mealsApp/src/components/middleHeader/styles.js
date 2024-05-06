import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth,
        height: winWidth * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:winWidth * 0.06,
        flexDirection:'row',
        paddingHorizontal:winWidth * 0.05
        
    }
});


export default styles;
