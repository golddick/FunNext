import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxT(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
        <Text style={styles.welcomeTxT(COLORS.primary, 0)}>Luxurious Chair</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=''
            onPressIn={() => navigation.navigate('Search')}
            style={styles.searchInput}
            placeholder="what do you need"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={{ color: COLORS.lightWhite }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
