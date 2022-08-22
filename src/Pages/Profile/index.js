import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAccount, getFavoriteMovie} from '../../service/api';
import {Context} from '../../context';
import Load from '../../Components/Load';
import FavoriteMovies from '../../Components/FavoriteMovies';
import Movies from '../../Components/Movies';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {id} = useContext(Context);
  const [movieFocused, setMovieFocused] = useState(true);
  const [seriesFocused, setSeriesFocused] = useState(false);
  const [user, setUser] = useState({});
  const [favMovie, setFavMovie] = useState({});

  useEffect(() => {
    const getResponseAccount = async () => {
      const storedUser = await AsyncStorage.getItem('sessionIdUser');
      const response = await getAccount(id ? id : storedUser);
      setUser(response.data);
    };
    getResponseAccount();
  }, [id]);

  useEffect(() => {
    const getResponseFavoriteMovies = async () => {
      const storedUser = await AsyncStorage.getItem('sessionIdUser');
      const response = await getFavoriteMovie(id ? id : storedUser, user.id);
      setFavMovie(response.data);
    };
    getResponseFavoriteMovies();
  }, [id, user.id]);

  return user && favMovie ? (
    <View style={styles.page}>
      <View style={styles.exitButton}>
        <Icon
          name="exit-outline"
          size={18}
          color="black"
          style={{paddingRight: 6, paddingLeft: 10}}
        />
        <TouchableOpacity>
          <Text style={{color: 'black'}}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/original/${user?.avatar?.tmdb?.avatar_path}`,
          }}
          style={{width: 78, height: 78, borderRadius: 100}}
        />
        <Text
          style={{fontFamily: 'OpenSans-Bold', fontSize: 18, color: 'white'}}>
          {user.name}
        </Text>
        <View style={{alignItems: 'center', marginTop: 46}}>
          <Text
            style={{
              color: '#9C4A8B',
              fontSize: 24,
              fontFamily: 'OpenSans-Bold',
            }}>
            {favMovie.total_results}
          </Text>
          <Text style={{fontFamily: 'OpenSans-Regular', color: 'white'}}>
            Avaliações
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 22}}>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              style={styles.buttonMidia}
              onPress={() => {
                setMovieFocused(true), setSeriesFocused(false);
              }}>
              {movieFocused ? (
                <Image source={require('../../assets/movieColored.png')} />
              ) : (
                <Image source={require('../../assets/movieNotFocused.png')} />
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              onPress={() => {
                setMovieFocused(false), setSeriesFocused(true);
              }}>
              {seriesFocused ? (
                <Image source={require('../../assets/seriesColored.png')} />
              ) : (
                <Image source={require('../../assets/seriesNotFocused.png')} />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={styles.boxMidia}>
        {movieFocused ? (
          <>
            <Text style={{color: 'white'}}>Filmes favoritos de John</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('FavoriteFilms')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={{color: 'white'}}>Series favoritos de John</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('FavoriteSeries')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <View style={{height: 96}}>
        <FlatList
          data={favMovie?.results?.slice(0, 4)}
          horizontal={true}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <FavoriteMovies
              poster_path={item.poster_path}
              id={item.id}
              stack="MoviePage"
            />
          )}
        />
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'gray',
          height: 0.1,
          marginTop: 20,
        }}
      />
      <View style={styles.boxMidia}>
        {movieFocused ? (
          <>
            <Text style={{color: 'white'}}>
              Avaliações de filmes recentes de John
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('RatingFilms')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={{color: 'white'}}>
              Avaliações de series recentes de John
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('RatingSeries')}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  color: '#E9A6A6',
                }}>
                Ver tudo
              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <FlatList
        data={favMovie?.results?.slice(0, 4)}
        keyExtractor={item => String(item.id)}
        horizontal={true}
        renderItem={({item}) => (
          <Movies
            text={`${item.vote_average.toFixed(0)}/10`}
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

export default Profile;
