import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './newRivals.style'
import { Ionicons,} from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { ProductList } from '../../component';

const Newrivals = ({navigation}) => {
  return (
    <SafeAreaView  style={styles.container}>
    <View style={styles.wrapper}>
     <View style={styles.upperRow}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-sharp" size={30} color={COLORS.lightWhite}/>
        </TouchableOpacity>

        <Text style={styles.headingText}>
            Products
        </Text>
     </View>
     <ProductList/>
    </View>
    </SafeAreaView>
  )
}

export default Newrivals

