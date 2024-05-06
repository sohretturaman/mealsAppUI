import { View, Text ,Button} from "react-native";
import React from "react";

const Details = (props) => {
    const {navigation} = props
    const handleNavigation = ()=>{
        navigation.navigate('Customers')
    }
  return (
    <View>
      <Text>Details</Text>
      <Button 
       title={'Button'}
       onPress={handleNavigation}
      />
    </View>
  );
};

export default Details;
