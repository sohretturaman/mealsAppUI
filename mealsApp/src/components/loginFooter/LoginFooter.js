import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {googleLogo} from '../../assets/icons';
import IconComp from './IconComp';
const LoginFooter = () => {
  return (
    <View style={styles.container}>
      <IconComp logo={googleLogo} />
      <IconComp logo={googleLogo} />
      <IconComp logo={googleLogo} />
    </View>
  );
};

export default LoginFooter;
