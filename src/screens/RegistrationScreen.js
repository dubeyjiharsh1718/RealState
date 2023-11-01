import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = async () => {
    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('useremail', useremail);
    await AsyncStorage.setItem('password', password);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/new-1572747_640.jpg")} /> 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          required={true}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Email"
          value={useremail}
          onChangeText={setEmail}
          required={true}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          required={true}
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          required={true}
        /> 
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleRegistration}>
        <Text style={styles.loginText}>Registration</Text> 
      </TouchableOpacity> 

      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    height: 70,
    width: "20%",
    borderRadius: 10,
  },
  inputView: {
    backgroundColor: "#fff",
  borderRadius: 10,
  borderWidth: 1,            // Add this line for border width
  borderColor: "black",     // Add this line for border color
  width: "70%",
  height: 45,
  marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#1E90FF", 
  },
});
