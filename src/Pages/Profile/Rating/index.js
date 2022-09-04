import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import {Context} from '../../../context';
import {getRatedMovie, getRatedSeries} from '../../../service/api';
import Load from '../../../Components/Load';
import Midia from '../../../Components/Midia';
import ButtonGoBack from '../../../Components/ButtonGoBack';

const Rating = ({navigation, route}) => {
  const {id, user} = useContext(Context);
  const [rated, setRated] = useState();

  useEffect(() => {
    if (route.params?.focused) {
      const getResponseRatedMovies = async () => {
        const response = await getRatedMovie(id, user.id);
        setRated(response.data.results);
      };
      getResponseRatedMovies();
    } else {
      const getResponseRatedSeries = async () => {
        const response = await getRatedSeries(id, user.id);
        setRated(response.data.results);
      };
      getResponseRatedSeries();
    }
  }, [id, route.params?.focused, user.id]);

  return rated ? (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
      }}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <ButtonGoBack navigation={navigation} />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                marginBottom: 43,
                alignSelf: 'center',
                width: 220,
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}>
                {route.params?.focused
                  ? 'Avaliações de filmes recentes de'
                  : 'Avaliações de séries recentes de'}
                <Text
                  style={{
                    color: '#E9A6A6',
                  }}>
                  {' '}
                  {user.name}
                </Text>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  !
                </Text>
              </Text>
            </View>
          </>
        )}
        data={rated}
        keyExtractor={item => String(item.id)}
        numColumns={4}
        renderItem={({item}) => (
          <Midia
            poster_path={item.poster_path}
            rated={true}
            rating={`${item.rating?.toFixed(1)}/10`}
            focused={route.params?.focused}
            navigation={navigation}
            id={item.id}
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Rating;
