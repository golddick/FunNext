import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import useFetch from '../../../hook/useFetch'
import { COLORS, SIZES } from '../../../constants';
import styles from './productList.style';
import ProductCard from '../productcardView/ProductCard';


const ProductList = () => {
    const {data, isLoading, error} = useFetch();


  if(isLoading){
    return (
        <View  style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
        </View>
      );
  }
  return (
    <View style={{alignItems:'center'}} >
 
        <FlatList 
        data={data}
        numColumns={2}
        renderItem={({item}) =>(<ProductCard item={item}/>)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={()=> <View style={styles.separator}/>}
        />
       
       
    </View>
  )
}

export default ProductList

