import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Movies = ({text, source}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MoviePage')}>
      <Image style={styles.image} source={source} />
      <View style={styles.containerRow}>
        <Icon name="star" color="#EC2626" size={20} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Movies;
