import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import PlusIcon from 'react-native-vector-icons/Entypo';
import IconTrash from 'react-native-vector-icons/EvilIcons';

import {Context} from '../../context/account';
import {createListMovies, deleteList} from '../../services/api';
import ListEmpty from '../ListEmpty';
import ModalAddList from '../ModalAddList';
import ModalExit from '../GenericModal';

import style from './style';

export function ListComponent(data) {
  const {id, udapte, setUpdate} = useContext(Context);
  const [modalExit, setModalExit] = useState(false);
  const [modalAddList, setModalAddList] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [valueName, setValueName] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const [isShortName, setIsShortName] = useState(false);
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
  useEffect(() => {
    if (valueName.length > 0) {
      setIsShortName(false);
    }
  }, [valueName]);
  return (
    <>
      <FlatList
        data={data.data}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={
          <ListEmpty
            txt={'Sem listas no momento, clique no botão mais para adicionar.'}
          />
        }
        renderItem={({item}) => (
          <View style={style.flatListStyle}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('ListFilmPage', {list_id: item.id})
              }
              style={style.boxContent}>
              <View style={style.boxTxt}>
                <Text style={style.textList}>{item.name}</Text>
                <Text style={style.textList.size}>
                  {item.item_count} filmes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setModalExit(!modalExit);
                setDeleteId(item.id);
              }}
              style={style.buttonTrash}>
              <IconTrash name="trash" size={22} color="#EC26269C" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalAddList(!modalAddList)}
        style={style.buttonPlus}>
        <PlusIcon name="plus" size={28} color="black" />
      </TouchableOpacity>
      <ModalExit
        modalExit={modalExit}
        onPress={() => setModalExit(!modalExit)}
        logout={() => getResponseDeleteList(deleteId)}
        type={'RemoveList'}
      />
      <ModalAddList
        modalAddList={modalAddList}
        onPress={() => {
          setModalAddList(!modalAddList), setIsShortName(false);
        }}
        valueName={valueName}
        setValueName={setValueName}
        valueDescription={valueDescription}
        setValueDescription={setValueDescription}
        shortName={isShortName}
        action={() => {
          if (valueName <= 0) {
            setIsShortName(true);
          } else {
            setIsShortName(false);
            getResponseAddList(valueName, valueDescription),
              setValueName(''),
              setValueDescription('');
          }
        }}
      />
    </>
  );
}
