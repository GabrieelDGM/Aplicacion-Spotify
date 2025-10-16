import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Navegation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 name="home" size={24} color="#fff" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 name="search" size={24} color="#fff" />
        <Text style={styles.iconText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 name="book" size={24} color="#fff" />
        <Text style={styles.iconText}>Your Library</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 name="spotify" size={24} color="#fff" />
        <Text style={styles.iconText}>Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome5 name="plus" size={24} color="#fff" />
        <Text style={styles.iconText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(2, 2, 2)',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 85,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  iconButton: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4, 
  },
});

export default Navegation;
