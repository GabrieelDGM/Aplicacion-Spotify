import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, subtitle, author, imageSource, body, text, textToday }) => {
  return (
    <View style={styles.card}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.textToday}>{textToday}</Text>
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
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 10,
    marginVertical:20,
    display:'flex',
    height: 275,
    width: '95%',
    height: '30%',
  
  },
  image: {
    width: 185,
    height: 200,
    borderRadius: 10,
    marginLeft: -10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    left:-10,
    top: -290,
  },
  subtitle: {
    position: 'relative',
    left: 200,
    top: -180,
    color: '#bbbbbb',
  },
  author: {
    fontSize: 17,
    marginTop: 15,
    position: 'relative',
    left: 210,
    top: -180,
    color: '#bbbbbb',
  },
  body: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    fontSize: 15,
    color: '#bbbbbb',
    position: 'relative',
    left: 185,
    top: -185,
  },
  textToday: {
    fontSize: 15,
    color: '#ffffff',
    position: 'relative',
    left: 183,
    top: -180,
    fontWeight: 900
  },
});
