import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const Midia = memo(({poster_path, rated, rating, focused, id}) => {
  const navigation = useNavigation();
  return rated ? (
    <View style={styles.margins}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(focused ? 'movieScreen' : 'seriesScreen', {
            screen: focused ? 'MoviePage' : 'SeriePage',
            params: {id: id},
          })
        }>
        <Image
          style={styles.imgRated}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Icon name="star" color="#EC2626" size={10} />
        <Text style={styles.txtRated}>{rating}</Text>
      </View>
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
});

export default Midia;
