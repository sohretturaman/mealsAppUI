import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

import styles from './styles';
import {Header, HorizontalList,ProductFooter} from '../../components';
import {eat} from '../../assets/images';
import {cart1} from '../../assets/icons';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import { DummyData } from '../../assets/contants';
const Details = () => {
  return (
    <SafeAreaView>
      <Header  title={'Details'} />
      <View style={styles.top}></View>
      <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
          <ProductFooter eat={DummyData[0].image} eat_name={'Jollof Rice'} price={'N1,000'} />
          <View style={styles.line}></View>
          <View>
            <View style={{padding: winWidth * 0.02}}>
              <Text style={styles.food_name}>Recommended sides</Text>
            </View>
            <View style={{paddingTop: winWidth * 0.02}}>
              <HorizontalList />
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      </ScrollView>
{/*       <Bottom3
        price={'Total: N2,000'}
        cart_icon={cart1}
        cart_text={'Add to cart'}
      /> */}
    </SafeAreaView>
  );
};

export default Details;