import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

import styles from './style';

export function Load() {
  return (
    <View style={styles.loading}>
      <Image source={require('@assets/logo.png')} />
      <ActivityIndicator size={50} color="#EC2626" />
    </View>
  );
}
