🧩 Ejemplo de componente propio

A continuación, se muestra un ejemplo simplificado del componente Card utilizado para mostrar canciones o playlists dentro de la app.

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title, text, imageSource }) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  info: { justifyContent: 'center' },
  title: { color: '#fff', fontWeight: 'bold' },
  subtitle: { color: '#b3b3b3' },
});

![Codigo mejor vision](./imagenes/Captura%20de%20pantalla%202025-10-16%20205611.png)
  