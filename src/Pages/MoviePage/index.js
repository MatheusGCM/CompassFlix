import React, {memo, useContext, useEffect, useMemo, useState} from 'react';
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
  getRatedMovie,
  getFavoriteMovie,
  postRatedFilm,
  getMovieDetailsPlus,
} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Cast from '../../Components/Cast';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import EvaluateModal from './EvaluateModal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import Star from 'react-native-vector-icons/MaterialCommunityIcons';

const MoviePage = ({route, navigation}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});
  const [rated, setRated] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const {id, user, sucess, setSucess} = useContext(Context);
  const [favorite, setFavorite] = useState(false);
  const [movieFavorites, setMovieFavorites] = useState({});

  const FavoriteFilm = async (media_type, media_id) => {
    await postRatedFilm(id, user.id, media_type, media_id, !favorite);
  };
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
  }, [route.params.id]);

  useEffect(() => {
    const getResponseDetailedMovie = async () => {
      if (movieDetails.id) {
        const response = await getMovieDetailsPlus(movieDetails.id, id);
        if (response.data.rated.value > 0) {
          setRatingValue(response.data.rated.value);
          setRated(true);
        } else if (response.data.favorite) {
          setFavorite(response.data.favorite);
        }
      }
    };
    getResponseDetailedMovie();
  }, [id, movieDetails.id, sucess]);
  console.log(sucess);
  const Directing = movieCredits.crew?.find(
    element => element.job === 'Director',
  )?.name;
  return movieDetails.backdrop_path && movieDetails.poster_path ? (
    <View style={styles.container}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonLeft}>
          <Feather color="#000000" name="arrow-left" size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => {
            setSucess(!sucess);
            setFavorite(favorite ? false : true);
            FavoriteFilm('movie', movieDetails.id);
          }}>
          <Star
            name={favorite ? 'star' : 'star-outline'}
            color={favorite ? 'red' : 'black'}
            size={25}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
          />
          {ratingValue ? (
            <TouchableOpacity
              style={styles.rated}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rated.text}>Sua nota: {ratingValue}/10</Text>

              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.rate}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rate.text}>Avalie agora</Text>
            </TouchableOpacity>
          )}

          <EvaluateModal
            visible={modalVisible}
            setModalVisible={setModalVisible}
            setCurrentRating={setRating}
            setRated={setRated}
            movieDetailsId={movieDetails.id}
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
