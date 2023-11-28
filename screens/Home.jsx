import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import styles   from './home.style'
import { HomeWelcome } from '../component'
import PictureCarousel from '../component/home/PictureCarousel'
import Headings from '../component/home/Headings'
import ProductRow from '../component/product/Productrow/Productrow'






export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>

        <View style={styles.appBarContainer}>
          <View style={styles.appBar}>
          <TouchableOpacity>
          <Ionicons name='location-outline' size={24}/>
          </TouchableOpacity>
          <Text style={styles.location}>Abuja</Text>
          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.countNum}>6</Text>
            </View>
            <TouchableOpacity>
            <Ionicons name="cart-outline" size={24}  />
            </TouchableOpacity>
          </View>
          </View>
         
        </View>

        <ScrollView>
          <HomeWelcome/>
          <PictureCarousel/>
          <Headings/>
        <ProductRow/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

