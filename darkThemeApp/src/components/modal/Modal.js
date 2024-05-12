import {Modal, StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';


import PropTypes from 'prop-types';
import styles from './style';
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
           {children}
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
