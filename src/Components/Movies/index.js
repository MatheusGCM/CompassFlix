import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Movies = ({text, source}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
      <View style={styles.containerRow}>
        <Icon name="star" color="#EC2626" size={20} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Movies;
