import React, {memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import RatingAverage from '../RatingAverage';
import styles from './style';
const Midia = memo(
  ({id, poster_path, focused, navigation, rating, rated, stack}) => {
    return rated ? (
      <View style={styles.margins}>
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
            style={styles.imgRated}
            source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
          />
        </TouchableOpacity>
        <RatingAverage rating={rating} />
      </View>
    ) : (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(focused ? 'movieScreen' : 'seriesScreen', {
              screen: focused ? 'MoviePage' : 'SeriePage',
              params: {id: id},
            })
          }>
          <Image
            style={styles.imgFavorite}
            source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export default Midia;
