import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
// import styles from './productcard.style'
import { SIZES, COLORS } from '../../../constants'
import ProductCard from '../productcardView/ProductCard'
import useFetch from '../../../hook/useFetch'


const ProductRow = () => {
  const {data, isLoading, error} = useFetch();
    const products =[1,2,3,4]

    // console.log('Data:', data);
    // console.log('isLoading:', isLoading);
    // console.log('Error:', error);
  
  return (
    <View style={{ marginTop: SIZES.medium }}>
    {isLoading ? (
      <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
    ) : error ? (
      <Text>Error: {error.message}</Text>

    ) : ( 
      <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => <ProductCard item ={item}/>}
      horizontal
      contentContainerStyle={{columnGap:SIZES.medium}}
      />
      
    )}
  </View>
  )
}

export default ProductRow

