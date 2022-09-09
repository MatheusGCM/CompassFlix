import React, {memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import RatingAverage from '../RatingAverage';
import styles from './style';
const Midia = memo(
  ({id, poster_path, focused, navigation, rating, rated, stack}) => {
    return (
      <View style={rated ? styles.margins : null}>
        <TouchableOpacity
          onPress={() => {
            stack
              ? navigation.navigate(stack, {
                  id: id,
                })
              : navigation.navigate(focused ? 'movieScreen' : 'seriesScreen', {
                  screen: focused ? 'MoviePage' : 'SeriePage',
                  params: {id: id},
                });
          }}>
          <Image
            style={rated ? styles.imgRated : styles.imgFavorite}
            source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
          />
        </TouchableOpacity>
        {rated && <RatingAverage rating={rating} />}
      </View>
    );
  },
);

export default Midia;
