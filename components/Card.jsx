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
    borderRadius: 30,
    padding: 10,
    marginVertical:20,
    display: 'flex',
    height: 275,
    width: '95%'
    height: '10%'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginLeft: -10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    left: -75,
    top: -290,
  },
  subtitle: {
    position: 'relative',
    left: 200,
    top: -180,
    color: '#939393',
  },
  author: {
    marginTop: 10,
    position: 'relative',
    left: 210,
    top: -180,
    color: '#939393',
  },
  body: {
    marginTop: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#939393',
    position: 'relative',
    left: 210,
    top: -180,
  },
  textToday: {
    fontSize: 20,
    color: '#ffffff',
    position: 'relative',
    left: 210,
    top: -180,
  },
});
