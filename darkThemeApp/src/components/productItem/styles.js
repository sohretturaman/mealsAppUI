import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth*0.45,
        height: winWidth * 0.6,
        alignItems: 'center',
        borderRadius: winWidth * 0.02,
        marginHorizontal: winWidth * 0.01,
        marginVertical: winWidth * 0.02,
        backgroundColor:'black',
    

        
    },
    image:{
        width: winWidth*0.38,
        height: winWidth * 0.35,
        resizeMode: "contain",
        backgroundColor:'white'
    },
    innerContainer:{
        width: winWidth*0.4,
        alignItems: 'flex-start',
        padding:winWidth*0.01,
        height:winWidth*0.4
    },
    title:{
        color: 'white',
        fontSize: winWidth * 0.03,
        fontWeight: '500',

    },
    description:{
        color: '#3333333',
        fontSize: winWidth * 0.04,
        fontWeight: '600',
        color:'#807CD6'
    },
    imageWrapper:{
        backgroundColor:'white',
        width: winWidth*0.45,
        height: winWidth * 0.4,
        alignItems:'center',
        borderRadius:winWidth*0.05,
        justifyContent:'center'
    },
  
});


export default styles;
