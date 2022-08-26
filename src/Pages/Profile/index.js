import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getFavoriteMovie,
  getFavoriteSeries,
  getRatedMovie,
  getRatedSeries,
} from '../../service/api';
import {Context} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalExit from '../../Components/ModalExit';

const Profile = ({navigation}) => {
  const {id, user, sucess} = useContext(Context);
  const [movieFocused, setMovieFocused] = useState(true);
  const [modalExit, setModalExit] = useState(false);
  const [favMovie, setFavMovie] = useState({});
  const [favSeries, setFavSeries] = useState({});
  const [ratedMovie, setRatedMovie] = useState({});
  const [ratedSeries, setRatedSeries] = useState({});

  useEffect(() => {
    const getResponseFavoriteSeries = async () => {
      const response = await getFavoriteSeries(id, user.id);
      setFavSeries(response.data);
    };
    const getResponseFavoriteMovies = async () => {
      const response = await getFavoriteMovie(id, user.id);
      setFavMovie(response.data);
    };
    const getResponseRatedMovies = async () => {
      const response = await getRatedMovie(id, user.id);
      setRatedMovie(response.data);
    };
    const getResponseRatedSeries = async () => {
      const response = await getRatedSeries(id, user.id);
      setRatedSeries(response.data);
    };
    getResponseRatedMovies();
    getResponseRatedSeries();
    getResponseFavoriteMovies();
    getResponseFavoriteSeries();
  }, [id, user.id, sucess]);

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.reset({index: 0, routes: [{name: 'Tabs'}]});
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.exitButton}
        onPress={() => setModalExit(!modalExit)}>
        <Icon name="exit-outline" size={15} color="#000" />
        <Text
          style={{
            color: '#000',
            fontFamily: 'OpenSans-Bold',
            fontSize: 10,
            lineHeight: 12,
          }}>
          Sair
        </Text>
      </TouchableOpacity>
      <ModalExit
        modalExit={modalExit}
        onPress={() => setModalExit(!modalExit)}
        logout={Logout}
      />
      <View
        style={{
          marginTop: 13,
          alignItems: 'center',
        }}>
        {user.avatar?.tmdb.avatar_path ? (
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/original/${user.avatar?.tmdb.avatar_path}`,
            }}
            style={{width: 78, height: 78, borderRadius: 100}}
          />
        ) : (
          <View>
            <Icon
              name="person-circle"
              color="rgba(255,255,255,0.4)"
              size={78}
            />
          </View>
        )}

        <Text style={styles.userName}>{user.name}</Text>
        <View style={{alignItems: 'center', marginTop: 46, height: 54}}>
          {ratedMovie?.total_results + ratedSeries?.total_results ? (
            <>
              <Text
                style={{
                  color: '#9C4A8B',
                  fontSize: 24,
                  fontFamily: 'OpenSans-Bold',
                  lineHeight: 32,
                }}>
                {ratedMovie?.total_results + ratedSeries?.total_results}
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans-Regular',
                  color: 'white',
                  fontSize: 11,
                  lineHeight: 15,
                }}>
                Avaliações
              </Text>
            </>
          ) : (
            <ActivityIndicator size="large" color="#E9A6A6" />
          )}
        </View>

        <View style={{flexDirection: 'row', paddingTop: 22}}>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              onPress={() => {
                setMovieFocused(true);
              }}>
              {movieFocused ? (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/movieColored.png')}
                />
              ) : (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/movieNotFocused.png')}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={[styles.borderMidia, {borderEndWidth: 0}]}>
            <TouchableWithoutFeedback
              onPress={() => {
                setMovieFocused(false);
              }}>
              {!movieFocused ? (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/seriesColored.png')}
                />
              ) : (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/seriesNotFocused.png')}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={styles.boxMidia}>
        {movieFocused ? (
          <>
            <Text style={styles.textInfo}>Filmes favoritos de {user.name}</Text>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Favorites', {
                  movieFocused: movieFocused,
                })
              }>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 10,
                  lineHeight: 12.26,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={styles.textInfo}>Séries favoritas de {user.name}</Text>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Favorites', {
                  movieFocused: movieFocused,
                })
              }>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 10,
                  lineHeight: 12.26,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <View style={{height: 89, justifyContent: 'center'}}>
        {favMovie?.results || favSeries?.results ? (
          <FlatList
            data={
              movieFocused
                ? favMovie?.results?.slice(0, 4)
                : favSeries?.results?.slice(0, 4)
            }
            horizontal={true}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    movieFocused ? 'movieScreen' : 'seriesScreen',
                    {
                      screen: movieFocused ? 'MoviePage' : 'SeriePage',
                      params: {id: item.id},
                    },
                  )
                }>
                {console.log(item.id)}
                <Image
                  style={{
                    width: 67,
                    height: 89,
                    borderRadius: 7,
                    marginEnd: 12,
                  }}
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <ActivityIndicator size="large" color="#E9A6A6" />
        )}
      </View>
      <View style={styles.line} />
      <View style={styles.boxMidia}>
        {movieFocused ? (
          <>
            <Text style={styles.textInfo}>
              Avaliações de filmes recentes de {user.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Rating', {
                  movieFocused: movieFocused,
                })
              }>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 10,
                  lineHeight: 12.26,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={styles.textInfo}>
              Avaliações de séries recentes de {user.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Rating', {
                  movieFocused: movieFocused,
                })
              }>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 10,
                  lineHeight: 12.26,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      {ratedMovie?.results || ratedSeries?.results ? (
        <FlatList
          data={
            movieFocused
              ? ratedMovie?.results?.slice(0, 5)
              : ratedSeries?.results?.slice(0, 5)
          }
          keyExtractor={item => String(item.id)}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  movieFocused ? 'movieScreen' : 'seriesScreen',
                  {
                    screen: movieFocused ? 'MoviePage' : 'SeriePage',
                    params: {id: item.id},
                  },
                )
              }>
              <Image
                style={{width: 58, height: 82, borderRadius: 7, marginEnd: 12}}
                source={{
                  uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" color="#EC2626" size={10} />
                <Text
                  style={{
                    fontSize: 8,
                    color: '#fff',
                    marginLeft: 4.5,
                    fontFamily: 'OpenSans-SemiBold',
                  }}>{`${item.rating?.toFixed(1)}/10`}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{
            height: 82,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#E9A6A6" />
        </View>
      )}
    </View>
  );
};

export default Profile;
