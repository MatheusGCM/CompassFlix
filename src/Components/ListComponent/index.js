import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import IconTrash from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import {deleteList} from '../../service/api';
import ModalExit from '../ModalExit';

export default function ListComponent(data) {
  const navigation = useNavigation();
  const {id, udapte, setUpdate} = useContext(Context);
  const [modalExit, setModalExit] = useState(false);

  const getResponseDeleteList = async list_id => {
    await deleteList(list_id, id);
    setUpdate(!udapte);
    setModalExit(!modalExit);
  };
  return (
    <FlatList
      data={data.data}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <View style={{width: '100%', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListFilmPage', {id: item.id})}
            style={{
              backgroundColor: '#8F9AFC',
              height: 100,
              width: '88%',
              flexGrow: 0,
              paddingLeft: 37,
              paddingVertical: 20,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              borderColor: '#E9A6A6',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                width: 120,
                fontFamily: 'OpenSans-Medium',
              }}>
              {item.description}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                paddingTop: 14,
                fontFamily: 'OpenSans-Bold',
              }}>
              {item.item_count} filmes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalExit(!modalExit)}
            style={{
              backgroundColor: '#E9A6A6',
              borderColor: '#E9A6A6',
              width: 40,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconTrash name="trash" size={28} color="#EC26269C" />
          </TouchableOpacity>
          <ModalExit
            modalExit={modalExit}
            onPress={() => setModalExit(!modalExit)}
            logout={() => getResponseDeleteList(item.id)}
            type={'RemoveList'}
          />
        </View>
      )}
    />
  );
}
