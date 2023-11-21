import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {Context} from '@context/account';
import {getUserList} from '@services/api';

import {ButtonGoBack, ListComponent, Loading} from '@components';

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
        <>
          <ListComponent data={listFilms.results} />
        </>
      )}
    </View>
  );
}
