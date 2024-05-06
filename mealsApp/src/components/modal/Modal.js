import {Modal, StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';
import Button from '../button/Button';

import PropTypes from 'prop-types';
import styles from './style';
import TextInputComp from '../textInputComp/TextInputComp';

const ModalComp = props => {
  const {modalVisible, setModalVisible, children} = props;

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        {/**modal content starts here */}
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Change Password</Text>
          <View style={styles.textInputContainer}>
            <TextInputComp placeholder={'new Password'} />
            <TextInputComp placeholder={'confirm Password'} />
          </View>
          <Button title={'Submit'}  onPressFunc={()=>{setModalVisible(false)}}/>
        </View>
      </View>
    </Modal>
  );
};

ModalComp.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};


export default ModalComp;
