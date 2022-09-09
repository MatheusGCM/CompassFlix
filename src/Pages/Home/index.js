import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {getAccount, getMovies, getSeries} from '../../service/api';
import {Context} from '../../context';
import Loading from '../../Components/Loading';
import Load from '../../Components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonAvatar from '../../Components/ButtonAvatar';
import Greeting from '../../Components/Greeting';
import Midia from '../../Components/Midia';

const Home = ({route, navigation}) => {
  const {id, user, setUser} = useContext(Context);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);
  const [dataSeries, setDataSeries] = useState([]);

  const getResponse = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    if (route.name === 'HomeMovie') {
      const response = await getMovies(page);
      setDataMovies([...dataMovies, ...response.data.results]);
    } else {
      const response = await getSeries(page);
      setDataSeries([...dataSeries, ...response.data.results]);
    }
    setPage(page + 1);
    setLoading(false);
  };
  useEffect(() => {
    const getResponseAccount = async () => {
      const storedUser = await AsyncStorage.getItem('SessionId');
      const response = await getAccount(id ? id : storedUser);
      setUser(response.data);
    };
    getResponseAccount();
  }, [id, setUser]);

  useEffect(() => {
    getResponse();
  }, []);

  return user && dataMovies ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonAvatar user={user} navigation={navigation} />
        <Greeting screen={route.name} user={user} />
      </View>

      <FlatList
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        data={route.name === 'HomeMovie' ? dataMovies : dataSeries}
        keyExtractor={item => String(item.id)}
        onEndReached={getResponse}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({item}) =>
          route.name === 'HomeMovie' ? (
            <Midia
              {...item}
              navigation={navigation}
              rating={item.vote_average}
              rated={true}
              stack="MoviePage"
            />
          ) : (
            <Midia
              {...item}
              navigation={navigation}
              rating={item.vote_average}
              rated={true}
              stack="SeriePage"
            />
          )
        }
      />
    </View>
  ) : (
    <Load />
  );
};

export default Home;
