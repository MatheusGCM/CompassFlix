import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Movies from '../../Components/Movies';
import styles from './style';
import {getAccount, getMovies} from '../../service/api';
import {Context} from '../../context';
import Loading from '../../Components/Loading';
import Load from '../../Components/Load';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const {id, user, setUser} = useContext(Context);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);
  const getResponseMovies = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await getMovies(page);
    setDataMovies([...dataMovies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(id);
      setUser(response.data);
    };
    getResponseAccount();
  }, [id, setUser]);

  useEffect(() => {
    getResponseMovies();
  }, []);

  return user && dataMovies ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_avatar}>
          {user.avatar?.tmdb.avatar_path ? (
            <Image
              source={{
                uri: `http://image.tmdb.org/t/p/original/${user.avatar?.tmdb.avatar_path}`,
              }}
              style={{width: 44, height: 44, borderRadius: 100}}
            />
          ) : (
            <View>
              <Icon
                name="person-circle"
                color="rgba(255,255,255,0.4)"
                size={44}
              />
            </View>
          )}
        </View>
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
        contentContainerStyle={styles.contentContainerStyle}
        data={dataMovies}
        keyExtractor={item => String(item.id)}
        onEndReached={getResponseMovies}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({item}) => (
          <Movies
            text={`${item.vote_average}/10`}
            poster_path={item.poster_path}
            id={item.id}
            stack="MoviePage"
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Home;
