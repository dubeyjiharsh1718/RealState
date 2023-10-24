import React from 'react';
import { Text,View,Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import Property from './Property';
import PropertyListScreen from './PropertyListScreen';
import PropertyDetailsScreen from './PropertyDetailsScreen';

const Stack = createStackNavigator();

const App = () =>{
 
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Registration">
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Registration" component={RegistrationScreen} />
<Stack.Screen name="Property" component={Property} /> 
<Stack.Screen name="PropertyListScreen" component={PropertyListScreen} /> 
<Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} /> 
<Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>

</NavigationContainer>

  )
};


const Home = (props) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title='Go to Property Page' onPress={()=> props.navigation.navigate('Property')} />
      <Text style={styles.text}>Hello,Harsh React Native!</Text>
    </View>
  
    )
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  subText: {
    fontSize: 16,
    color: 'black',
  },
});


export default App;
