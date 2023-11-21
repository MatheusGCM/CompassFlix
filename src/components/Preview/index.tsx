import React from 'react';
import {FlatList, Image, View} from 'react-native';

import {useAccountContext} from '@context/account';
import {Midia, Results} from '@types';

import {Card, SeeAll} from '@components';

type PreviewProps = {
  data: Results[];
  focused: Midia;
  pressedCard(mediaId: number): void;
  pressedSeeAll(): void;
  type?: 'favorite' | 'rated';
};

export function Preview({
  data,
  focused,
  type = 'favorite',
  pressedCard,
  pressedSeeAll,
}: PreviewProps) {
  const {userData} = useAccountContext();
  const ratedType = type === 'rated';

  const listEmptyComponent = () => {
    return (
      <View
        style={{
          height: 89,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={
            focused === 'movie'
              ? require('../../assets/movieNotFocused.png')
              : require('../../assets/seriesNotFocused.png')
          }
        />
      </View>
    );
  };

  const itemSeparatorComponent = () => <View style={{width: 12}} />;

  const renderItem = ({item}: {item: Results}) => {
    return (
      <Card
        {...item}
        rated={ratedType}
        vote_average={item.rating}
        width={ratedType ? 58 : 67}
        height={ratedType ? 82 : 89}
        borderRadius={7}
        onPress={() => pressedCard(item.id)}
      />
    );
  };

  return (
    <View>
      <SeeAll
        type={type}
        focused={focused}
        name={userData.name}
        onPress={pressedSeeAll}
      />
      <FlatList
        ItemSeparatorComponent={itemSeparatorComponent}
        ListEmptyComponent={listEmptyComponent}
        style={{alignSelf: 'center'}}
        data={data?.slice(0, ratedType ? 5 : 4)}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
}
