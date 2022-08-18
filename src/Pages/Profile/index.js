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
import {
  getAccount,
  getFavoriteMovie,
  getFavoriteSeries,
  getRatedMovie,
  getRatedSeries,
} from '../../service/api';
import {Context} from '../../context';
import Load from '../../Components/Load';
import FavoriteMovies from '../../Components/FavoriteMovies';
import Movies from '../../Components/Movies';

const Profile = ({navigation}) => {
  const {id} = useContext(Context);
  const [movieFocused, setMovieFocused] = useState(true);
  const [user, setUser] = useState({});
  const [favMovie, setFavMovie] = useState({});
  const [favSeries, setFavSeries] = useState({});
  const [ratedMovie, setRatedMovie] = useState({});
  const [ratedSeries, setRatedSeries] = useState({});

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(id);
      setUser(response.data);
    };
    getResponseAccount();
  }, [id]);

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
  }, [id, user.id]);

  return user && favMovie ? (
    <View style={styles.page}>
      <View style={styles.exitButton}>
        <Icon
          name="exit-outline"
          size={18}
          color="black"
          style={styles.iconPadding}
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
          style={styles.profile}
        />
        <Text style={styles.userName}>{user.name}</Text>
        <View style={{alignItems: 'center', marginTop: 46}}>
          <Text style={styles.numberVotes}>{favMovie.total_results}</Text>
          <Text style={{fontFamily: 'OpenSans-Regular', color: 'white'}}>
            Avaliações
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 22}}>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              style={styles.buttonMidia}
              onPress={() => {
                setMovieFocused(true);
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
                setMovieFocused(false);
              }}>
              {!movieFocused ? (
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
            <Text style={styles.textInfo}>Filmes favoritos de {user.name}</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Favorites')}>
              <Text style={styles.buttonShowAll}>Ver tudo</Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={styles.textInfo}>Series favoritas de {user.name}</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Favorites')}>
              <Text style={styles.buttonShowAll}>Ver tudo</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <View style={{height: 96}}>
        <FlatList
          data={
            movieFocused
              ? favMovie?.results?.slice(0, 4)
              : favSeries?.results?.slice(0, 4)
          }
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
      <View style={styles.line} />
      <View style={styles.boxMidia}>
        {movieFocused ? (
          <>
            <Text style={styles.textInfo}>
              Avaliações de filmes recentes de {user.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Rating')}>
              <Text style={styles.buttonShowAll}>Ver tudo</Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text style={styles.textInfo}>
              Avaliações de series recentes de {user.name}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Rating')}>
              <Text style={styles.buttonShowAll}>Ver tudo</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <FlatList
        data={
          movieFocused
            ? ratedMovie?.results?.slice(0, 4)
            : ratedSeries?.results?.slice(0, 4)
        }
        keyExtractor={item => String(item.id)}
        horizontal={true}
        renderItem={({item}) => (
          <Movies
            text={`${item.rating?.toFixed(1)}/10`}
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
