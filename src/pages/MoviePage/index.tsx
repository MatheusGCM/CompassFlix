import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Modal,
  Animated,
} from 'react-native';

import {useAccountContext} from '@context/account';
import {
  getMoviesDetails,
  getMovieCredits,
  rate,
  getAccountStates,
  markFavorite,
  unmarkFavorite,
  addMovieList,
  getUserList,
  getMoviesDetailsList,
} from '@services/api';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {midia} from '@services';
import {
  ButtonGoBack,
  ButtonFavorite,
  ModalRating,
  Load,
  Cast,
} from '@components';

import styles from './style';
import {MidiaDetailsResponse} from '@types';

export function MoviePage({route, navigation}) {
  console.log(route.name);
  const {id, user, udapte, setUpdate} = useAccountContext();

  const [midiaDetails, setMidiaDetails] = useState<MidiaDetailsResponse>();
  const [movieCredits, setMovieCredits] = useState({});

  const [fav, setFav] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [rated, setRated] = useState();
  const [rating, setRating] = useState(0);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);

  const getResponseMovieDetails = async () => {
    const [responseMoviesDetails, responseMovieCredits] = await Promise.all([
      midia.getDetails(),
      getMovieCredits(route.params.id),
    ]);
  };

  useEffect(() => {
    getResponseMovieDetails();

    if (udapte) {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    } else {
      const getResponseFavorite = async () => {
        const response = await getAccountStates('movie', route.params.id, id);
        setFav(response.data.favorite);
      };
      getResponseFavorite();
    }

    if (udapte) {
      const getResponseRated = async () => {
        const reponse = await getAccountStates('movie', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponseRated();
    } else {
      const getResponseRated = async () => {
        const reponse = await getAccountStates('movie', route.params.id, id);
        setRated(reponse.data.rated);
      };
      getResponseRated();
    }
    const getResponseListMovies = async () => {
      const response = await getUserList(user.id, id);
      setUserList(response.data);
    };
    getResponseListMovies();
  }, [id, route.params.id, udapte, user.id]);

  const Directing = movieCredits.crew?.find(
    element => element.job === 'Director',
  )?.name;

  const favorite = async () => {
    setUpdate(!udapte);
    if (fav) {
      setFav(false);
      await unmarkFavorite(user.id, id, 'movie', route.params.id);
    } else {
      setFav(true);
      await markFavorite(user.id, id, 'movie', route.params.id);
    }
  };
  const rateMovie = async () => {
    await rate('movie', route.params.id, id, rating);
    setUpdate(!udapte);
  };

  const modalListSucess = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleSucess}>
        <View style={styles.modalbackground}>
          <View style={styles.containerSucess}>
            <Image source={require('../../assets/check.png')} />
            <Text style={styles.textSucess}>Lista atualizada com sucesso!</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setModalVisibleSucess(false);
                // handleClose();
                setUpdate(!udapte);
              }}
              style={styles.btnOk}>
              <Text style={styles.textOk}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: `http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
        }}>
        <View style={styles.btnsContainer}>
          <ButtonGoBack navigation={navigation} />
          <ButtonFavorite onPress={favorite} favorite={fav} />
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.posterMovie}
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
            }}
          />
          {rated ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.rated}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rated.text}>
                Sua nota:{' '}
                {rated.value === 10 ? rated.value : rated.value.toFixed(1)}/10
              </Text>

              <View style={styles.icon}>
                <EvilIcons name="pencil" size={10} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.rate}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.rate.text}>Avalie agora</Text>
            </TouchableOpacity>
          )}

          <ModalRating
            modalVisible={modalVisible}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            rating={rating}
            setRating={value => setRating(value)}
            rate={rateMovie}
          />

          <View style={styles.flex1}>
            <View style={styles.contentHeaderTop}>
              <Text style={styles.titleMovie}>{movieDetails.title}</Text>
              <Text style={styles.yearMovie}>
                {new Date(movieDetails.release_date).getFullYear()}
              </Text>
              <Text style={styles.timeMovie}>{movieDetails.runtime} min</Text>
              {Directing && (
                <View style={styles.boxDirectorMovie}>
                  <Text style={styles.directorMovie}>Direção por</Text>
                  <Text style={styles.directorMovie.director}>{Directing}</Text>
                </View>
              )}
            </View>

            <View style={styles.contentHeaderBottom}>
              <Text style={styles.voteAverageMovie}>
                {movieDetails.vote_average?.toFixed(1)} / 10
              </Text>
              <View style={styles.boxPopularityMovie}>
                <View>
                  <Icon name="heart" color={'#EC2626'} size={22} />
                </View>
                <Text style={styles.popularityMovie}>
                  {movieDetails.popularity >= 1000
                    ? `${(movieDetails.popularity / 1000)?.toFixed(0)}K`
                    : movieDetails.popularity?.toFixed()}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={handleOpen}
                style={styles.containerAdd}>
                <View style={styles.btnAddList}>
                  <MaterialIcons
                    name="add"
                    size={22}
                    color="#000"
                    backgroundStyle="#fff"
                  />
                </View>
                <Text style={styles.textAddList}>Adicionar a uma lista</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={styles.contentOverview}>
          <Text style={styles.taglineMovie}>
            {movieDetails.tagline
              ? movieDetails.tagline.toUpperCase()
              : 'Sinopse:'}
          </Text>
          <Text style={styles.overviewMovie}>
            {movieDetails.overview ? movieDetails.overview : 'Sem descrição...'}
          </Text>
        </ScrollView>
        <View style={styles.flex2_5}>
          <>
            <View style={styles.boxElenco}>
              <Text style={styles.txtBoxElenco}>Elenco</Text>
            </View>
            <View style={styles.line} />
          </>
          <FlatList
            data={movieCredits.cast}
            keyExtractor={item => String(item.id)}
            renderItem={({item, i}) => <Cast key={i} {...item} />}
          />
        </View>
      </View>
      {modalListSucess()}
    </View>
  );
}
