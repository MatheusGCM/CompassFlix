import React, {useContext, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import IconTrash from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import {createListMovies, deleteList} from '../../service/api';
import ModalExit from '../ModalExit';
import PlusIcon from 'react-native-vector-icons/Entypo';
import style from './style';
import ModalAddList from '../ModalAddList';
import {useNavigation} from '@react-navigation/native';

export default function ListComponent(data) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [modalExit, setModalExit] = useState(false);
  const [modalAddList, setModalAddList] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [valueName, setValueName] = useState('');
  const [valueDescription, setValueDescription] = useState('');

  const navigation = useNavigation();
  const getResponseDeleteList = async list_id => {
    await deleteList(list_id, id);
    setUpdate(!udapte);
    setModalExit(!modalExit);
  };
  const getResponseAddList = async (name, description) => {
    await createListMovies(id, name, description);
    setUpdate(!udapte);
    setModalAddList(!modalAddList);
  };
  return (
    <>
      <FlatList
        data={data.data}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={
          data.data.length > 3
            ? () => (
                <TouchableOpacity
                  style={style.buttonPlus}
                  onPress={() => setModalAddList(!modalAddList)}>
                  <PlusIcon name="plus" size={28} color="black" />
                </TouchableOpacity>
              )
            : null
        }
        renderItem={({item}) => (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingBottom: 16,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListFilmPage', {list_id: item.id})
              }
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
                {item.name}
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
              onPress={() => {
                setModalExit(!modalExit), setDeleteId(item.id);
              }}
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
              logout={() => getResponseDeleteList(deleteId)}
              type={'RemoveList'}
            />
            <ModalAddList
              modalAddList={modalAddList}
              onPress={() => setModalAddList(!modalAddList)}
              valueName={valueName}
              setValueName={setValueName}
              valueDescription={valueDescription}
              setValueDescription={setValueDescription}
              action={() => {
                getResponseAddList(valueName, valueDescription),
                  setValueName(''),
                  setValueDescription('');
              }}
            />
          </View>
        )}
      />
      {data.data.length <= 3 && !modalAddList ? (
        <TouchableOpacity
          style={{
            display: 'flex',
            backgroundColor: 'pink',
            alignSelf: 'flex-end',
            padding: 10,
            marginBottom: 52,
            marginRight: 18,
            borderRadius: 100,
          }}
          onPress={() => setModalAddList(!modalAddList)}>
          <PlusIcon name="plus" size={28} color="black" />
        </TouchableOpacity>
      ) : null}
    </>
  );
}
