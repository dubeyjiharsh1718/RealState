import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function PropertyDetailsScreen({ route }) {
  const { property } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Details</Text>
      <Image source={property.image} style={styles.propertyImage} />
      <Text style={styles.propertyName}>Name: {property.name}</Text>
      <Text style={styles.propertyPrice}>Price: {property.price}</Text>
      <Text style={styles.propertyDescription}>Description: {property.description}</Text>
      <Text style={styles.propertyLocation}>Location: {property.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  propertyName: {
    fontSize: 18,
    marginTop: 10,
  },
  propertyPrice: {
    fontSize: 18,
    marginTop: 10,
  },
  propertyDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  propertyLocation: {
    fontSize: 16,
    marginTop: 10,
  },
  propertyImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
});

export default PropertyDetailsScreen;
