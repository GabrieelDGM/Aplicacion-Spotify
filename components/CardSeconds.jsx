import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CardSeconds = ({ title, subtitle, author, imageUno, imageDos, imageSource, body, textUno, textDos }) => {
  return (
    <View style={styles.card}>
      {imageUno && (
        <View style={styles.imageContainer}>
          <Image source={imageUno} style={styles.image} />
        </View>
      )}
      {imageDos && (
        <View style={styles.imageContainer}>
          <Image source={imageDos} style={styles.image} />
        </View>
      )}
      {imageSource && (
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
      )}
    </View>
  );
};

export default CardSeconds;
