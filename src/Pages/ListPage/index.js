import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonGoBack from '../../Components/ButtonGoBack';
import ListComponent from '../../Components/ListComponent';
import Loading from '../../Components/Loading';
import {Context} from '../../context';
import {getUserList} from '../../service/api';
import style from './style';

export default function ListPage({navigation}) {
  const {id, user, udapte} = useContext(Context);
  const [listFilms, setListFilms] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getResponseListMovies = async () => {
      const response = await getUserList(user.id, id);
      setListFilms(response.data);
      setLoading(true);
    };
    getResponseListMovies();
  }, [id, user.id, udapte]);

  return (
    <View style={style.page}>
      <View style={style.flexStart}>
        <ButtonGoBack navigation={navigation} />
      </View>
      <Text style={style.listText}>Minhas listas</Text>
      {!loading ? (
        <Loading load={loading} />
      ) : (
        <ListComponent data={listFilms.results} />
      )}
    </View>
  );
}
