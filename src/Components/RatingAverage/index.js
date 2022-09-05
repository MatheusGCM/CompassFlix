import React from 'react';
import {Text, View} from 'react-native';
import Star from 'react-native-vector-icons/Ionicons';

import styles from './style';

const RatingAverage = ({rating}) => {
  return (
    <View style={styles.flexRow}>
      <Star name="star" color="#EC2626" size={10} />
      <Text style={styles.txtRated}>{`${rating?.toFixed(1)}/10`}</Text>
    </View>
  );
};

export default RatingAverage;
