import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, subtitle, author, imageSource, body,text }) => {
  return (
    <View style={styles.card}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2d2c2cff',
    borderRadius: 15,
    padding: 5,
    marginVertical: 20,
    alignItems: 'left',
    width: 350,
    height: 275,
    
  
  },
  image: {
    width: 200,
    height: 200,
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: '#666',
     position: 'relative',
    left: 200,
    top: -180,
    color: '#666',
  },
  author: {
    marginTop: 10,
    position: 'relative',
    left: 210,
    top: -180,
    color: '#666',
  },
  body: {
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color : '#666',
    position: 'relative',
    left: 210,
    top: -180,



  },

  
});

