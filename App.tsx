import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';
import { Icon } from '@rneui/themed';

export default function App() {
  
  const objetos = [
    {
      id: 1,
      text: 'Playlist',
      title : 'Today s Top Hits',
      subtitle: 'The hottest 50. Cover',
      author: 'Taylor Swift',
      imageSource: require('./assets/image1.png'), 
      
    },
    
  
  ];

  return (
    <View style={styles.container}>
    <Header />
      {objetos.map((item) => (
        <Card
          key={item.id}
          text={item.text}
          title={item.title}
          subtitle={item.subtitle}
          author={item.author}
          imageSource={item.imageSource}
          body={item.body}
        />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
