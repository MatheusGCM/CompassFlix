import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function ListPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>ListPage</Text>
      <TouchableOpacity
        style={{backgroundColor: 'black'}}
        onPress={() => navigation.navigate('ListFilmPage')}>
        <Text style={{color: 'white'}}>Botão Filmes Lista</Text>
      </TouchableOpacity>
    </View>
  );
}
