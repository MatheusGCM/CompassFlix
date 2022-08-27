import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const Greeting = ({screen, user}) => {
  return screen === 'HomeMovie' ? (
    <>
      <View style={styles.row}>
        <Text style={styles.header_title}>Olá,</Text>
        <Text style={styles.header_label}>{user.name}</Text>
        <Text style={styles.header_text}>!</Text>
      </View>
      <View style={styles.marginBottom}>
        <Text style={styles.header_description}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Filmes populares este mês</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.row}>
        <Text style={styles.header_title}>Olá,</Text>
        <Text style={styles.header_label}>{user.name}</Text>
        <Text style={styles.header_text}>!</Text>
      </View>
      <View style={styles.marginBottom}>
        <Text style={styles.header_description}>
          Reveja ou acompanhe as séries que você assistiu...
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Séries populares este mês</Text>
      </View>
    </>
  );
};

export default Greeting;
