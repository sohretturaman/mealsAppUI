import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.8,
    height: winWidth * 0.11,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: winWidth * 0.05,
    marginTop: winWidth * 0.03,
  },
  iconWrapper: {
    height: winWidth * 0.11,
    width: winWidth * 0.11,
    borderRadius: winWidth * 0.05,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    borderColor: 'gray',
    borderWidth: winWidth * 0.0005,
    
  },
  icon: {
    width: winWidth * 0.08,
    height: winWidth * 0.08,
  },
});

export default styles;
