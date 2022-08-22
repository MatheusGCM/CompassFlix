import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Series = memo(({text, poster_path, id, stack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(stack, {
            id: id,
          })
        }>
        <Image
          style={styles.image}
          source={{uri: `http://image.tmdb.org/t/p/w185/${poster_path}`}}
        />
      </TouchableOpacity>
      <View style={styles.containerRow}>
        <Icon name="star" color="#EC2626" size={20} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
});

export default Series;
