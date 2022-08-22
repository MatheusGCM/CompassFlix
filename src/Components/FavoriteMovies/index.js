import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const FavoriteMovies = memo(({poster_path, rated, rating}) => {
  return rated ? (
    <View style={{marginEnd: 13, marginBottom: 20}}>
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
    </View>
  ) : (
    <Image
      style={styles.image}
      source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
    />
  );
});

export default FavoriteMovies;
