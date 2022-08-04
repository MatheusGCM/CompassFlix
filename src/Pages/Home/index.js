import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Movies from '../../Components/Movies';
import styles from './style';
import {getAccount, getMovies} from '../../service/api';
import {Context} from '../../context';

const Home = ({navigation, route}) => {
  const {id} = useContext(Context);

  const [user, setUser] = useState();
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(id);
      setUser(response.data);
    };
    getResponseAccount();
  }, [id]);

  useEffect(() => {
    const getResponseMovies = async () => {
      const response = await getMovies();
      setDataMovies(response.data.results);
    };
    getResponseMovies();
  }, [dataMovies]);

  return user && dataMovies ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.header_title}>Olá,</Text>
          <Text style={styles.header_label}>{user.name}</Text>
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
        data={dataMovies}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoviePage', {
                id: item.id,
              })
            }>
            <Movies
              text={`${item.vote_average}/10`}
              poster_path={item.poster_path}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : (
    <ActivityIndicator size={50} color="red" />
  );
};

export default Home;
