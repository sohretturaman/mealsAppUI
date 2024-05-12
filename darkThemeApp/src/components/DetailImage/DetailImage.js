import {View, Text, Image,ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../button/Button';



const DetailImage = (props) => {
  const {dinamicImage} = props;
 
  return (
    <View style={styles.container}>
      
      <Image source={{uri:dinamicImage.image}} style={styles.image} />
      <View style={styles.topWrapper}>
        <Text style={styles.title}>{dinamicImage.title}</Text>
        <View style={styles.dicount}>
          <Text style={styles.dicount_text}> %15</Text>
        </View>
      </View>

<View style={styles.bottomWrapper}>
<Text style={styles.price}> ${dinamicImage.price}</Text>
      <Button  bgColor={'black'} title={'Shop Now'}/>  
</View>
    </View>
  );
};

export default DetailImage; ;
