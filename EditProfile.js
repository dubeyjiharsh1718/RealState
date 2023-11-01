import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newUseremail, setNewUseremail] = useState('');

  const handleSave = async () => {
    // Save the updated data to AsyncStorage
    await AsyncStorage.setItem('username', newUsername);
    await AsyncStorage.setItem('useremail', newUseremail);

    // Navigate back to the profile screen
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.editProfileText}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="New Username"
        value={newUsername}
        onChangeText={(text) => setNewUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Email"
        value={newUseremail}
        onChangeText={(text) => setNewUseremail(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  editProfileText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    padding: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
});
