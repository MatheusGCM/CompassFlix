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
        style={styles.posterMovie}
          source={{
            uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
          }}
        />
        <Text style={styles.titleMovie}>{movieDetails.title} <Text style={styles.yearMovie}>{new Date(movieDetails.release_date).getFullYear()}</Text> <Text style={styles.timeMovie}>{movieDetails.runtime}min</Text>
          </Text>
        <Text>
        Direção por: 
        </Text>
        <Text>{movieDetails.vote_average?.toFixed(1)}/10</Text> 
        <TouchableOpacity>
          <Icon name="heart" size={22} />
        </TouchableOpacity>
        <Text>{movieDetails.popularity >= 1000 ? `${(movieDetails.popularity/1000)?.toFixed(0)}K` : movieDetails.popularity}</Text>
        <Text>{movieDetails.tagline}</Text>
        <Text> {movieDetails.overview}</Text>
        <Text>Elenco</Text>
      </View>
    </View>
  );
};

export default MoviePage;
