import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardSeconds = ({ title, author, imageUno, imageDos, imageTres }) => {
  return (
    <View style={styles.cardRow}>
      {imageUno && (
        <View style={styles.card}>
          <Image source={imageUno} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      )}

      {imageDos && (
        <View style={styles.card}>
          <Image source={imageDos} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      )}

      {imageTres && (
        <View style={styles.card}>
          <Image source={imageTres} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
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
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 5,
  },
  author: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
});

export default CardSeconds;
