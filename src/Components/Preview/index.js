import React, {useContext} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context} from '../../context';

import styles from './style';

const Preview = ({dataFavorite, dataRated, focused, navigation}) => {
  const {user} = useContext(Context);
  return (
    <>
      <View style={styles.marginBottom}>
        <View style={styles.containerTop}>
          <Text style={styles.textInfo}>
            {focused
              ? `Filmes favoritos de ${user.name}`
              : `Séries favoritas de ${user.name}`}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Favorites', {
                focused: focused,
              })
            }>
            <Text style={styles.buttonShowAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        {dataFavorite ? (
          <FlatList
            ListEmptyComponent={() => (
              <View
                style={{
                  height: 89,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <Image source={require('../../assets/movieNotFocused.png')} />
                ) : (
                  <Image
                    source={require('../../assets/seriesNotFocused.png')}
                  />
                )}
              </View>
            )}
            style={styles.center}
            data={dataFavorite?.slice(0, 4)}
            horizontal={true}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    focused ? 'movieScreen' : 'seriesScreen',
                    {
                      screen: focused ? 'MoviePage' : 'SeriePage',
                      params: {id: item.id},
                    },
                  )
                }>
                <Image
                  resizeMode="cover"
                  style={styles.imgFavorite}
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{
              height: 89,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={38} color={'#E9A6A6'} />
          </View>
        )}
      </View>
      <View style={styles.borderTop}>
        <View style={styles.containerBottom}>
          <Text style={styles.textInfo}>
            {focused
              ? `Avaliações de filmes recentes de ${user.name}`
              : `Avaliações de séries recentes de ${user.name}`}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Rating', {
                focused: focused,
              })
            }>
            <Text style={styles.buttonShowAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>
        {dataRated ? (
          <FlatList
            ListEmptyComponent={() => (
              <View
                style={{
                  height: 89,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <Image source={require('../../assets/movieNotFocused.png')} />
                ) : (
                  <Image
                    source={require('../../assets/seriesNotFocused.png')}
                  />
                )}
              </View>
            )}
            style={styles.center}
            data={dataRated?.slice(0, 5)}
            horizontal={true}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    focused ? 'movieScreen' : 'seriesScreen',
                    {
                      screen: focused ? 'MoviePage' : 'SeriePage',
                      params: {id: item.id},
                    },
                  )
                }>
                <Image
                  resizeMode="center"
                  style={styles.imgRated}
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`,
                  }}
                />
                <View style={styles.flexRow}>
                  <Image source={require('../../assets/starRated.png')} />
                  <Text style={styles.txtRating}>{`${
                    item.rating === 10 ? item.rating : item.rating?.toFixed(1)
                  }/10`}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{
              height: 89,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={38} color={'#E9A6A6'} />
          </View>
        )}
      </View>
    </>
  );
};

export default Preview;
