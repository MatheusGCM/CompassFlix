import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const FavoriteMovies = memo(
  ({poster_path, rated, rating, movieFocused, navigation, item}) => {
    return rated ? (
      <TouchableOpacity
        style={{marginEnd: 13, marginBottom: 20}}
        // onPress={() =>
        //   navigation.navigate(movieFocused ? 'movieScreen' : 'seriesScreen', {
        //     screen: movieFocused ? 'MoviePage' : 'SeriePage',
        //     params: {id: item},
        //   })
        // }
      >
        <Image
          style={{
            width: 76,
            height: 95,
            borderRadius: 10,
            marginBottom: 5,
          }}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" color="#EC2626" size={10} />
          <Text
            style={{
              fontSize: 8,
              color: '#fff',
              marginLeft: 4.5,
              fontFamily: 'OpenSans-SemiBold',
            }}>
            {rating}
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <Image
        style={styles.image}
        source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
      />
    );
  },
);

export default FavoriteMovies;
