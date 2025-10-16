import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardTree = ({
  title,
  text,
  textUno,
  image,
  textFour,
  textDos,
  imageDos,
  textTree,
  imageUnoTop = 0,
  imageDosTop = 0,
}) => {
  return (
    <View style={styles.cardRow}>
      {image && (
        <View style={styles.card}>
          <Image source={image} style={[styles.image, { marginTop: imageUnoTop }]} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.textUno}>{text}</Text>
          <Text style={styles.textDos}>{textUno}</Text>
        </View>
      )}

      {imageDos && (
        <View style={styles.card}>
          <Image source={imageDos} style={[styles.image, { marginTop: imageDosTop }]} />
          <Text style={styles.textFour}>{textFour}</Text>
          <Text style={styles.textDosSecond}>{textDos}</Text>
          <Text style={styles.textTree}>{textTree}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    alignItems: 'center', marginHorizontal: 5, top: -120, left: -30
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffffff',
    top: -158,
    left: -28
  },
  textUno: {
    fontSize: 14,
    color: '#b9b9b9',
    left: -25,
    top: -20
  },
  textDos: {
    fontSize: 12,
    color: '#b9b9b9',
    left: -5,
    top: -20
  },
  textFour: {
    fontSize: 12,
    color: '#b9b9b9',
    left: -5,
  },
  textDosSecond: {
    fontSize: 14,
    color: '#b3b3b3',
    left: -30,
  },
  textTree: {
    fontSize: 12,
    color: '#b3b3b3',
    top: -190,
    left: 100
  },
});

export default CardTree;
