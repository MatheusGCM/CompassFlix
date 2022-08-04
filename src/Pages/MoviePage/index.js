import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {getMoviesDetails} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';

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
        <Text>{new Date(movieDetails.release_date).getFullYear()}</Text>
        <Text>{movieDetails.runtime} min</Text>
        <Text>
        Direção por: 
        </Text>
        <Text>{movieDetails.vote_average}/10</Text> 
        <TouchableOpacity>
          <Icon name="heart" size={22} />
        </TouchableOpacity>
        <Text>{movieDetails.popularity} K</Text>
        <Text>{movieDetails.tagline}</Text>
        <Text> {movieDetails.overview}</Text>
        <Text>Elenco</Text>
      </View>
    </View>
  );
};

export default MoviePage;
