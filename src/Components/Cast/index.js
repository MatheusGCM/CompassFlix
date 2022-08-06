import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cast = ({profile_path, original_name, character}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 13}}>
      {profile_path ? (
        <Image
          source={{uri: `http://image.tmdb.org/t/p/w92/${profile_path}`}}
          style={{width: 40, height: 40, borderRadius: 20, marginEnd: 10}}
        />
      ) : (
        <View
          style={{
            width: 40,
            height: 40,
            marginEnd: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 20,
          }}>
          <Icon name="account" size={30} color="rgba(255,255,255,0.1)" />
        </View>
      )}

      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            lineHeight: 20,
            color: '#fff',
          }}>
          {original_name}
        </Text>
        <Text
          style={{
            fontSize: 8,
            fontWeight: '400',
            lineHeight: 10,
            color: '#fff',
          }}>
          {character}
        </Text>
      </View>
    </View>
  );
};

export default Cast;
