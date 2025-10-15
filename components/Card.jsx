import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Card = ({ title, subtitle, author, imageSource, body, text, textToday }) => {
  return (
    <View style={styles.card}>
      {imageSource && (
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.textToday}>{textToday}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>{body}</Text>
      </View>

      <FontAwesome6
        name="add"
        size={25}
        color="#9a9a9a"
        style={styles.icon}
      />
      <FontAwesome6
        name="play"
        size={25}
        color="#ffffff"
        style={{ position: 'relative', top: -185, right: -300 }}
      />
      <FontAwesome6
        name="ellipsis-vertical"
        size={24}
        color="#ffffff"
        style={{ position: 'absolute', top: 10, right: 10 }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
    width: '95%',
    height: 150,
    overflow: 'visible',
    position: 'relative',
    top: -40,
  },
  imageContainer: {},
  image: {
    width: 145,
    height: 150,
    borderRadius: 10,
    marginLeft: -10,
    marginTop: -10,
  },
  textContainer: {},
  text: {
    fontSize: 13,
    color: '#bbbbbb',
    position: 'relative',
    left: 145,
    top: -135,
  },
  textToday: {
    fontSize: 13,
    color: '#ffffff',
    position: 'relative',
    left: 143,
    top: -130,
    fontWeight: '900',
  },
  infoContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    left: -10,
    top: -220,
  },
  subtitle: {
    fontSize: 13,
    position: 'relative',
    left: 145,
    top: -145,
    color: '#bbbbbb',
  },
  author: {
    fontSize: 13,
    marginTop: 15,
    position: 'relative',
    left: 145,
    top: -150,
    color: '#bbbbbb',
  },
  bodyContainer: {},
  body: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  icon: {
    position: 'absolute',
    top: 120,
    right: 155,
  },
});
