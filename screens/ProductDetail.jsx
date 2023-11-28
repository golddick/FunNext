import { SafeAreaView, Text, TouchableOpacity,Image, View } from 'react-native'
import styles from './Product.style'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { Ionicons, EvilIcons ,MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetail = ({navigation}) => {

  const route = useRoute();
  const {item} =route.params;
  // console.log(item);

  const [count, setCount] = useState(1)
  const increase  = () => {
    setCount (count + 1)
  }
  const reduce  = () => {
    if(count > 1){
      setCount (count - 1)
    }
  }

  return (

     <View style={styles.productContainer}>
     <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-sharp" size={30} color={COLORS.lightpurple} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Ionicons name="md-heart-circle" size={30} color={COLORS.lightpurple} />
        </TouchableOpacity>
     </View>

      <Image
      source={{uri: item.imageUrl}}
      style={styles.image}
      />
     <View style={styles.details}>
      <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>N{item.price}</Text>
          </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1,2,3,4,5].map((index) =>(
            <Ionicons key={index}  
            name='star'
            size={24}
            color='gold'
            />
          ))}
          <Text style={styles.ratingText}>(4.5)</Text>
        </View>

        <View style={styles.rating}>
          <TouchableOpacity onPress={() => increase()}>
          <EvilIcons name="plus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.ratingText}>{count}</Text>
          <TouchableOpacity onPress={() => reduce()}>
          <EvilIcons name="minus" size={20} color="black" />
          </TouchableOpacity>
        </View>

      </View>


      <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}> {item.description}</Text>
      </View>


      <View style={{marginBottom:SIZES.small}}>
            <View  style={styles.location}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                <EvilIcons name="location" size={20} color="black" style={{ marginRight: 5 }}  />
                <Text>{item.product_location}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="truck-check-outline" size={20} color="black" style={{ marginRight: 5 }}  />
                <Text>Free Delivery</Text>
                </View>
            </View>
      </View>


    <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartText}>Buy Now</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.add2cart }>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
            </TouchableOpacity>
    </View>


     </View>
    </View>

  )
}

export default ProductDetail

