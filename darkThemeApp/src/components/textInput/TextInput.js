import { View, Text ,TextInput,Image} from "react-native";
import React from "react";
import styles from "./styles";
import { signIn } from "../../assets/icons";

const TextInputComp = () => {
  return (
    <View style={styles.container}>
        <View style={styles.buttonWrapper}>
        <Text style={styles.text}> The Duabi Mall </Text>
        </View>
        <View style={styles.inputWrapper}>
              <TextInput 
              placeholder="Enter Your Email"
              style={styles.textInput}
              placeholderTextColor={'white'}
              />
        </View>
        
        <View>
             <Image source={signIn}  
              tintColor={'white'}
             style={styles.icon}/>
        </View>
     
    </View>
  );
};

export default TextInputComp;
