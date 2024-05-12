import {

  SafeAreaView,
 View,
 Text
} from 'react-native';
import React, { useState } from 'react';

import styles from './styles';
import { DetailBottom, DetailImage, HeaderProduct, Lines, TextInput,Circles, DinamicButtons, ProductItem } from '../../components';
import { Favorite, heartIcon } from '../../assets/icons';
import Button from '../../components/button/Button';
import ModalComp from '../../components/modal/Modal';
const Details = (props) => {

  const {route} = props;
  const {item} = route.params
const [isFaved,setIsFaved] = useState(false)
const [count,setCount] = useState(0)
const [modalVisible,setModalVisible] = useState(false)

const handleOnFavPress = () => {

  setIsFaved(!isFaved)
  console.log("isFaved",isFaved)
}
const handleIncrease = () => {
  console.log('it is worked')
   setCount(prev => prev + 1)
}
const handleDecrease = () => {
  setCount(prev => prev - 1)
}

const handleModal = () => {
  setModalVisible(!modalVisible) ;
}
  return (
    <SafeAreaView style={styles.container}>
       <TextInput />
      <DetailImage dinamicImage ={item} />
       <Lines />
       <DetailBottom item={item} icon = {isFaved ? heartIcon: Favorite} onFavPress = {handleOnFavPress} />
        <Circles />
        <View style={styles.footer}> 
           <DinamicButtons onDecrease = {handleDecrease} onIncrease = {handleIncrease} count={count} />
           <Button 
            onPressFunc={handleModal}
           title={'Add To Cart'} bgColor={'white'}  textSize={16} textColor={'black'} radious={10}/>
        </View>
        <ModalComp 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        >
   
         <ProductItem  item = {item }/>
        </ModalComp>
    </SafeAreaView>
  );
};

export default Details;