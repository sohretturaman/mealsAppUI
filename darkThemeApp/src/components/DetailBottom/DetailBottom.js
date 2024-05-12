import { View, Text,Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { heartIcon,Favorite } from "../../assets/icons";

const DetailBottom = (props) => {
  
    const {item, icon = heartIcon,onFavPress} = props
 
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
        <View style={styles.topTextsWrapper}>
              <Text style={styles.category}>{item.category} </Text>
              <Text style={styles.salesInfo}>Çok Satan</Text>

        </View>
        
        <TouchableOpacity onPress={onFavPress} style={styles.favIconWrapper}>
            <Image tintColor={'white'}  source={icon}  style={styles.icon}  />
        </TouchableOpacity>
      
        </View>
        <Text style={styles.title}>
             {item.title}
        </Text>
        <Text style={styles.price}>
             {item.price}
        </Text>

        <View style={styles.descWrapper}>
             <Text numberOfLines={3} style={styles.desc}>{item.description} </Text>
        </View>

        <View style={styles.sizeWrapper}>
             <Text style={styles.sizeTexts}>Size </Text>
             <Text style={styles.sizeTexts}>US</Text>
             <Text style={styles.sizeTexts}>EU</Text>
             <Text style={styles.sizeTexts}>UK</Text>
             <Text style={styles.sizeTexts}>CM</Text>
        </View>
   
    </View>
  );
};

export default DetailBottom;
