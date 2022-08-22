import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Series from '../../Components/Series';
import styles from './style';
import {getAccount, getSeries} from '../../service/api';
import {Context} from '../../context';
import Loading from '../../Components/Loading';
import Load from '../../Components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeSerie = () => {
  const {id} = useContext(Context);

  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState();

  const [loading, setLoading] = useState(false);
  const [dataSeries, setDataSeries] = useState([]);
  const getResponseSeries = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await getSeries(page);
    setDataSeries([...dataSeries, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };
  useEffect(() => {
    const getResponseAccount = async () => {
      const storedUser = await AsyncStorage.getItem('sessionIdUser');
      const response = await getAccount(id ? id : storedUser);
      setUserData(response.data);
    };
    getResponseAccount();
  }, [id]);

  useEffect(() => {
    getResponseSeries();
  }, []);

  return userData && dataSeries ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.header_title}>Olá,</Text>
          <Text style={styles.header_label}>{userData.name}</Text>
          <Text style={styles.header_text}>!</Text>
        </View>
        <Text style={styles.header_description}>
          Reveja ou acompanhe as séries que você assistiu...
        </Text>
      </View>
      <View style={styles.container_header}>
        <Text style={styles.title}>Séries populares este mês</Text>
      </View>
      <FlatList
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        data={dataSeries}
        keyExtractor={item => String(item.id)}
        onEndReached={getResponseSeries}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({item}) => (
          <Series
            text={`${item.vote_average}/10`}
            poster_path={item.poster_path}
            id={item.id}
            stack="SeriePage"
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default HomeSerie;
