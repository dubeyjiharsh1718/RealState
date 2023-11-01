import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Homepage from './Homepage';
import PropertyListScreen from './PropertyListScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const profile = 'Profile';
const homepage = 'Homepage';
const propertylist = "PropertyListScreen";
const Tab = createBottomTabNavigator();

const Home = () => {
  return (

    <Tab.Navigator>
       <Tab.Screen
        name={homepage}
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> 
          ),
        }}
      />
      <Tab.Screen
        name={propertylist}
        component={PropertyListScreen}
        options={{
          tabBarLabel: 'Property List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="building" color={color} size={size} /> 
          ),
        }}
      />
      <Tab.Screen
        name={profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
