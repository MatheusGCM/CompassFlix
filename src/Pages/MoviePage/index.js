import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {
  getMoviesDetails,
  getMovieCredits,
  rate,
  getAccountStates,
  markFavorite,
  unmarkFavorite,
} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import ArrowLeft from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Cast from '../../Components/Cast';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import ModalRating from '../../Components/ModalRating';
import {Context} from '../../context';
import ButtonFavorite from '../../Components/ButtonFavorite';

const MoviePage = ({route, navigation}) => {
  const {id, user, udapte, setUpdate} = useContext(Context);

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});

  const [fav, setFav] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [rated, setRated] = useState();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      const [responseMoviesDetails, responseMovieCredits] = await Promise.all([
        getMoviesDetails(route.params.id),
        getMovieCredits(route.params.id),
      ]);
      if (responseMoviesDetails.status === 200) {
        setMovieDetails(responseMoviesDetails.data);
      }
      if (responseMovieCredits.status === 200) {
        setMovieCredits(responseMovieCredits.data);
      }
    };
    getResponseMovieDetails();

    if (udapte) {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    } else {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    }

    if (udapte) {
      const getResponseRated = async () => {
        const reponse = await getAccountStates('movie', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponseRated();
    } else {
      const getResponseRated = async () => {
        const reponse = await getAccountStates('movie', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponseRated();
    }
  }, [id, route.params.id, udapte]);

  const Directing = movieCredits.crew?.find(
    element => element.job === 'Director',
  )?.name;

  const favorite = async () => {
    setUpdate(!udapte);
    if (fav) {
      await unmarkFavorite(user.id, id, 'movie', route.params.id);
    } else {
      await markFavorite(user.id, id, 'movie', route.params.id);
    }
  };

  const rateMovie = async () => {
    await rate('movie', route.params.id, id, rating);
    setUpdate(!udapte);
  };

  return movieDetails.backdrop_path && movieDetails.poster_path ? (
    <View style={styles.container}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}>
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
            style={styles.buttonLeft}>
            <ArrowLeft color="#000000" name="arrow-left" size={22} />
          </TouchableOpacity>
          <ButtonFavorite onPress={favorite} favorite={fav} />
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
          />
          {rated ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.rated}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rated.text}>
                Sua nota: {rated.value.toFixed(1)}/10
              </Text>

              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.rate}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rate.text}>Avalie agora</Text>
            </TouchableOpacity>
          )}

          <ModalRating
            modalVisible={modalVisible}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            rating={rating}
            setRating={value => setRating(value)}
            rate={rateMovie}
          />

          <View style={styles.flex1}>
            <View style={styles.contentHeaderTop}>
              <Text style={styles.titleMovie}>{movieDetails.title}</Text>
              <Text style={styles.yearMovie}>
                {new Date(movieDetails.release_date).getFullYear()}
              </Text>
              <Text style={styles.timeMovie}>{movieDetails.runtime} min</Text>
              {Directing && (
                <View style={styles.boxDirectorMovie}>
                  <Text style={styles.directorMovie}>Direção por</Text>
                  <Text style={styles.directorMovie.director}>{Directing}</Text>
                </View>
              )}
            </View>

            <View style={styles.contentHeaderBottom}>
              <Text style={styles.voteAverageMovie}>
                {movieDetails.vote_average?.toFixed(1)} / 10
              </Text>
              <View style={styles.boxPopularityMovie}>
                <Animatable.View
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite">
                  <Icon name="heart" color={'#EC2626'} size={22} />
                </Animatable.View>

                <Text style={styles.popularityMovie}>
                  {movieDetails.popularity >= 1000
                    ? `${(movieDetails.popularity / 1000)?.toFixed(0)}K`
                    : movieDetails.popularity?.toFixed()}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={styles.contentOverview}>
          <Text style={styles.taglineMovie}>
            {movieDetails.tagline ? movieDetails.tagline : 'Sinopse:'}
          </Text>
          <Text style={styles.overviewMovie}>
            {movieDetails.overview ? movieDetails.overview : 'Sem descrição...'}
          </Text>
        </ScrollView>
        <View style={styles.flex2_5}>
          <FlatList
            data={movieCredits.cast}
            keyExtractor={item => String(item.id)}
            renderItem={({item, i}) => <Cast key={i} {...item} />}
            ListHeaderComponent={() => (
              <>
                <View style={styles.boxElenco}>
                  <Text style={styles.txtBoxElenco}>Elenco</Text>
                </View>
                <View style={styles.line} />
              </>
            )}
          />
        </View>
      </View>
    </View>
  ) : (
    <Load />
  );
};

export default MoviePage;
