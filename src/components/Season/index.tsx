import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';

import {Episode} from '@types';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';

type SeasonProps = {
  name: string;
  season_number: number;
  episodes: Episode[];
};

export function Season({name, season_number, episodes}: SeasonProps) {
  const [visibleEpisodes, setVisibleEpisodes] = useState(false);
  const handleSeasonPress = () => {
    setVisibleEpisodes(!visibleEpisodes);
  };
  return season_number !== 0 ? (
    <View>
      <Pressable style={styles.container} onPress={handleSeasonPress}>
        <Text style={styles.txtSeason}>{name}</Text>
        <Feather
          // name={
          //   visible && season_number === seasonSelected
          //     ? 'chevron-up'
          //     : 'chevron-down'
          // }
          name={'chevron-down'}
          color={'#fff'}
          size={15}
        />
      </Pressable>
      {/* {visibleEpisodes && (
        <FlatList
          data={episodes}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({item}) => (
            <View key={String(item.id)} style={styles.contentEpisodes}>
              <Text style={styles.titleEpisodes}>
                {season_number !== 0
                  ? `T${String(season_number).padStart(2, '0')} | E${String(
                      item.episode_number,
                    ).padStart(2, '0')}`
                  : `${name}`}
              </Text>
              <Text style={styles.nameEpisodes}>
                {season_number !== 0
                  ? item.name
                    ? item.name
                    : `Episódio ${item.episode_number}`
                  : item.name}
              </Text>
            </View>
          )}
        />
      )} */}
    </View>
  ) : null;
}
