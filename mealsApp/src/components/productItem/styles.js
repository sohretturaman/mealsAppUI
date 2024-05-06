import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth*0.4,
        height: winWidth * 0.5,
        backgroundColor: '#E9E7E7',
        alignItems: 'center',
        borderRadius: winWidth * 0.02,
        marginHorizontal: winWidth * 0.02,
        marginVertical: winWidth * 0.02,
        elevation: 1,

        

        
    },
    image:{
        width: winWidth*0.4,
        height: winWidth * 0.38,
        resizeMode: "cover",
        backgroundColor:'white'
    },
    innerContainer:{
        width: winWidth*0.4,
        alignItems: 'center',
        padding:winWidth*0.01
    },
    title:{
        color: '#3333333',
        fontSize: winWidth * 0.03,
        fontWeight: '500',
    },
    description:{
        color: '#3333333',
        fontSize: winWidth * 0.04,
        fontWeight: '600',
    }
});


export default styles;
