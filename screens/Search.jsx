import { Text,TextInput, View ,SafeAreaView, TouchableOpacity, FlatList, Image} from 'react-native'
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import styles from './search.style';
import axios from 'axios';
import SearchTile from '../component/searchTile/SearchTile';

const Search = () => {

  const [searchKey, setSearchKey] = useState(''); 
  const [searchResult, setSearchResult] = useState(''); 
//const Url = "localhost:3001/api/allProduct/search/${searchKey}"

  const handleSearch = async() =>{

    try {
      const response = await axios.get(`http://localhost:3001/api/allProduct/search/${searchKey}`)
      // console.log('====================================');
      // console.log(response.data);
      // console.log('====================================');
      setSearchResult(response.data)
    } catch (error) {
      console.log('Failed to get product',error);
    }
  }

  return (
    <SafeAreaView>
      
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <Ionicons  name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
        <TextInput
        value={searchKey} 
        onChangeText={setSearchKey} 
        style={styles.searchInput}
        placeholder="what do you need"
      />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
          <Ionicons name="search-outline"bg size={SIZES.xLarge} style={{ color: COLORS.lightWhite }} />
        </TouchableOpacity>
      </View>

    {
      searchResult.length === 0? (
        <View style={{flex:1}}>
          <Image
          source={require('../assets/images/Pose23.png')}
          style = {styles.searchImg}
          />
        </View>
      ):(
        <FlatList
        data={searchResult}
        keyExtractor={(item)=> item._id}
        renderItem= {({item})=> (<SearchTile item ={item}/>) }
        style={{marginHorizontal:12}}
        />
      )
    }

    </SafeAreaView>
  )
}

export default Search

