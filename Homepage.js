import React from 'react';
import {View,StyleSheet,Image} from 'react-native';

import Swiper from 'react-native-swiper';

const Homepage = () => {
    const images = [
        'https://i.pinimg.com/550x/9d/49/ff/9d49ff8e8407a6fd4e1100db16c1ff39.jpg',
        'https://cdn2.vectorstock.com/i/1000x1000/91/16/real-estate-banner-design-for-social-media-post-vector-35359116.jpg',
        'https://i.pinimg.com/736x/8b/b4/06/8bb406c4683e60e6b0df1ecd743a04b1.jpg',
       
      ];
      return (
        <View style={styles.container}>
        <Swiper showsButtons={true}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>  
        )
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
      
        width: '100%',
        height: 300,
      },
      text: {
        textAlign: 'center',
        fontSize: 20,
      },
    });
export default Homepage;