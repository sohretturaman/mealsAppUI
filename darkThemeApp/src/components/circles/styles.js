import {Dimensions, StyleSheet, Text, View} from 'react-native';

const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.9,
    height: winWidth * 0.15,
    marginTop: winWidth * 0.05,
    flexDirection: 'row',
  },
  circle: {
    width: winWidth * 0.1,
    height: winWidth * 0.1,
    borderRadius: winWidth * 0.1,
    marginHorizontal: winWidth * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorsWrapper: {
    flexDirection: 'row',
    width: winWidth * 0.5,
    marginLeft: winWidth * 0.1,
  },
  sizeText: {
    fontSize: winWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
});
export default styles;
