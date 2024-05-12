import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

import { HorizontalItem } from '..';

const DATA = [
  {
    id: '1',
    title: 'Pizza',
    price: '30.40',
    image:
      'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/11/karisik-pizza-yeni.jpg',
  },
  {
    id: '2',
    title: 'Hamburger',
    price: '30.40',
    image:
      'https://cdn.yemek.com/mncrop/940/625/uploads/2022/05/hamburger-yemekcom.jpg',
  },
  {
    id: '3',
    title: 'Döner',
    price: '30.40',
    image: 'https://www.ustadonerci.com/media/products/durum-et-doner_b.png',
  },
  {
    id: '4',
    title: 'İskender',
    price: '30.40',
    image:
      'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg',
  },
  {
    id: '5',
    title: 'Lahmacun',
    price: '30.40',
    image:
      'https://recipesblob.droetker.com.tr/assets/34830b44669145c5a77e7db5a611b391/750x910/lahmacunla.jpg',
  },
  {
    id: '6',
    title: 'Kavurma',
    price: '30.40',
    image: 'https://i.nefisyemektarifleri.com/2022/10/04/sade-et-kavurma-2.jpg',
  },
];

const HorizontalList = () => {
  return (
    <FlatList
      data={DATA}
      horizontal={true}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <HorizontalItem
          photo={item.image}
          food_name={item.title}
          price={item.price}
        />
      )}
    />
  );
};

export default HorizontalList;