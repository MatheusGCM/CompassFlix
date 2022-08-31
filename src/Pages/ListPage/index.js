import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListComponent from '../../Components/ListComponent';
import {Context} from '../../context';
import {getUserList} from '../../service/api';
import style from './style';
import PlusIcon from 'react-native-vector-icons/Entypo';

export default function ListPage({navigation}) {
  const {id, user, udapte} = useContext(Context);
  const [listFilms, setListFilms] = useState({});

  useEffect(() => {
    const getResponseListFilms = async () => {
      const response = await getUserList(user.id, id);
      setListFilms(response.data);
    };
    getResponseListFilms();
  }, [id, user.id, udapte]);

  return (
    <View style={style.page}>
      <TouchableOpacity
        style={style.buttonBack}
        onPress={() => navigation.goBack()}>
        <Icon name="ios-arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <Text style={style.listText}>Minhas listas</Text>
      {listFilms.results?.length > 0 ? (
        <ListComponent data={listFilms.results} />
      ) : (
        <View>
          <Text style={{textAlign: 'center'}}>
            Sem listas de filmes, Clique no botão Mais para criar uma lista
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          marginBottom: 29,
          alignSelf: 'flex-end',
          padding: 10,
          marginRight: 10,
          borderRadius: 100,
        }}>
        <PlusIcon name="plus" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}
