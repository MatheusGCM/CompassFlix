import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Rating = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={22} color="black" />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 70,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{fontFamily: 'OpenSans-Bold', fontSize: 20, color: 'white'}}>
          Filmes Favoritos do
        </Text>
        <Text
          style={{fontFamily: 'OpenSans-Bold', fontSize: 20, color: '#E9A6A6'}}>
          {' '}
          John
        </Text>
        <Text
          style={{fontFamily: 'OpenSans-Bold', fontSize: 20, color: 'white'}}>
          !
        </Text>
      </View>
      <FlatList />
    </View>
  );
};

export default Rating;
