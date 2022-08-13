import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Modal,
} from 'react-native';
import styles from './style';
import {getMoviesDetails, getMovieCredits} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Cast from '../../Components/Cast';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import Loading from '../../Components/Loading';

const MoviePage = ({route, navigation}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});
  const [heartStatus, setHeartStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getResponseMovieDetails();
  }, [route.params.id]);

  const Directing = movieCredits.crew?.find(
    element => element.job === 'Director',
  )?.name;

  return (
    <>
      {loading ? (
        <Load />
      ) : (
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
                  <Text style={styles.timeMovie}>
                    {movieDetails.runtime} min
                  </Text>
                  {Directing && (
                    <View style={styles.boxDirectorMovie}>
                      <Text style={styles.directorMovie}>Direção por</Text>
                      <Text style={styles.directorMovie.director}>
                        {Directing}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.contentHeaderBottom}>
                  <Text style={styles.voteAverageMovie}>
                    {movieDetails.vote_average?.toFixed(1)} / 10
                  </Text>
                  <View style={styles.boxPopularityMovie}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        heartStatus
                          ? setHeartStatus(false)
                          : setHeartStatus(true)
                      }>
                      <Animatable.View
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite">
                        <Icon
                          name="heart"
                          color={heartStatus ? '#EC2626' : 'white'}
                          size={22}
                        />
                      </Animatable.View>
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
            {movieDetails.overview === '' ? null : (
              <View style={styles.contentOverview}>
                <Text style={styles.taglineMovie}>
                  {movieDetails.tagline ? movieDetails.tagline : 'Sinopse:'}
                </Text>
                <View
                  style={{
                    flexDirection: 'column',
                    // alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  {isOpen === true ? null : (
                    <>
                      <Text numberOfLines={3} style={styles.overviewMovie}>
                        {movieDetails.overview}
                      </Text>
                      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                        <Text
                          style={[
                            styles.overviewMovie,
                            {
                              marginTop: 10,
                              fontWeight: 'bold',
                            },
                          ]}>
                          Leia Mais
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {isOpen && (
                    <Text style={styles.overviewMovie}>
                      {movieDetails.overview}
                    </Text>
                  )}
                </View>
              </View>
            )}
            <View style={styles.boxElenco}>
              <Text style={styles.txtBoxElenco}>Elenco</Text>
            </View>
            <View style={styles.line} />

            <FlatList
              data={movieCredits.cast}
              keyExtractor={item => String(item.id)}
              renderItem={({item, i}) => <Cast key={i} {...item} />}
              onEndReachedThreshold={0.2}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default MoviePage;
