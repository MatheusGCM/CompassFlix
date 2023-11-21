import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Context} from 'src/context/account';
import {getMoviesDetailsList, removeMovieList} from '@services/api';
import Pencil from 'react-native-vector-icons/EvilIcons';
import Eye from 'react-native-vector-icons/Ionicons';

import {ListEmpty, ButtonGoBack, ModalExit} from '@components';

import styles from './style';

export default function ListFilmPage({route, navigation}) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [state, setState] = useState(false);
  const [moviesDetailsList, setMoviesDetailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmSelected, setFilmSelected] = useState();
  const [translateX] = useState(new Animated.Value(0));
  const [opacityRemoveMovie] = useState(new Animated.Value(0));
  const [opacityPostPath] = useState(new Animated.Value(1));
  const [colorEye] = useState(new Animated.Value(0));
  const [colorPencil] = useState(new Animated.Value(0));

  useEffect(() => {
    const responseDetailsList = async () => {
      const response = await getMoviesDetailsList(route.params.list_id);
      setMoviesDetailsList(response.data);
    };
    responseDetailsList();
    if (moviesDetailsList.items?.length === 0) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setState(false);
    }
  }, [route.params.list_id, udapte, moviesDetailsList.items, translateX]);

  const removeFilm = async () => {
    await removeMovieList(route.params.list_id, id, filmSelected);
    setUpdate(!udapte);
    setModalVisible(!modalVisible);
  };

  const visualize = () => {
    setTimeout(() => {
      setState(false);
    }, 20);
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(colorEye, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(colorPencil, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.parallel([
      Animated.timing(opacityRemoveMovie, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityPostPath, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const edit = () => {
    setTimeout(() => {
      setState(true);
    }, 20);
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 37,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(colorEye, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(colorPencil, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.parallel([
      Animated.timing(opacityRemoveMovie, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityPostPath, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <ButtonGoBack navigation={navigation} />
        <View style={styles.containerHeaderEdit}>
          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateX: translateX}]},
            ]}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={visualize}
            style={styles.btnEye}>
            <Animated.Text
              style={{
                color: colorEye.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['white', 'black'],
                }),
              }}>
              <Eye name="eye" size={16} />
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!moviesDetailsList.items?.length}
            activeOpacity={1}
            onPress={edit}
            style={styles.btnPencil}>
            <Animated.Text
              style={{
                color: colorPencil.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['black', 'white'],
                }),
              }}>
              <Pencil name="pencil" size={21} />
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.alignCenter}>
        <View style={styles.containerListName}>
          <Text style={styles.txtListName}>{moviesDetailsList.name}</Text>
        </View>
        <View style={styles.containerListDescription}>
          <Text style={styles.txtListDescription}>
            {moviesDetailsList.description}
          </Text>
        </View>
        <View style={styles.containerFlatlist}>
          {moviesDetailsList.items ? (
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={moviesDetailsList.items}
              keyExtractor={item => String(item.id)}
              numColumns={4}
              ListEmptyComponent={() => (
                <ListEmpty txt={'Sem filmes na lista...'} />
              )}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('movieScreen', {
                        screen: 'MoviePage',
                        params: {id: item.id},
                      })
                    }>
                    <Animated.Image
                      style={[
                        styles.poster_path,
                        {
                          marginEnd: (index + 1) % 4 == 0 ? 0 : 13,
                          opacity: opacityPostPath,
                        },
                      ]}
                      source={{
                        uri: `http://image.tmdb.org/t/p/w154/${item.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    disabled={!state}
                    activeOpacity={0.7}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setFilmSelected(item.id);
                    }}
                    style={[
                      styles.btnRemoveMovie,
                      {right: (index + 1) % 4 == 0 ? -5 : 5},
                    ]}>
                    <Animated.View
                      style={[
                        styles.containerRemoveMovie,
                        {opacity: opacityRemoveMovie},
                      ]}>
                      <View style={styles.iconRemove} />
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              )}
            />
          ) : (
            <View style={styles.containerLoading}>
              <ActivityIndicator size={50} color="#EC2626" />
            </View>
          )}

          <ModalExit
            modalExit={modalVisible}
            onPress={() => setModalVisible(!modalVisible)}
            logout={removeFilm}
          />
        </View>
      </View>
    </View>
  );
}
