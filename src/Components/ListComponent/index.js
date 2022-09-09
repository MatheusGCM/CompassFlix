import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import IconTrash from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context';
import {createListMovies, deleteList} from '../../service/api';
import ModalExit from '../ModalExit';
import PlusIcon from 'react-native-vector-icons/Entypo';
import style from './style';
import ModalAddList from '../ModalAddList';

export default function ListComponent(data) {
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
          <View>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Sem lista de filmes! Para adicionar uma nova lista clique no botão
              mais
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <View style={style.flatListStyle}>
            <TouchableOpacity
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
