import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {useAccountContext} from '@context/account';
import {account} from '@services';
import {midia} from '@services';
import {NavProps, MidiaResultResponse} from '@types';

import {ButtonAvatar, Card, Greeting, Loading} from '@components';

import styles from './style';

import {getMidiaName} from '~utils';

export function Home({navigation, route}: NavProps<'HomeMovie' | 'HomeSerie'>) {
  const midiaName = getMidiaName(route.name) ? 'movie' : 'tv';
  const {userData, setUserData, setMidiaValues} = useAccountContext();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [midiaData, setMidiaData] = useState<MidiaResultResponse[]>([]);

  const getResponseAccount = async () => {
    try {
      setLoading(true);
      const data = await account.getAccount();
      setUserData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPopularList = async () => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      const {results} = await midia.getPopularList(midiaName, page);
      setMidiaData([...midiaData, ...results]);

      setPage(page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const pressedCard = (midiaId: number) => {
    setMidiaValues({id: midiaId, type: midiaName});
    navigation.navigate(midiaName === 'movie' ? 'MoviePage' : 'SeriePage');
  };

  useEffect(() => {
    getResponseAccount();
    getPopularList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonAvatar user={userData} navigation={navigation} />
        <Greeting
          routeName={midiaName}
          name={userData.name}
          userName={userData.username}
        />
      </View>

      <FlatList
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        data={midiaData}
        keyExtractor={item => String(item.id)}
        onEndReached={getPopularList}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading load={loading} />}
        renderItem={({item}) => (
          <Card
            {...item}
            width={76}
            height={95}
            borderRadius={10}
            margin={9}
            rated
            onPress={() => pressedCard(item.id)}
          />
        )}
      />
    </View>
  );
}
