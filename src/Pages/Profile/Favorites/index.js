import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Rating/styles';
import {Context} from '../../../context';
import {getFavoriteMovie, getFavoriteSeries} from '../../../service/api';
import FavoriteMovies from '../../../Components/FavoriteMovies';
import Load from '../../../Components/Load';

const Favorites = ({navigation, route}) => {
  const {id, user} = useContext(Context);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    if (route.params?.movieFocused) {
      const getResponseFavoriteMovies = async () => {
        const response = await getFavoriteMovie(id, user.id);
        setFavorites(response.data.results);
      };
      getResponseFavoriteMovies();
    } else {
      const getResponseFavoriteSeries = async () => {
        const response = await getFavoriteSeries(id, user.id);
        setFavorites(response.data.results);
      };
      getResponseFavoriteSeries();
    }
  }, [id, route.params?.movieFocused, user.id]);

  return favorites ? (
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
                flex: 1,
                flexDirection: 'row',
                marginBottom: 43,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                {route.params?.movieFocused
                  ? 'Filmes favoritos'
                  : 'Séries favoritas'}{' '}
                de
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
        data={favorites}
        keyExtractor={item => String(item.id)}
        numColumns={4}
        renderItem={({item}) => (
          <FavoriteMovies poster_path={item.poster_path} />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Favorites;
