import React from 'react';
import {ActivityIndicator} from 'react-native';

import styles from './styles';

export function Loading(load) {
  if (!load) {
    return;
  }
  return <ActivityIndicator style={styles.loading} size={25} color={'red'} />;
}
