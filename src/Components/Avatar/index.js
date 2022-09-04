import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Avatar = ({user, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.header_avatar}
      onPress={() => navigation.navigate('profileScreen')}>
      {user.avatar?.tmdb.avatar_path ? (
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w92/${user.avatar?.tmdb.avatar_path}`,
          }}
          style={styles.img}
        />
      ) : (
        <Icon name="person-circle" color="rgba(255,255,255,0.4)" size={44} />
      )}
    </TouchableOpacity>
  );
};

export default Avatar;
