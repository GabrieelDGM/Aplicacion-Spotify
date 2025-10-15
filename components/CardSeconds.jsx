import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardSeconds = ({ title, subtitle, author, imageUno, imageDos, imageTres, textDos, textTres }) => {
  return (
    <View style={styles.cardRow}>
      {imageUno && (
        <View style={styles.card}>
          <Image source={imageUno} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
        </View>
      )}

      {imageDos && (
        <View style={styles.card}>
          <Image source={imageDos} style={styles.imageDos} />
          <Text style={styles.textDos} numberOfLines={1}>{textDos}</Text>
          <Text style={styles.textTres} numberOfLines={1}>{textTres}</Text>

        </View>
      )}

      {imageTres && (
        <View style={styles.card}>
          <Image source={imageTres} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  card: {
    width: 160,
    marginRight: 160,
  },
  image: {
    width: '85%',
    height: 150,
    borderRadius: 7,
    position: 'relative',
    top: -50

  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5,
    position: 'relative',
    top: -55
  },
  author: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
    position: 'relative',
    top: -55
  },

  subtitle: {
    color: '#ffffffff',
    fontSize: 20,
    marginTop: 2,
    position: 'relative',
    top: -280,
    fontWeight: '700'
  },
  imageDos: {
    width: '85%',
    height: 150,
    borderRadius: 8,
    position: 'relative',
    top: -62,
    left : -170
  },
  textDos :{
    color: '#767676',
    fontSize: 12,
    marginTop: 8,
    position: 'relative',
    top: -70,
    left: -170

  },
  textTres :{
  color: '#767676',
    fontSize: 12,
    position: 'relative',
    top: -70,
    left: -170
  }



});

export default CardSeconds;
