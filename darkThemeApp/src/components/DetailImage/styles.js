import { Dimensions, StyleSheet, Text, View } from "react-native";
const winWidth = Dimensions.get("window").width;



const styles = StyleSheet.create({
    container: {
        width: winWidth * 0.95,
        height: winWidth * 0.75,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:winWidth * 0.01,
        borderRadius:winWidth*0.05,
        alignSelf:'center',
        marginVertical:winWidth*0.03
       ,elevation:1,
       marginTop:winWidth*0.04

        
    },
    title:{
        color: 'black',
        fontSize: winWidth * 0.04,
        fontWeight: '700',
        width:winWidth*0.4
    },
    image:{
        width: winWidth*0.5,
        height: winWidth * 0.4,
        resizeMode: "contain",
        position:'absolute',
        bottom  :0,
        borderRadius: winWidth * 0.02,
        alignSelf:'flex-end',
        justifyContent:'flex-end'
        ,
   

  
    },
    topWrapper:{
        width: winWidth*0.8,
        height: winWidth * 0.2,
        backgroundColor:'transparent',
         flexDirection:'row',
         justifyContent:'space-between'
     
    },
    dicount: {
        color: 'white',
        fontSize: winWidth * 0.04,
        justifyContent:'center',
       width:winWidth * 0.12,
       height:  winWidth * 0.12,
        marginLeft:winWidth * 0.02,
        backgroundColor:'black',
        borderRadius:winWidth * 0.1,
        alignItems:'center',
    },
    dicount_text:{
        color: 'white',
        fontSize: winWidth * 0.04,
        fontWeight: '700',
    },
    bottomWrapper:{
        width: winWidth*0.7,
        height: winWidth * 0.2,
        justifyContent:'flex-start'
        ,alignItems:'flex-start'
      
    }, 
    price :{
        color: 'gray',
        fontSize: winWidth * 0.04,
        fontWeight: '500',
        marginLeft:winWidth * 0.05,
    
    }
});


export default styles;
