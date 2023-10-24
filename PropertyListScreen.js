import React, { useState } from 'react';
import { View, Text,FlatList,Button, TouchableOpacity,Image, StyleSheet } from 'react-native';

const propertyData = [
  { id: '1', name: 'Property 1', price: '$200,000',description: 'description',location: 'Ambarnath', image: require('./Images/All+White+Modern+Florida+House+Tour+3.jpg') },
   { id: '2', name: 'Property 2', price: '$300,000',description: 'description',location: 'Ullashnagar', image: require('./Images/edc100121fernandez-005-1631202315.jpg') },
   { id: '3', name: 'Property 2', price: '$400,000',description: 'description',location: 'Navi-Mumbai', image: require('./Images/new-1572747_640.jpg') },
 
];
function PropertyListScreen({ navigation }) {
  const [sortByPriceAscending, setSortByPriceAscending] = useState(true);
  
  const toggleSortOrder = () => {
    setSortByPriceAscending(!sortByPriceAscending);
  };

  const sortedPropertyData = [...propertyData].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', '$200,000').replace(',', '$500,000'));
    const priceB = parseFloat(b.price.replace('$', '$500,000').replace(',', '$200,000'));
    return sortByPriceAscending ? priceA - priceB : priceB - priceA;
  });


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Property Listings</Text>
      {/* <Button title={`Sort by Price ${sortByPriceAscending ? 'Ascending' : 'Descending'}`} onPress={toggleSortOrder} /> */}
      <FlatList
        data={propertyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('PropertyDetails', { property: item })}
          >
            <Image source={item.image} style={styles.propertyImage} />
            <Text style={styles.propertyName}>{item.name}</Text>
            <Text style={styles.propertyPrice}>{item.price}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  propertyImage: {
    width: '50%',
    height: 50,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  propertyName: {
    fontSize: 18,
  },
  propertyPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default PropertyListScreen;
