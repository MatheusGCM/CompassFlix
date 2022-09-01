import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
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
          <View style={style.flatListStyle}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListFilmPage', {list_id: item.id})
              }
              style={style.buttonList}>
              <Text style={style.textNameList}>{item.name}</Text>
              <Text style={style.textMovies}>{item.item_count} filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalExit(!modalExit), setDeleteId(item.id);
              }}
              style={style.buttonTrash}>
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
          style={style.buttonPlusResponsive}
          onPress={() => setModalAddList(!modalAddList)}>
          <PlusIcon name="plus" size={28} color="black" />
        </TouchableOpacity>
      ) : null}
    </>
  );
}
