import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './style';
import {getMoviesDetails, GetMovieCredits} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const MoviePage = ({route, navigation}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});
  const [heartStatus, setHeartStatus] = useState(false);

  // console.log('movieCredits', movieCredits.cast);

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      const [responseMoviesDetails, responseMovieCredits] = await Promise.all([
        getMoviesDetails(route.params.id),
        GetMovieCredits(route.params.id),
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

  const Directing = movieCredits?.cast?.find(
    element => element.known_for_department === 'Directing',
  )?.name;

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonLeft}>
          <Feather color="#000000" name="arrow-left" size={22} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={{flex: 3.5}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 16,
          }}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
          />
          <View style={{width: '80%'}}>
            <Text style={styles.titleMovie}>
              {movieDetails.title}{' '}
              <Text style={styles.yearMovie}>
                {new Date(movieDetails.release_date).getFullYear()}
              </Text>{' '}
              <Text style={styles.timeMovie}>{movieDetails.runtime}min</Text>
            </Text>
            <View>
              {Directing && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 16,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                    }}>
                    Direção por
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 'bold',
                      marginLeft: 2,
                    }}>
                    {Directing}
                  </Text>
                </View>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 16,
                  paddingTop: 18,
                }}>
                <Text style={{color: 'pink', fontSize: 30, marginRight: 30}}>
                  {movieDetails.vote_average?.toFixed(1)} / 10
                </Text>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() =>
                      heartStatus ? setHeartStatus(false) : setHeartStatus(true)
                    }>
                    <Icon
                      name="heart"
                      color={heartStatus ? 'red' : 'white'}
                      size={22}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 10,
                    }}>
                    {movieDetails.popularity >= 1000
                      ? `${(movieDetails.popularity / 1000)?.toFixed(0)}K`
                      : movieDetails.popularity}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: 20,
            textAlign: 'left',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            {movieDetails.tagline}
          </Text>
          <Text
            style={{
              color: '#fff',
              lineHeight: 20,
            }}>
            {' '}
            {movieDetails.overview}
          </Text>
        </View>
        <FlatList
          data={movieCredits.cast}
          contentContainerStyle={{
            marginTop: 20,
          }}
          keyExtractor={movieCredits => movieCredits.id}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: 20,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 100,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: `http://image.tmdb.org/t/p/original/${item.profile_path}`,
                }}
              />
              <View>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  {item.character}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MoviePage;
