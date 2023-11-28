import {  Text,Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productcard.style'
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
   <TouchableOpacity onPress={()=> navigation.navigate('ProductDetail',  {item})}>
     <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image
        source= {{uri:item.imageUrl}}
        style={styles.image}
        /> 
      </View>
      <View style={styles.details}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title} >{item.title}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.supplier} >{item.supplier}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.price} >N{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
      <MaterialIcons name="add-circle" size={35} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
   </TouchableOpacity>
  ) 
}

export default ProductCard

