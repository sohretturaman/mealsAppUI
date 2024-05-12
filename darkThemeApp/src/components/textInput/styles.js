import { Dimensions, StyleSheet } from "react-native";

const winWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winWidth * 0.2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#000000',
    borderBottomRightRadius: winWidth * 0.08,
    borderBottomLeftRadius: winWidth * 0.08,
  },
  textInput: {
    color: 'white',
    fontSize: winWidth * 0.03,
    fontWeight: '300',
    width: winWidth * 0.6,
    backgroundColor: '#000000',
    borderRadius: winWidth * 0.04, // Corrected from 'borderradius' to 'borderRadius'
 paddingHorizontal: winWidth * 0.03 ,
 borderColor:'white',
 borderWidth:1
},
  inputWrapper: {
    width: winWidth * 0.6,
    alignSelf: 'center',

   
  },
  buttonWrapper:{
    width:winWidth*0.12
  },
  text:{
    color:'white',
    fontSize:winWidth*0.025,
    alignItems:'center',
    textAlign:'center'
  }
});

export default styles;
