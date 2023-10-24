import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('password', password);
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Registration</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
      <Button title='Go to Login Page' onPress={() => navigation.navigate('Login')} />
  
    </View>
  );
};

export default RegistrationScreen;
