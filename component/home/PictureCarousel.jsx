import React, { useEffect } from 'react';
import { StyleSheet, View,Text,Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../constants';
import { Asset } from 'expo';

const PictureCarousel = () => {
    useEffect(() => {
        loadImagesAsync();
    }, []);

    const loadImagesAsync = async () => {
        await Asset.loadAsync(Img);
    };

    const Img =[
        require('../../assets/images/fn5.jpg'), 
        require('../../assets/images/fn2.jpg'),
        require('../../assets/images/fn1.jpg'), 
        require('../../assets/images/fn3.jpg'),
    ]


  return (
    <View>
              <View style={styles.imgContainer}>
            <Swiper
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                style={styles.swiperContainer}
                loop
                autoplay
            >
                 {Img.map((image, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Image source={image} style={styles.image} />
                        </View>
                    ))}
            </Swiper>
        </View>
    </View>
  )
}

export default PictureCarousel

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height:200,
     
    },
    swiperContainer: {
        marginTop: 15,
        
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%', 
               
       
    },
    image: {
     width:'100%',
     height:'100%',
     objectFit:'contain'
       
    },
})