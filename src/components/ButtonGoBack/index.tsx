import React from 'react';
import {Pressable} from 'react-native';

import ArrowBack from 'react-native-vector-icons/Ionicons';

import styles from './style';

type ButtonGoBackProps = {
  onPress?(): void;
};

export function ButtonGoBack({onPress}: ButtonGoBackProps) {
  return (
    <Pressable onPress={onPress} style={styles.buttonBack}>
      <ArrowBack
        testID="arrow"
        color="#000000"
        name="ios-arrow-back"
        size={25}
      />
    </Pressable>
  );
}
