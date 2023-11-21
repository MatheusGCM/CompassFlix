import React from 'react';
import {Image, Pressable} from 'react-native';

import styles from './style';

type ButtonFavoriteProps = {
  onPress?(): void;
  favorited: boolean;
};

export function ButtonFavorite({onPress, favorited}: ButtonFavoriteProps) {
  return (
    <Pressable style={styles.buttonRight} onPress={onPress}>
      <Image
        testID="star"
        source={
          favorited
            ? require('../../assets/starSelected.png')
            : require('../../assets/star.png')
        }
      />
    </Pressable>
  );
}
