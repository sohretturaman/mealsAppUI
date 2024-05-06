import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BottomTab, Header, PersonItem, SettingsItem} from '../../components';
import {settingsIcon, signIn, heartIcon, chatIcon} from '../../assets/icons';
import Box from '../../components/box/Box';
import styles from './styles';
import ModalComp from '../../components/modal/Modal';
import {pImage} from '../../assets/images';
import Modalcontent from '../../components/modalContent/Modalcontent';
const SettingsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOnPress = () => {
    setModalVisible(!modalVisible);
  };
  const handleNavigation = () => {
    navigation.navigate('Customers');
  }
  return (
    <View style={styles.container}>
      <Header title={'Settings'} />
      <PersonItem
        pImage={pImage}
        Icon={chatIcon}
        name={'Mr. Jhon Eric'}
        title={'Person Name'}
      />
      <View style={styles.innerContainer}>
        <SettingsItem
          contnet="Settings"
          icon={settingsIcon}
          rightIcon={signIn}
          onPressFunction={handleNavigation}
        />
        <SettingsItem
          contnet="Change password"
          icon={settingsIcon}
          rightIcon={signIn}
          onPressFunction={handleOnPress}
        />
        <SettingsItem
          contnet="Settings"
          icon={settingsIcon}
          rightIcon={signIn}
        />
        <SettingsItem
          contnet="Change password"
          icon={settingsIcon}
          rightIcon={heartIcon}
        />
      </View>

      <Box />
      <BottomTab />

      <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <Modalcontent />
      </ModalComp>
    </View>
  );
};

export default SettingsScreen;
