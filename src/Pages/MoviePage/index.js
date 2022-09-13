import React, {useContext, useEffect, useState, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {RadioButton} from 'react-native-paper';
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
import styles from './style';
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
} from '../../service/api';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cast from '../../Components/Cast';
import Load from '../../Components/Load';
import * as Animatable from 'react-native-animatable';
import ModalRating from '../../Components/ModalRating';
import {Context} from '../../context';
import ButtonFavorite from '../../Components/ButtonFavorite';
import ButtonGoBack from '../../Components/ButtonGoBack';

const MoviePage = ({route, navigation}) => {
  const {id, user, udapte, setUpdate} = useContext(Context);
  const bottomSheetRef = useRef(BottomSheet);

  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState({});

  const [fav, setFav] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [rated, setRated] = useState();
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);
  const [userList, setUserList] = useState({});
  const [selected, setSelected] = useState(false);
  const [tratColor] = useState(new Animated.Value(0));

  useEffect(() => {
    const getResponseMovieDetails = async () => {
      const [responseMoviesDetails, responseMovieCredits] = await Promise.all([
        getMoviesDetails(route.params.id),
        getMovieCredits(route.params.id),
      ]);
      if (responseMoviesDetails.status === 200) {
        setMovieDetails(responseMoviesDetails.data);
      }
      if (responseMovieCredits.status === 200) {
        setMovieCredits(responseMovieCredits.data);
      }
    };
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
      await unmarkFavorite(user.id, id, 'movie', route.params.id);
    } else {
      await markFavorite(user.id, id, 'movie', route.params.id);
    }
  };
  const rateMovie = async () => {
    await rate('movie', route.params.id, id, rating);
    setUpdate(!udapte);
  };

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleClose() {
    bottomSheetRef.current?.close();
    Animated.timing(tratColor, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setValue(0);
      setSelected(false);
    });
  }

  const getResponseAddMovie = async () => {
    if (value > 0) {
      const responseDetailsList = await getMoviesDetailsList(value);
      if (
        responseDetailsList.data.items.find(item => item.id === route.params.id)
      ) {
        Animated.timing(tratColor, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } else {
        const response = await addMovieList(id, route.params.id, value);
        if (response.status === 201) {
          setModalVisibleSucess(true);
          Animated.timing(tratColor, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      }
    } else {
      Animated.timing(tratColor, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const modalSalveFilme = () => {
    return (
      <BottomSheet
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}>
        <View>
          <View style={styles.modalViewHeader}>
            <Text style={styles.modalViewHeaderTitle}>Salvar filme em...</Text>
            <TouchableOpacity onPress={handleClose}>
              <Icon name="close" color={'#000'} size={22} />
            </TouchableOpacity>
          </View>
          <View style={styles.divisor} />
          <View>
            <RadioButton.Group
              value={value}
              onValueChange={newValue => {
                setValue(newValue);
                Animated.timing(tratColor, {
                  toValue: 0,
                  duration: 500,
                  useNativeDriver: true,
                }).start(() => {
                  setSelected(true);
                });
              }}>
              <View style={styles.radioBottomRow}>
                <FlatList
                  data={userList.results}
                  keyExtractor={item => String(item.id)}
                  style={{height: 125}}
                  ListEmptyComponent={
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('profileScreen', {
                          screen: 'ListPage',
                        })
                      }>
                      <Text style={styles.emptyTexList}>
                        Para adicionar um filme você precisar criar uma lista
                        primeiro. Clique aqui para criar uma lista!
                      </Text>
                    </TouchableOpacity>
                  }
                  renderItem={({item}) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <RadioButton color="#000" value={item.id} />
                      <Text style={styles.textRadioBottom}>{item.name}</Text>
                    </View>
                  )}
                />
              </View>
              <View>
                <View
                  style={{
                    alignItems: 'center',
                    height: 22,
                  }}>
                  <Animated.Text
                    style={{
                      color: '#EC2626',
                      opacity: tratColor,
                      fontFamily: 'OpenSans-MediumItalic',
                    }}>
                    {selected
                      ? 'Filme já exite na lista!'
                      : 'Selecione uma lista!'}
                  </Animated.Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={getResponseAddMovie}
                  disabled={userList.results?.length === 0}
                  style={[
                    styles.btnSave,
                    {
                      backgroundColor:
                        userList.results?.length === 0 ? '#C4C4C4' : '#000',
                    },
                  ]}>
                  <Text style={styles.textSave}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </BottomSheet>
    );
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

  return movieDetails.backdrop_path && movieDetails.poster_path ? (
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
                Sua nota: {rated.value.toFixed(1)}/10
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
                <Animatable.View
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite">
                  <Icon name="heart" color={'#EC2626'} size={22} />
                </Animatable.View>

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
            {movieDetails.tagline ? movieDetails.tagline : 'Sinopse:'}
          </Text>
          <Text style={styles.overviewMovie}>
            {movieDetails.overview ? movieDetails.overview : 'Sem descrição...'}
          </Text>
        </ScrollView>
        <View style={styles.flex2_5}>
          <FlatList
            data={movieCredits.cast}
            keyExtractor={item => String(item.id)}
            renderItem={({item, i}) => <Cast key={i} {...item} />}
            ListHeaderComponent={() => (
              <>
                <View style={styles.boxElenco}>
                  <Text style={styles.txtBoxElenco}>Elenco</Text>
                </View>
                <View style={styles.line} />
              </>
            )}
          />
        </View>
      </View>
      {modalSalveFilme()}
      {modalListSucess()}
    </View>
  ) : (
    <Load />
  );
};

export default MoviePage;
