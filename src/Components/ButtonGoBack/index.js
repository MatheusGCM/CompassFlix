import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowBack from 'react-native-vector-icons/Ionicons';

import styles from './style';

const ButtonGoBack = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.goBack()}
      style={styles.buttonBack}>
      <ArrowBack color="#000000" name="ios-arrow-back" size={25} />
    </TouchableOpacity>
  );
};

export default ButtonGoBack;
