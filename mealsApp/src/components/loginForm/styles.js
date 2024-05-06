import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
      marginVertical: winWidth * 0.1,
        
    },
    info:{
       
        width: winWidth * 0.8,
        alignSelf:'center',
        height: winWidth * 0.15


    },
    forgetPswrd:{
        color:'#333333',
        alignSelf:'flex-end',
        fontSize:winWidth*0.032
    },
    rememberMe:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginVertical:winWidth*0.025,
        marginLeft:winWidth*0.01
      
    }
    ,
    checkBox:{
        width:winWidth*0.045,
        height:winWidth*0.045,
        borderradius:winWidth*0.01,
        borderColor:'#333333',
        borderWidth:winWidth*0.003
    },
    rememberMeText:{
        marginLeft:winWidth*0.01,
        fontSize:winWidth*0.035,
        color:'#333333',
        fontWeight:'500'
    }
   
});


export default styles;
