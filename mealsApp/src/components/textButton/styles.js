import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth*0.3,
        height: winWidth * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'#C64D03',
        borderBottomWidth:winWidth * 0.01,
        backgroundColor:'white',
        marginHorizontal:winWidth * 0.01,
        

        
    },
    text:{
        color: '#C64D03',
        fontSize: winWidth * 0.04,
        fontWeight: '600',
    }
});


export default styles;
