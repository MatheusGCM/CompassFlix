import React from 'react';

import {Home} from '@pages/Home';
import {MidiaPage} from '@pages/MidiaPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export function MovieStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeMovie" component={Home} />
      <Screen name="MoviePage" component={MidiaPage} />
    </Navigator>
  );
}
