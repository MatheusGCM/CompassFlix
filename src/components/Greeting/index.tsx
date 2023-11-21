import React from 'react';
import {Text, View} from 'react-native';

import {Midia} from '@types';

import styles from './style';

type GreetingProps = {
  routeName: Midia;
  name: string;
  userName: string;
};

export function Greeting({routeName, userName, name}: GreetingProps) {
  const isMovie = routeName === 'movie';
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.header_title}>Olá,</Text>
        <Text style={styles.header_label}>{name ?? userName}</Text>
        <Text style={styles.header_text}>!</Text>
      </View>
      <View style={styles.marginBottom}>
        <Text style={styles.header_description}>
          Reveja ou acompanhe {isMovie ? 'os filmes' : 'as séries'} que você
          assistiu...
        </Text>
      </View>
      <View>
        <Text style={styles.title}>
          {isMovie ? 'Filmes' : 'Séries'} populares este mês
        </Text>
      </View>
    </>
  );
}
