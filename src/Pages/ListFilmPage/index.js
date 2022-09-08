import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
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

export default function ListFilmPage({route, navigation}) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [state, setState] = useState(false);
  const [moviesDetailsList, setMoviesDetailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmSelected, setFilmSelected] = useState();

  useEffect(() => {
    const responseDetailsList = async () => {
      const response = await getMoviesDetailsList(route.params.list_id);
      setMoviesDetailsList(response.data);
    };
    responseDetailsList();
  }, [route.params.list_id, udapte]);

  const removeFilm = async () => {
    await removeMovieList(route.params.list_id, id, filmSelected);
    setUpdate(!udapte);
    setModalVisible(!modalVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: 17,
          marginBottom: 32,
        }}>
        <ButtonGoBack navigation={navigation} />
        <View
          style={{
            flexDirection: 'row',
            width: 76,
            height: 25,
            backgroundColor: '#fff',
            borderRadius: 20,
            borderColor: '#E9A6A6',
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setState(false)}
            style={{
              backgroundColor: state ? '#fff' : '#E9A6A6',
              width: '50%',
              height: '100%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Eye name="eye" size={16} color={state ? '#000' : '#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!moviesDetailsList.items?.length}
            activeOpacity={1}
            onPress={() => setState(true)}
            style={{
              backgroundColor: state ? '#E9A6A6' : '#fff',
              width: '50%',
              height: '100%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pencil name="pencil" size={21} color={state ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{width: '65%', marginBottom: 25}}>
          <Text
            style={{
              color: '#E9A6A6',
              fontFamily: 'OpenSans-Bold',
              fontSize: 20,
              lineHeight: 27,
              textAlign: 'center',
            }}>
            {moviesDetailsList.name}
          </Text>
        </View>
        <View style={{width: '95%'}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              lineHeight: 12,
              textAlign: 'justify',
            }}>
            {moviesDetailsList.description}
          </Text>
        </View>
        <View style={{width: '95%'}}>
          {moviesDetailsList.items ? (
            <FlatList
              contentContainerStyle={{
                height: '90%',
                paddingTop: 30,
              }}
              data={moviesDetailsList.items}
              keyExtractor={item => String(item.id)}
              numColumns={4}
              ListEmptyComponent={() => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('movieScreen')}
                  style={{
                    height: '70%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 40, height: 40}}
                    source={require('../../assets/movie.png')}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      width: '50%',
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 14,
                      fontFamily: 'OpenSans-Regular',
                      textAlign: 'center',
                    }}>
                    Sem filmes na lista, clique para adicionar.
                  </Text>
                </TouchableOpacity>
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
