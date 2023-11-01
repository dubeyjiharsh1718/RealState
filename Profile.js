import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView, 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Button } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Profile = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [useremail, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      const storedEmail = await AsyncStorage.getItem("useremail");
      const storedMobileNumber = await AsyncStorage.getItem("mobileNumber");

      setUsername(storedUsername);
      setEmail(storedEmail);
      setMobileNumber(storedMobileNumber);
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("useremail");
    await AsyncStorage.removeItem("mobileNumber");
    navigation.navigate("Login");
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    // Save the edited username, email, and mobile number to AsyncStorage
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("useremail", useremail);
    await AsyncStorage.setItem("mobileNumber", mobileNumber);
    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar
        size="2xl"
        source={{
          uri:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
        style={{ marginTop: 20 }}
      />
      <Text style={styles.username}>{username}</Text>
      {isEditing ? (
        <View style={styles.editProfileContainer}>
          <TextInput
            style={styles.editInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <TextInput
            style={styles.editInput}
            value={useremail}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={styles.editInput}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Mobile Number"
          />
          <Button onPress={handleSaveProfile}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Button>
        </View>
      ) : (
        <View style={styles.usereditContainer}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          <FontAwesome5 name="edit" style={styles.contactIcon} onPress={handleEditProfile} />
        </View>
      )}
      <View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>Username: {username}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>Email: {useremail}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>Mobile Number: {mobileNumber}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 0,
  },
  profileText: {
    fontSize: 24,
    marginBottom: 20,
  },
  usereditContainer : {
    flexDirection: "row",
    alignItems: "center", 
  
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1, 
      height: 1, 
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 3,
  },
  
  
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userInfoLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 18,
    width: 300,
    color: "black",
  },
  username: {
    fontSize: 18,
    color: "black",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
  },
  editProfileText: {
    color: "black",
    fontSize: 16,
    marginLeft: "auto", // Move the edit icon to the right
  },
  editProfileContainer: {
    marginTop: 20,
  },
  editInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "white",
  },
  contactIcon: {
    fontSize: 18,
    color: "blue",
    marginLeft: 10, // Move the edit icon to the right
  },
});
