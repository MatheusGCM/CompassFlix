import React, {memo} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const FavoriteMovies = memo(({poster_path, id, stack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(stack, {
            id: id,
          })
        }>
        <Image
          style={styles.image}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
      </TouchableOpacity>
    </View>
  );
});

export default FavoriteMovies;
