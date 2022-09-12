import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Eye from 'react-native-vector-icons/Ionicons';
import Pencil from 'react-native-vector-icons/EvilIcons';
import {getMoviesDetailsList, removeMovieList} from '../../service/api';
import ModalExit from '../../Components/ModalExit';
import {Context} from '../../context';
import ButtonGoBack from '../../Components/ButtonGoBack';
import styles from './style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ListEmpty from '../../Components/ListEmpty';

export default function ListFilmPage({route, navigation}) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [state, setState] = useState(false);
  const [moviesDetailsList, setMoviesDetailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmSelected, setFilmSelected] = useState();
  const [translateX] = useState(new Animated.Value(0));

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
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const edit = () => {
    setTimeout(() => {
      setState(true);
    }, 20);
    Animated.timing(translateX, {
      toValue: 37,
      duration: 500,
      useNativeDriver: true,
    }).start();
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
            <Eye name="eye" size={16} color={state ? '#000' : '#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!moviesDetailsList.items?.length}
            activeOpacity={1}
            onPress={edit}
            style={styles.btnPencil}>
            <Pencil name="pencil" size={21} color={state ? '#fff' : '#000'} />
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
                    <Image
                      style={{
                        marginEnd: (index + 1) % 4 == 0 ? 0 : 13,
                        width: 80,
                        height: 100,
                        borderRadius: 10,
                        marginBottom: 18,
                        opacity: state ? 0.5 : 1,
                      }}
                      source={{
                        uri: `http://image.tmdb.org/t/p/w154/${item.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
                  {state && (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setFilmSelected(item.id);
                      }}
                      style={{
                        width: 18,
                        height: 18,
                        backgroundColor: '#fff',
                        borderRadius: 9,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: (index + 1) % 4 == 0 ? -5 : 5,
                        top: -5,
                      }}>
                      <View
                        style={{
                          width: 7,
                          height: 1,
                          backgroundColor: '#EC2626',
                        }}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            />
          ) : (
            <View
              style={{
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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
