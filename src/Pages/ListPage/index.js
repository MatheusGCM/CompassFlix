import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListComponent from '../../Components/ListComponent';
import {Context} from '../../context';
import {getUserList} from '../../service/api';
import style from './style';

export default function ListPage({navigation}) {
  const {id, user, udapte} = useContext(Context);
  const [listFilms, setListFilms] = useState({});
  useEffect(() => {
    const getResponseListMovies = async () => {
      const response = await getUserList(user.id, id);
      setListFilms(response.data);
    };
    getResponseListMovies();
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
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Sem listas de filmes, Clique no botão Mais para criar uma lista
          </Text>
        </View>
      )}
    </View>
  );
}
