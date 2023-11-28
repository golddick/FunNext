import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading';
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.NewContainer}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>New Product</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
        <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

