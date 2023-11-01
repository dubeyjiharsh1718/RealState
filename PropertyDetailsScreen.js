import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'native-base';

function PropertyDetailsScreen({ route }) {
  const { property } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Property Details</Text>
      <Image source={property.image} style={styles.propertyImage} />
      <View style={styles.propertyInfo}>
        <View style={styles.propertyRow}>
          <Text style={styles.propertyName}>{property.name}</Text>
        </View>
        <View style={styles.propertyRow}>
          <FontAwesome5 name="map-marker-alt" style={styles.locationIcon} />
          <Text style={styles.propertyValue}>{property.location}</Text>
        </View>
        <View style={styles.propertyRow}>
          <Text style={styles.propertyPrice}>{property.price}</Text>
        </View>
        <View>
          <Text style={styles.propertyDescrtion}>Description:</Text>
          <Text style={styles.propertydescription}>{property.description}</Text>
        </View>
        <View style={styles.agentdetails}>
          <Text style={styles.agentname}>Agent</Text>
          <View style={styles.agentDetails}>
            <Avatar
              bg="green.500"
              source={{
                uri:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            >
              AJ
            </Avatar>
           
              <Text style={styles.agentName}>Name</Text>
              <View style={styles.agentContact}>
              <View style={styles.agentIcons}>
                <FontAwesome5 name="phone-alt" style={styles.contactIcon} />
                <FontAwesome5 name="envelope" style={styles.contactIcon} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.propertyRow}>
          <TouchableOpacity style={styles.booknowBtn}>
            <Text style={styles.booknowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  propertyImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius : 5,
    // elevation: 2,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
  },
  propertyInfo: {
    marginTop: 10,
  },
  propertyRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  propertyLabel: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  propertyValue: {
    flex: 3,
    fontSize: 16,
  },
  propertyPrice : {
    fontSize: 16,
    color : "red",
  },
  propertyName: {
    flex: 3,
    fontSize: 20,
    color: 'black',
  },
  propertyDescrtion: {
    fontSize: 20,
    color: 'black',
  },
  propertydescription: {
    alignItems: 'center',
    marginBottom: 5,
  },
  booknowBtn: {
    width: '100%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#1E90FF',
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
  agentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  agentdetails: {
    marginTop: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  agentname: {
    marginBottom: 4,
    fontSize: 20,
    color: 'black',
  },
  agentName: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  agentContact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto', 
  },
  agentIcons: {
    flexDirection: 'row',
  },
  contactIcon: {
    fontSize: 22,
    color: 'blue',
    marginLeft: 20, 
  },
});

export default PropertyDetailsScreen;
