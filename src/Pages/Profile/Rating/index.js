import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import {Context} from '../../../context';
import {getRatedMovie, getRatedSeries} from '../../../service/api';
import Load from '../../../Components/Load';
import Midia from '../../../Components/Midia';
import ButtonGoBack from '../../../Components/ButtonGoBack';

const Rating = ({navigation, route}) => {
  const {id, user, udapte} = useContext(Context);
  const [rated, setRated] = useState();

  useEffect(() => {
    if (route.params?.focused) {
      const getResponseRatedMovies = async () => {
        const response = await getRatedMovie(id, user.id);
        setRated(response.data.results);
      };
      getResponseRatedMovies();
    } else {
      const getResponseRatedSeries = async () => {
        const response = await getRatedSeries(id, user.id);
        setRated(response.data.results);
      };
      getResponseRatedSeries();
    }
  }, [id, route.params?.focused, user.id, udapte]);

  return rated ? (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={{marginStart: 10}}>
              <ButtonGoBack navigation={navigation} />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTxt}>
                {route.params?.focused
                  ? 'Avaliações de filmes recentes de'
                  : 'Avaliações de séries recentes de'}
                <Text style={styles.headerTxt.userName}> {user.name}</Text>
                <Text style={styles.headerTxt}>!</Text>
              </Text>
            </View>
          </>
        )}
        contentContainerStyle={{marginHorizontal: 5, marginTop: 15}}
        data={rated}
        keyExtractor={item => String(item.id)}
        numColumns={4}
        renderItem={({item}) => (
          <Midia
            {...item}
            focused={route.params?.focused}
            navigation={navigation}
            rated={true}
          />
        )}
      />
    </View>
  ) : (
    <Load />
  );
};

export default Rating;
