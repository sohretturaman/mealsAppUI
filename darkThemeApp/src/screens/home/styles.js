import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight*0.99,
    backgroundColor: 'black',
  },
  scrollView: {
    height: winHeight * 0.8,
    backgroundColor: 'red',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: winWidth,
    paddingHorizontal: winWidth * 0.02,
    marginVertical:winWidth*0.06
  },
  text:{
    fontSize:winWidth*0.05,
    color:'white',
    fontWeight:'600'

  }
});

export default styles;
