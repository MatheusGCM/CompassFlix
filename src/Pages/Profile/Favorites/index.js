import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './style';
import {Context} from '../../../context';
import {getFavoriteMovie, getFavoriteSeries} from '../../../service/api';
import Load from '../../../Components/Load';
import Midia from '../../../Components/Midia';
import ButtonGoBack from '../../../Components/ButtonGoBack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ListEmpty from '../../../Components/ListEmpty';

const Favorites = ({navigation, route}) => {
  const {id, user, udapte} = useContext(Context);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    if (route.params?.focused) {
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
  }, [id, route.params?.focused, user.id, udapte]);

  return favorites ? (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <ButtonGoBack navigation={navigation} />
            <View style={styles.headerContainer}>
              <Text style={styles.headerTxt}>
                {route.params?.focused
                  ? 'Filmes favoritos de'
                  : 'Séries favoritas de'}
                <Text style={styles.headerTxt.userName}> {user.name}</Text>
                <Text style={styles.headerTxt}>!</Text>
              </Text>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            txt={
              route.params?.focused
                ? 'Sem filmes favoritos...'
                : 'Sem séries favoritos...'
            }
          />
        )}
        data={favorites}
        keyExtractor={item => String(item.id)}
        numColumns={4}
        renderItem={({item}) => (
          <Midia
            {...item}
            focused={route.params?.focused}
            navigation={navigation}
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Favorites;
