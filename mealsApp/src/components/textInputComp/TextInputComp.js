import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { viewIcon, hideViewIcon } from '../../assets/icons';
const TextInputComp = props => {
  const {
    placeholder = 'placeholder',
    value = '',
    onChangeText = () => {},
    secureTextEntry = false,
    title = 'Email',
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholderTextColor={'gray'}
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {secureTextEntry&&
        <Image source={value ? hideViewIcon : viewIcon} style={styles.icon}/> }
        
      </View>
    </View>
  );
};

TextInputComp.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default TextInputComp;
