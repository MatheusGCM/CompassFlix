import React, {useEffect, useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';

import {useAccountContext} from '@context/account';
import {account} from '@services';
import {FavoriteMedia, Midia, NavProps, RatedMedia} from '@types';
import Icon from 'react-native-vector-icons/Ionicons';

import {GenericModal, Preview} from '@components';

import styles from './style';

import {storage} from '~utils';

export function Profile({navigation}: NavProps<'Profile'>) {
  const {userData, setCanPrivateStack, setMidiaValues} = useAccountContext();
  const [focused, setFocused] = useState<Midia>('movie');
  const [modalExit, setModalExit] = useState<boolean>(false);
  const [favoriteMedia, setFavoriteMedia] = useState({} as FavoriteMedia);
  const [ratedMedia, setRatedMedia] = useState({} as RatedMedia);

  const movieFocus = focused === 'movie';

  const favoriteData = movieFocus
    ? favoriteMedia.movie?.results
    : favoriteMedia.tv?.results;
  const ratedData = movieFocus
    ? ratedMedia.movie?.results
    : ratedMedia.tv?.results;

  const getProfileData = async () => {
    try {
      const [favoriteMovies, ratedMovies, favoriteSeries, ratedSeries] =
        await Promise.all([
          account.getFavorite(userData.id, 'movies'),
          account.getRated(userData.id, 'movies'),
          account.getFavorite(userData.id, 'tv'),
          account.getRated(userData.id, 'tv'),
        ]);
      setFavoriteMedia({movie: favoriteMovies, tv: favoriteSeries});
      setRatedMedia({movie: ratedMovies, tv: ratedSeries});
    } catch (error) {
      console.log(error);
    }
  };

  const pressedCard = (midiaId: number) => {
    setMidiaValues({id: midiaId, type: focused});
    navigation.navigate(focused === 'movie' ? 'MoviePage' : 'SeriePage');
  };

  const logout = async () => {
    storage.clearAll();
    setCanPrivateStack(false);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <View style={styles.page}>
      <Pressable
        style={styles.exitButton}
        onPress={() => setModalExit(!modalExit)}>
        <Icon name="exit-outline" size={15} color="#000" />
        <Text style={styles.txtExit}>Sair</Text>
      </Pressable>
      <View style={styles.containerTop}>
        {userData.avatar?.tmdb.avatar_path ? (
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w92/${userData.avatar?.tmdb.avatar_path}`,
            }}
            style={styles.imgAvatar}
          />
        ) : (
          <View>
            <Icon
              name="person-circle"
              color="rgba(255,255,255,0.4)"
              size={78}
            />
          </View>
        )}

        <Text style={styles.userName}>{userData.name}</Text>
        <Pressable
          style={styles.buttonListFilms}
          onPress={() => navigation.navigate('ListPage')}>
          <Text style={styles.txtButtonListFilms}>Ver lista de filmes</Text>
        </Pressable>
        <View style={styles.containerRated}>
          <Text style={styles.txtNumberRated}>
            {movieFocus
              ? ratedMedia?.movie?.total_results
              : ratedMedia?.tv?.total_results}
          </Text>
          <Text style={styles.txtRated}>Avaliações</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.borderMidia}>
          <Pressable
            onPress={() => {
              setFocused('movie');
            }}>
            <Image
              style={styles.imgMidia}
              source={
                movieFocus
                  ? require('@assets/movieColored.png')
                  : require('@assets/movieNotFocused.png')
              }
            />
          </Pressable>
        </View>
        <View style={[styles.borderMidia, {borderEndWidth: 0}]}>
          <Pressable
            onPress={() => {
              setFocused('tv');
            }}>
            <Image
              style={styles.imgMidia}
              source={
                movieFocus
                  ? require('@assets/seriesNotFocused.png')
                  : require('@assets/seriesColored.png')
              }
            />
          </Pressable>
        </View>
      </View>
      <Preview
        pressedCard={mediaId => pressedCard(mediaId)}
        pressedSeeAll={() => ''}
        data={favoriteData}
        focused={focused}
      />
      <View style={styles.line} />
      <Preview
        type="rated"
        pressedCard={mediaId => pressedCard(mediaId)}
        pressedSeeAll={() => ''}
        data={ratedData}
        focused={focused}
      />
      <GenericModal
        visible={modalExit}
        title="Atenção!"
        subtitle="Deseja mesmo sair?"
        type="logout"
        onConfirmPress={logout}
        onDismissPress={() => setModalExit(false)}
      />
    </View>
  );
}
