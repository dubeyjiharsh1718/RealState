import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ApiCall from './ApiCall';
import Icon from 'react-native-vector-icons/Ionicons';
// import About from './src/screens/About';
import Profile from './Profile';
import PropertyListScreen from './PropertyListScreen';



// const about = 'About';
const profile = 'Profile';
const propertylist = "PropertyListScreen";
const Tab = createBottomTabNavigator();

const Property = () => {
  return (
    
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
      
          if (route.name === profile) {
            iconName = focused ? 'home' : 'home-outline';
          } 
        //   else if (route.name === apiCall) {
        //     iconName = focused ? 'person' : 'person-outline';
        //   } 
          // else if (route.name === about) {
          //   iconName = focused ? 'laptop' : 'laptop-outline';
          // } 
          else if (route.name === propertylist) {
            iconName = focused ? 'laptop' : 'laptop-outline';
          } 
      
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      

      >
        {/* <Tab.Screen name={about} component={About} /> */}
        <Tab.Screen name={propertylist} component={PropertyListScreen}  />
        
        {/* <Tab.Screen name={apiCall} component={ApiCall}  /> */}
        <Tab.Screen name={profile} component={Profile}  />
      </Tab.Navigator>
      
    // </NavigationContainer>
  );
};

export default Property;
