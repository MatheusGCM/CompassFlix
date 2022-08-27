import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getFavoriteMovie,
  getFavoriteSeries,
  getRatedMovie,
  getRatedSeries,
} from '../../service/api';
import {Context} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalExit from '../../Components/ModalExit';
import Preview from '../../Components/Preview';

const Profile = ({navigation}) => {
  const {id, user, udapte} = useContext(Context);
  const [focused, setFocused] = useState(true);
  const [modalExit, setModalExit] = useState(false);
  const [favMovie, setFavMovie] = useState({});
  const [favSeries, setFavSeries] = useState({});
  const [ratedMovie, setRatedMovie] = useState({});
  const [ratedSeries, setRatedSeries] = useState({});

  useEffect(() => {
    const getResponseFavoriteSeries = async () => {
      const response = await getFavoriteSeries(id, user.id);
      setFavSeries(response.data);
    };
    const getResponseFavoriteMovies = async () => {
      const response = await getFavoriteMovie(id, user.id);
      setFavMovie(response.data);
    };
    const getResponseRatedMovies = async () => {
      const response = await getRatedMovie(id, user.id);
      setRatedMovie(response.data);
    };
    const getResponseRatedSeries = async () => {
      const response = await getRatedSeries(id, user.id);
      setRatedSeries(response.data);
    };

    getResponseRatedMovies();
    getResponseRatedSeries();
    getResponseFavoriteMovies();
    getResponseFavoriteSeries();
  }, [id, user.id, udapte]);

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.reset({index: 0, routes: [{name: 'Tabs'}]});
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.exitButton}
        onPress={() => setModalExit(!modalExit)}>
        <Icon name="exit-outline" size={15} color="#000" />
        <Text style={styles.txtExit}>Sair</Text>
      </TouchableOpacity>
      <ModalExit
        modalExit={modalExit}
        onPress={() => setModalExit(!modalExit)}
        logout={Logout}
      />
      <View style={styles.containerTop}>
        {user.avatar?.tmdb.avatar_path ? (
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w92/${user.avatar?.tmdb.avatar_path}`,
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

        <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.containerRated}>
          {ratedMovie?.total_results || ratedSeries?.total_results >= 0 ? (
            focused ? (
              <>
                <Text style={styles.txtNumberRated}>
                  {ratedMovie?.total_results}
                </Text>
                <Text style={styles.txtRated}>Avaliações</Text>
              </>
            ) : (
              <>
                <Text style={styles.txtNumberRated}>
                  {ratedSeries?.total_results}
                </Text>
                <Text style={styles.txtRated}>Avaliações</Text>
              </>
            )
          ) : (
            <ActivityIndicator size="large" color="#E9A6A6" />
          )}
        </View>
      </View>
      <View style={styles.flex1_25}>
        <View style={styles.flexRow}>
          <View style={styles.borderMidia}>
            <TouchableWithoutFeedback
              onPress={() => {
                setFocused(true);
              }}>
              {focused ? (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/movieColored.png')}
                />
              ) : (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/movieNotFocused.png')}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
          <View style={[styles.borderMidia, {borderEndWidth: 0}]}>
            <TouchableWithoutFeedback
              onPress={() => {
                setFocused(false);
              }}>
              {focused ? (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/seriesNotFocused.png')}
                />
              ) : (
                <Image
                  style={styles.imgMidia}
                  source={require('../../assets/seriesColored.png')}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
        {focused ? (
          <Preview
            dataFavorite={favMovie.results}
            dataRated={ratedMovie.results}
            focused={focused}
            navigation={navigation}
          />
        ) : (
          <Preview
            dataFavorite={favSeries.results}
            dataRated={ratedSeries.results}
            focused={focused}
            navigation={navigation}
          />
        )}
      </View>
    </View>
  );
};

export default Profile;
