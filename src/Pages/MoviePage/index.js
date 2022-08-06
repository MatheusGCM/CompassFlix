/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import styles from './style';
import {getMoviesDetails, getMoviesCredits} from '../../service/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cast from '../../Components/Cast';

const MoviePage = ({route}) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      const response = await getMoviesDetails(route.params.id);
      setMovieDetails(response.data);
    };
    getResponseMovieDetails();
  }, [route.params.id]);

  useEffect(() => {
    const getResponseMovieCredits = async () => {
      const response = await getMoviesCredits(route.params.id);
      setMovieCast(response.data.cast);
      setMovieCrew(response.data.crew);
    };
    getResponseMovieCredits();
  });

  return movieDetails.poster_path && movieDetails.backdrop_path ? (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <Icon name="chevron-left" size={20} color="#fff" />
      </View>
      <Image
        style={{flex: 1}}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}
      />

      <View style={{flex: 3.7, marginStart: 15}}>
        <View
          style={{
            flexDirection: 'row',
            height: '30%',
          }}>
          <Image
            style={{
              width: 116,
              height: 182,
              borderRadius: 7,
              marginEnd: 16,
              borderWidth: 2,
              top: -50,
            }}
            source={{
              uri: `http://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`,
            }}
          />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'baseline',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '700',
                  lineHeight: 27,
                  marginEnd: 5,
                }}>
                {movieDetails.title}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: '400',
                  marginEnd: 24,
                }}>
                {new Date(movieDetails.release_date).getFullYear()}
              </Text>
              <Text style={{color: '#fff', fontSize: 7}}>
                {movieDetails.runtime} min
              </Text>
            </View>
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              {/* <Text
                style={{
                  color: '#fff',
                  fontSize: 8,
                  fontWeight: '400',
                  lineHeight: 11,
                }}>
                Direção por
              </Text> */}
              <Text>
                {movieCrew.find(element => element.job === 'Director')?.name}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#E9A6A6',
                  fontSize: 30,
                  fontWeight: '400',
                  lineHeight: 40,
                  marginEnd: 31,
                }}>
                {movieDetails.vote_average.toFixed(1)}/10
              </Text>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="heart" size={22} color="#EC2626" />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: '400',
                    lineHeight: 13,
                  }}>
                  {movieDetails.popularity >= 1000
                    ? `${(movieDetails.popularity / 1000)?.toFixed()}K`
                    : movieDetails.popularity}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginEnd: 20, marginBottom: 27}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 16,
              marginBottom: 10,
            }}>
            {movieDetails.tagline ? movieDetails.tagline : 'Sinopse:'}
          </Text>
          <Text
            numberOfLines={4}
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 16,
              textAlign: 'justify',
            }}>
            {movieDetails.overview}
          </Text>
        </View>

        <View
          style={{
            width: 46,
            height: 18,
            borderRadius: 20,
            backgroundColor: '#9C4A8B',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 10,
              fontWeight: '600',
              lineHeight: 13,
            }}>
            Elenco
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#9C4A8B',
            width: 23,
            height: 1,
            marginStart: 12,
            marginTop: 5,
            marginBottom: 15,
          }}
        />

        {/* {movieCast.map((item, i) =>
          i < 4 ? <Cast key={i} {...item} /> : null,
        )} */}
      </View>
    </View>
  ) : (
    <ActivityIndicator
      size={50}
      color="#EC2626"
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default MoviePage;
