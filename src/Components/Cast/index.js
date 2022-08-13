import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const Cast = ({profile_path, original_name, character}) => {
  return (
    <View style={styles.container}>
      {profile_path ? (
        <Image
          source={{uri: `http://image.tmdb.org/t/p/w92/${profile_path}`}}
          style={styles.imgProfile}
        />
      ) : (
        <View style={styles.noHaveImgProfile}>
          <Icon name="account" size={30} color="rgba(255,255,255,0.1)" />
        </View>
      )}

      <View>
        <Text style={styles.txtName}>{original_name}</Text>
        <Text style={styles.txtCharacter}>{character}</Text>
      </View>
    </View>
  );
};

export default Cast;
