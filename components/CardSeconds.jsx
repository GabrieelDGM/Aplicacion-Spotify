import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardSeconds = ({ title, subtitle, author, imageUno, imageDos, imageTres, textDos, textTres, textFour }) => {
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
          <Text style={styles.textTres} numberOfLines={2}>{textTres}</Text>


        </View>
      )}

      {imageTres && (
        <View style={styles.card}>
          <Image source={imageTres} style={styles.imageTres} />
          <Text style={styles.textFour} numberOfLines={1}>{textFour}</Text>


        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 cardRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  card: {
    width: 160,
    marginRight: 10,
    marginBottom: 20,
  },
  image: {
    width: '95%',
    height: 150,
    borderRadius: 8,
    position :'relative',
    top :- 65
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 5,
    position :'relative',
    top :- 65

  },
  author: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
    position :'relative',
    top :- 65
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 2,
    fontWeight: '700',
    position :'relative',
    top :- 290
  },
  imageDos: {
    width: '90%',
    height: 150,
    borderRadius: 8,
    position :'relative',
    top :- 79
  },
  textDos: {
    color: '#767676',
    fontSize: 14,
    marginTop: 5,
    position :'relative',
    top :- 77
  },
  textTres: {
    color: '#767676',
    fontSize: 13,
    marginTop: 2,
    position :'relative',
    top :- 78
  },
  imageTres: {
    width: '95%',
    height: 150,
    borderRadius: 8,
    position :'relative',
    top :- 87,
    left: - 10
  },
  textFour: {
    fontSize: 16,
    color: '#767676',
    marginTop: 5,
    position :'relative',
    top :- 85,
    left: - 10
  },
});
export default CardSeconds;
