import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';
import CardSeconds from './components/CardSeconds';
import CardTree from './components/CardTree';
import Navegation from './components/Navegation';

export default function App() {
  const objetos = [
    {
      id: 1,
      title: "Picked for you",
      text: "Playlist",
      textToday: "Today's Top Hits",
      subtitle: "Chihiro",
      author: "Billie Eilish",
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
      textDos: "Shakira, Danny Ocean,",
      textTres: "Sebastian Yatra, TINI, Bo...",
      imageDos: require('./assets/image4.png'),
    },
    {
      id: 4,
      textFour: "Mora",
      imageTres: require('./assets/image2.png'),
    },
  ];

  const objetosTercero = [
    {
      id: 5,
      title: "Álbumes",
      text: "Apan y Can",
      textUno: "Canserbero, Apache",
      image: require('./assets/image6.png'),
      textFour: "DeBÍ TiRAR MáS FOtos",
      textDos: "Bad Bunny",
      imageDos: require('./assets/image3.png'),
      textTree: "Show all",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <ScrollView style={styles.container}>
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
              imageTres={item.imageTres}
              subtitle={item.subtitle}
              textDos={item.textDos}
              textTres={item.textTres}
              textFour={item.textFour}
            />
          ))}
        </View>

        <View style={styles.treeCard}>
          {objetosTercero.map((item) => (
            <CardTree
              key={item.id}
              title={item.title}
              text={item.text}
              textUno={item.textUno}
              image={item.image}
              textFour={item.textFour}
              textDos={item.textDos}
              imageDos={item.imageDos}
              textTree={item.textTree}
            />
          ))}
        </View>

        <StatusBar style="auto" />
      </ScrollView>

      <Navegation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '97%',
    marginTop: 20,
  },
  treeCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
