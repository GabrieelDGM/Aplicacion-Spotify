import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';
import CardSeconds from './components/CardSeconds';

export default function App() {
 
  const objetos = [
    {
      id: 1,
      title: "Picked for you",
      text: "Playlist",
      textToday: "Today's Top Hits",
      subtitle: "The hottest 50. Cover",
      author: "Taylor Swift",
      imageSource: require('./assets/image1.png'),
    },
  ];

 
  const objetosSecundarios = [
    {
      id: 2,
      title: "LA BRUJA, LA NIÑA Y E...",
      author: "Lola Indigo",
      subtitle: "Jump back in",
      imageUno: require('./assets/image5.png'),
    },
     {
      id: 3,
      textDos: "Shakira,Danny Ocean,",
      textTres :"Sebastian Yatra, TINI, Bo...",
      imageDos: require('./assets/image4.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      {objetos.map((item) => (
        <Card
          key={item.id}
          textToday={item.textToday}
          text={item.text}
          title={item.title}
          subtitle={item.subtitle}
          author={item.author}
          imageSource={item.imageSource}
          body={undefined}
        />
      ))}

      
      <View style={styles.rowContainer}>
        {objetosSecundarios.map((item) => (
          <CardSeconds
            key={item.id}
            title={item.title}
            author={item.author}
            imageUno={item.imageUno}
            imageDos={item.imageDos}
            imageTres={undefined}
            subtitle={item.subtitle}
            textDos={item.textDos}
            textTres={item.textTres}
          />
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: -20,
    
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginTop: 20,
  },
});
