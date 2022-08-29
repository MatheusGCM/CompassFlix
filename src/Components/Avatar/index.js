import React from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Avatar = ({user}) => {
  return user.avatar?.tmdb.avatar_path ? (
    <View style={styles.header_avatar}>
      <Image
        source={{
          uri: `http://image.tmdb.org/t/p/w92/${user.avatar?.tmdb.avatar_path}`,
        }}
        style={styles.img}
      />
    </View>
  ) : (
    <View style={styles.header_avatar}>
      <Icon name="person-circle" color="rgba(255,255,255,0.4)" size={44} />
    </View>
  );
};

export default Avatar;
