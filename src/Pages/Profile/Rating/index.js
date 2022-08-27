import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Rating/styles';
import {Context} from '../../../context';
import {getRatedMovie, getRatedSeries} from '../../../service/api';
import FavoriteMovies from '../../../Components/FavoriteMovies';
import Load from '../../../Components/Load';

const Rating = ({navigation, route}) => {
  const {id, user} = useContext(Context);
  const [rated, setRated] = useState();

  useEffect(() => {
    if (route.params?.movieFocused) {
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
  }, [id, route.params?.movieFocused, user.id]);

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
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" size={25} color="black" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
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
                {route.params?.movieFocused
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
          <FavoriteMovies
            poster_path={item.poster_path}
            rated={true}
            rating={`${item.rating?.toFixed(1)}/10`}
            movieFocused={route.params?.movieFocused}
            item={item.id}
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Rating;
