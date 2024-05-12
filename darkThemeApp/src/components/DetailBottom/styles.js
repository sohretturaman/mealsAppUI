import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth*0.9,
        height: winWidth * 0.6,
        backgroundColor:'black',
        marginTop:winWidth*0.06,
          
    },
    topContainer:{
        alignItems: 'center',
        flexDirection:'row' ,
        width:winWidth*0.9,
        justifyContent:'space-between'
    },
    topTextsWrapper:{
        width:winWidth*0.45,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    category:{
        fontSize:winWidth*0.04,
        fontWeight:'600',
        color:'white',
        
    },
    title:{
        fontSize:winWidth*0.05,
        fontWeight:'500',
        color:'white',
        marginTop:winWidth*0.01
        
    },
    salesInfo:{
        color:'green',
        fontSize:winWidth*0.035,
        fontWeight:'500',

    },
    icon:{
        width:winWidth*0.07,
        height:winWidth*0.07
    },
    favIconWrapper:{
        width:winWidth*0.1,
        height:winWidth*0.1,
        alignItems:'center',
        justifyContent:'center'
    },

    price:{
        fontSize:winWidth*0.055,
        fontWeight:'600',
        color:'#56B1B7',
        marginTop:winWidth*0.01
    },
    desc:{
        fontSize:winWidth*0.035,
        fontWeight:'400',
        color:'white',
        marginTop:winWidth*0.01
    },
    descWrapper:{
        width:winWidth*0.9,
       // height:winWidth*0.3,
        justifyContent:'center',
        marginTop:winWidth*0.03
    },
    sizeWrapper:{
        width:winWidth*0.6,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:winWidth*0.1,
        
    },
    sizeTexts:{
      fontSize:winWidth*0.03,
      fontWeight:'500',
      color:'white'
    }

   
});


export default styles;
