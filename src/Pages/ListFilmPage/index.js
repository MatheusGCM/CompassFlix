import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ArrowBack from 'react-native-vector-icons/Ionicons';
import Eye from 'react-native-vector-icons/Ionicons';
import Pencil from 'react-native-vector-icons/EvilIcons';
import {getFilmsDetailsList, removeMovieList} from '../../service/api';
import Midia from '../../Components/Midia';
import ModalExit from '../../Components/ModalExit';
import {Context} from '../../context';

export default function ListFilmPage({route, navigation}) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [state, setState] = useState(false);
  const [filmsDetailsList, setFilmsDetailsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmSelected, setFilmSelected] = useState();

  useEffect(() => {
    const responseDetailsList = async () => {
      const response = await getFilmsDetailsList(route.params.id);
      setFilmsDetailsList(response.data);
    };
    responseDetailsList();
  }, [route.params.id, udapte]);

  const removeFilm = async () => {
    await removeMovieList(route.params.id, id, filmSelected);
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
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
          }}
          onPress={() => navigation.goBack()}>
          <ArrowBack name="ios-arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: 76,
            height: 25,
            backgroundColor: '#fff',
            borderRadius: 20,
            borderColor: '#E9A6A6',
            borderWidth: 1,
            // justifyContent: 'space-around',
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
            {filmsDetailsList.name}
          </Text>
        </View>
        <View style={{width: '95%'}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'OpenSans-Regular',
              fontSize: 9,
              lineHeight: 12,
              textAlign: 'justify',
            }}>
            {filmsDetailsList.description}
          </Text>
        </View>
        <View style={{width: '95%'}}>
          <FlatList
            contentContainerStyle={{
              paddingTop: 30,
            }}
            data={filmsDetailsList.items}
            keyExtractor={item => String(item.id)}
            numColumns={4}
            renderItem={({item}) => (
              <Midia
                poster_path={item.poster_path}
                id={item.id}
                focused={true}
                state={state}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setFilmSelected(item.id);
                }}
              />
            )}
          />
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
