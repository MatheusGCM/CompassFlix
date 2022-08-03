import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import Movies from '../../Components/Movies';
import api from '../../service/api';
import styles from './style';


const Home = () => {

//const [PopularList, setPopularList] = useState([]);
const init = async () => {
  const response = await api.get('/movie/popular?api_key=7121760c6db06f81adb5eed49efc0446&language=pt-BR&page=1'
  );

  console.log(response.data.results) //Lista de filmes retornando no console
};

useEffect(() => {
  init();
}, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.header_title}>Olá,</Text>
          <Text style={styles.header_label}>John</Text>
          <Text style={styles.header_text}>!</Text>
        </View>
        <Text style={styles.header_description}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
      </View>
      <View style={styles.container_header}>
        <Text style={styles.title}>Filmes populares este mês</Text>
      </View>
      <FlatList
        numColumns={4}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={[1, 2, 3, 4]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Movies text="8.3/10" source={require('../../assets/image.png')} />
        )}
      />
    </View>
  );
};

export default Home;
