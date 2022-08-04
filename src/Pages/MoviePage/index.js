import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import {getMoviesDetails} from '../../service/api';

const MoviePage = ({route}) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      const response = await getMoviesDetails(route.params.id);
      setMovieDetails(response.data);
    };
    getResponseMovieDetails();
  }, [route.params.id]);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Image
        style={{flex: 1}}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}
      />

      <View style={{flex: 3.5}}>
        <Image
          style={{width: 116, height: 166}}
          source={{
            uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
          }}
        />
        <Text>{movieDetails.title}</Text>
      </View>
    </View>
  );
};

export default MoviePage;
