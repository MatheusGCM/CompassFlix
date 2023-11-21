import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './style';

type RatingAverageProps = {
  rating: number;
};

export function RatingAverage({rating}: RatingAverageProps) {
  return (
    <View style={styles.flexRow}>
      <Image testID="starIcon" source={require('../../assets/starRated.png')} />
      <Text style={styles.txtRated}>
        {rating
          ? `${rating === 10 ? rating : rating?.toFixed(1)}/10`
          : '0.0/10'}
      </Text>
    </View>
  );
}
