import React from 'react';
import {Image, Text, View, Pressable, ImageBackground} from 'react-native';

import {AccountStatesResponse, Midia, MidiaDetailsResponse} from '@types';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ButtonGoBack, ButtonFavorite} from '@components';

import styles from './style';

type DetailsHeaderProps = {
  midiaType: Midia;
  director?: string;
  addList?(): void;
  goBack?(): void;
  favoritePressed?(): void;
  ratePressed?(): void;
} & MidiaDetailsResponse &
  Partial<AccountStatesResponse>;

export function DetailsHeader({
  director,
  midiaType,
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  vote_average,
  popularity,
  rated,
  favorite,
  name,
  first_air_date,
  created_by,
  addList,
  goBack,
  favoritePressed,
  ratePressed,
}: DetailsHeaderProps) {
  const directorName = director || (created_by && created_by[0]?.name);
  const isMovie = midiaType === 'movie';
  return (
    <>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${backdrop_path}`,
        }}>
        <View style={styles.btnsContainer}>
          <ButtonGoBack onPress={goBack} />
          <ButtonFavorite
            favorited={favorite ? favorite : false}
            onPress={favoritePressed}
          />
        </View>
      </ImageBackground>
      <View style={styles.contentHeader}>
        <Image
          style={styles.posterMovie}
          source={{
            uri: `http://image.tmdb.org/t/p/original/${poster_path}`,
          }}
        />
        <Pressable
          style={rated ? styles.rated : styles.rate}
          onPress={ratePressed}>
          {rated ? (
            <>
              <Text style={styles.ratedText}>
                Sua nota:{' '}
                {rated.value === 10 ? rated.value : rated.value.toFixed(1)}
                /10
              </Text>
              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </>
          ) : (
            <Text style={styles.rateText}>Avalie agora</Text>
          )}
        </Pressable>
        <View style={styles.flex1}>
          <View style={styles.contentHeaderTop}>
            <Text style={styles.titleMovie}>{isMovie ? title : name}</Text>
            <Text style={styles.yearMovie}>
              {new Date(isMovie ? release_date : first_air_date).getFullYear()}
            </Text>
            {isMovie && <Text style={styles.timeMovie}>{runtime} min</Text>}

            <View style={styles.boxDirectorMovie}>
              <Text style={styles.directorMovie}>
                {isMovie ? 'Direção' : 'Criado'} por
              </Text>
              <Text style={styles.directorText}>{directorName}</Text>
            </View>
          </View>

          <View style={styles.contentHeaderBottom}>
            <Text style={styles.voteAverageMovie}>
              {vote_average?.toFixed(1)} / 10
            </Text>
            <View style={styles.boxPopularityMovie}>
              <View>
                <Icon name="heart" color={'#EC2626'} size={22} />
              </View>
              <Text style={styles.popularityMovie}>
                {popularity >= 1000
                  ? `${(popularity / 1000)?.toFixed(0)}K`
                  : popularity?.toFixed()}
              </Text>
            </View>
          </View>
          {isMovie && (
            <View>
              <Pressable onPress={addList} style={styles.containerAdd}>
                <View style={styles.btnAddList}>
                  <MaterialIcons name="add" size={22} color="#000" />
                </View>
                <Text style={styles.textAddList}>Adicionar a uma lista</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </>
  );
}
