import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Card} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
      title="Prueba"
      imageSource = './assets/image1.png'
      body ="Esto es una prueba"
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
