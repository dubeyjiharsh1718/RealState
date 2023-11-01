
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

const LoginScreen = ({ navigation }) => {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedEmail = await AsyncStorage.getItem('useremail');
    const storedPassword = await AsyncStorage.getItem('password');

    if (useremail === storedEmail && password === storedPassword) {
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/new-1572747_640.jpg")} /> 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Email"
          value={useremail}
          onChangeText={setEmail}
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
        /> 
        
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('Registration')}>Dont have an account ? Signup</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop : -50,
    marginBottom: 40,
    height: 70,
    width: "20%",
    borderRadius: 10,
  },
  inputView: {
  backgroundColor: "#fff",
  borderRadius: 10,
  borderWidth: 1,         
  borderColor: "black",  
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
