import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const Modalcontent = () => {
  return (
    <View
          style={styles.innerContainer }>
          <Text style={styles.text}>Change Password</Text>
          <View style={styles.textInputContainer}>
             <TextInputComp placeholder={'new Password'} />
             <TextInputComp placeholder={'confirm Password'} /> 
        </View>
        <Button title={'Submit'} />
        </View>
  );
};

export default Modalcontent;
