import React from 'react';

import {Home} from '@pages/Home';
import {MidiaPage} from '@pages/MidiaPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export function SerieStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeSerie" component={Home} />
      <Screen name="SeriePage" component={MidiaPage} />
    </Navigator>
  );
}
