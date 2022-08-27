import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Series from '../../Components/Series';
import styles from './style';
import {getSeries} from '../../service/api';
import {Context} from '../../context';
import Loading from '../../Components/Loading';
import Load from '../../Components/Load';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeSerie = () => {
  const {user} = useContext(Context);

  const [page, setPage] = useState(1);

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
    getResponseSeries();
  }, []);

  return user && dataSeries ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_avatar}>
          {user.avatar?.tmdb.avatar_path ? (
            <Image
              source={{
                uri: `http://image.tmdb.org/t/p/w92/${user.avatar?.tmdb.avatar_path}`,
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
            text={`${item.vote_average.toFixed(1)}/10`}
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
