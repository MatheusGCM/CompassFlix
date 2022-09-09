import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowBack from 'react-native-vector-icons/Ionicons';

import styles from './style';

const ButtonGoBack = ({navigation, SeriePage}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        SeriePage ? navigation.navigate('HomeSerie') : navigation.goBack();
      }}
      style={styles.buttonBack}>
      <ArrowBack
        testID="arrow"
        color="#000000"
        name="ios-arrow-back"
        size={25}
      />
    </TouchableOpacity>
  );
};

export default ButtonGoBack;
