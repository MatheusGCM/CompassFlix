import React from 'react';
import {Image, Text, View} from 'react-native';

// import { Container } from './styles';

const ListEmpty = ({txt, focused}) => {
  return (
    <View
      style={{
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 40, height: 40}}
        source={
          focused
            ? require('../../assets/seriesNotFocused.png')
            : require('../../assets/movieNotFocused.png')
        }
      />
      {txt && (
        <Text
          style={{
            marginTop: 5,
            width: '50%',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 14,
            fontFamily: 'OpenSans-Regular',
            textAlign: 'center',
          }}>
          {txt}
        </Text>
      )}
    </View>
  );
};

export default ListEmpty;
