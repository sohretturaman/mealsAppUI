import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {BottomTab, ProdcutsList, TopHeaders} from '../../components';
import styles from './styles';
import {DummyData} from '../../assets/contants';

const Home = () => {
  const [loginOption, setLoginOption] = useState('Meals');

  return (
    <View style={styles.container}>
      <TopHeaders loginOption={loginOption} setLoginOption={setLoginOption} />
      <ScrollView style={styles.scrollView}>
        <ProdcutsList data={DummyData} />
      </ScrollView>

      <BottomTab />
    </View>
  );
};

export default Home;
