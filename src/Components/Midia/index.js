import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
const Midia = memo(({poster_path, rated, rating, focused, id, state}) => {
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
      {state && (
        <TouchableOpacity
          style={{
            width: 18,
            height: 18,
            backgroundColor: '#fff',
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 5,
            top: -5,
          }}>
          <View style={{width: 7, height: 1, backgroundColor: '#EC2626'}} />
        </TouchableOpacity>
      )}
    </View>
  );
});

export default Midia;
