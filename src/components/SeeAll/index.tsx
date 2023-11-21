import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {Midia} from '@types';

import styles from './style';

type SeeAllProps = {
  focused: Midia;
  name: string;
  onPress?(): void;
  type?: 'favorite' | 'rated';
};

export function SeeAll({
  focused,
  name,
  type = 'favorite',
  onPress,
}: SeeAllProps) {
  const text =
    type === 'favorite'
      ? `${
          focused === 'movie' ? 'Filmes favoritos' : 'Séries favoritas'
        } de ${name}`
      : `Avaliações de ${
          focused === 'movie' ? 'filmes' : 'séries'
        } recentes de ${name}`;
  return (
    <View style={styles.containerSeeAll}>
      <Text style={[styles.textInfo, {color: 'white'}]}>{text}</Text>
      <Text style={styles.textInfo}></Text>
      <Pressable onPress={onPress}>
        <Text style={[styles.textInfo, {color: '#E9A6A6'}]}>Ver tudo</Text>
      </Pressable>
    </View>
  );
}
