import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  HeaderProduct,
  TextButton,
  TextInput,
  Lines,
  BottomTab,
  ProdcutsList,
} from '../../components';

import DummyDAta from '../../assets/DummyData';
import styles from './styles';
import DummyData from '../../assets/DummyData';

const lines = ['line1', 'line2', 'line3', 'line4', 'line5'];

//const headerImageList = DummyData.map((item) => item.image);

const Home = props => {
  const {navigation} = props;

  const [lineIndex, setLineIndex] = useState(0);
  const [lineNumber, setLineNumber] = useState(lines[lineIndex]);
  const [imageIndex, setImageIndex] = useState(0);
  const [headerImage, setHeaderImage] = useState(DummyDAta[imageIndex]);
  useEffect(() => {
    setTimeout(() => {
      const newLineIndex = (lineIndex + 1) % lines.length;
      const newImageIndex = (imageIndex + 1) % DummyDAta.length;
      setImageIndex(newImageIndex);
      setLineIndex(newLineIndex);
      setLineNumber(lines[newLineIndex]);
      setHeaderImage(DummyDAta[newImageIndex]);
    }, 3000);
  }, [lineIndex, lineNumber, imageIndex, headerImage]);
  return (
    <View style={styles.container}>
      <TextInput />
      <HeaderProduct dinamicImage={headerImage} />
      <Lines item={lineNumber} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>New Arrivals </Text>
        <TextButton
          text={'See All'}
          handlePress={() =>
            navigation.navigate(RouterNames.PRODUCTS, {Data: DummyData})
          }
        />
      </View>

      <ProdcutsList data={DummyDAta} horizontal={true} />

      <BottomTab />
    </View>
  );
};

export default Home;
