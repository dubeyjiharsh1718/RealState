import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const propertyData = [
  { id: '1', name: 'Simran Aim', price: '$200,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503' , image: require('./Images/All+White+Modern+Florida+House+Tour+3.jpg') },
   { id: '2', name: 'Shivam Apt', price: '$300,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('./Images/edc100121fernandez-005-1631202315.jpg') },
   { id: '3', name: 'Harsh APT', price: '$400,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('./Images/new-1572747_640.jpg') },
 
];
function PropertyListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <View style={styles.container}>
    {/* <Text style={styles.header}>Property Listings</Text> */}
    <View style={styles.searchContainer}>
        <FontAwesome5 name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search properties..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
    <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('PropertyDetails', { property: item })}
        >
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.propertyImage} />
          </View>
          <Text style={styles.propertyName}>{item.name}</Text>
          <View style={styles.locationContainer}>
              <FontAwesome5 name="map-marker-alt" style={styles.locationIcon} />
              <Text style={styles.propertyLocation}>{item.location}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.propertyPrice}>{item.price}</Text>
              <FontAwesome5 name="bookmark" style={styles.savetocart} />
            </View>
        </TouchableOpacity>
      )}
    />
  </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    // alignItems: 'center', // Center items horizontally
  },
  imageContainer: {
    marginBottom: 12,
  },
  propertyImage: {
    width: 350, 
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 20,
    color: 'green',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  savetocart: {
    fontSize: 20,
    color: 'blue', 
  },
  propertyValue: {
    flex: 3,
    fontSize: 16, 
  },
  locationContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 5,
    color: 'blue',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue', 
    padding: 5,
    marginBottom: 16,
    borderRadius: 8,
  },
  
  searchIcon: {
    fontSize: 18,
    marginRight: 5,
    paddingLeft: 5,
    color: 'blue', 
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 30, // Add padding to accommodate the icon
  },

});


export default PropertyListScreen;
