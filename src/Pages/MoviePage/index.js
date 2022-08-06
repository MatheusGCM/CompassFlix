import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import styles from './style';
import {getMoviesDetails, getMovieCredits} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Cast from '../../Components/Cast';
import Load from '../../Components/Load';

const MoviePage = ({route, navigation, navigation}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});
  const [heartStatus, setHeartStatus] = useState(false);

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
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
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
              <View style={styles.boxPopularity}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    heartStatus ? setHeartStatus(false) : setHeartStatus(true)
                  }>
                  <Icon
                    name="heart"
                    color={heartStatus ? '#EC2626' : 'white'}
                    size={22}
                  />
                </TouchableOpacity>
                <Text style={styles.popularityMovie}>
                  {movieDetails.popularity >= 1000
                    ? `${(movieDetails.popularity / 1000)?.toFixed(0)}K`
                    : movieDetails.popularity}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentOverview}>
          <Text style={styles.taglineMovie}>
            {movieDetails.tagline ? movieDetails.tagline : 'Sinopse:'}
          </Text>
          <Text numberOfLines={4} style={styles.overviewMovie}>
            {movieDetails.overview}
          </Text>
        </View>
        <View style={styles.boxElenco}>
          <Text style={styles.txtBoxElenco}>Elenco</Text>
        </View>
        <View style={styles.line} />

        {movieCredits.cast?.map((item, i) =>
          i < 4 ? <Cast key={i} {...item} /> : null,
        )}
      </View>
    </View>
  ) : (
    <Load />
  );
};

export default MoviePage;
