import React from 'react';
import { View,Button, StyleSheet,Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import PropertyListScreen from './PropertyListScreen';
import PropertyDetailsScreen from './PropertyDetailsScreen';
import Swiper from 'react-native-swiper';
import Home from './Home';
import { NativeBaseProvider } from 'native-base';
import Homepage from './Homepage';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const App = () =>{
 
  return (
    <NativeBaseProvider>
<NavigationContainer>
<Stack.Navigator initialRouteName="Registration">
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Registration" component={RegistrationScreen} />
{/* <Stack.Screen name="Property" component={Property} />  */}
<Stack.Screen name="PropertyListScreen" component={PropertyListScreen} /> 
<Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} /> 
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Homee' component={Homee} /> 
<Stack.Screen name='Homepage' component={Homepage} />
<Stack.Screen name='EditProfile' component={EditProfile} />
  </Stack.Navigator>

</NavigationContainer>
</NativeBaseProvider>
  )
};


const Homee = (props) => {
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
    <Button title='Go to Property Page' onPress={()=> props.navigation.navigate('Property')} />
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


export default App;
