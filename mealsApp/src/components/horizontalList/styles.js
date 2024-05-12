import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  eat_view: {
    backgroundColor: 'white',
    height: winWidth * 0.35,
    width: winWidth * 0.4,
    borderRadius: winWidth * 0.04,
    shadowColor: 'black',
    shadowOffset: {
      height: winWidth * 0.01,
      width: winWidth * 0.01,
    },
    shadowOpacity: winWidth * 0.1,
    elevation: 5,
  },

  eat_photo: {
    height: winWidth * 0.18,
    width: winWidth * 0.4,
    borderTopLeftRadius: winWidth * 0.04,
    borderTopRightRadius: winWidth * 0.04,
  },
  text_style: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    color: 'black',
  },
  text_size: {
    fontSize: winWidth * 0.04,
    fontWeight: '700',
    color: 'black',
  },
});