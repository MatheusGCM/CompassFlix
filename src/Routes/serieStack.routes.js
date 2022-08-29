import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Pages/Home';
import SeriePage from '../Pages/SeriePage';

const {Navigator, Screen} = createNativeStackNavigator();

const SerieStackScreen = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeSerie" component={Home} />
      <Screen name="SeriePage" component={SeriePage} />
    </Navigator>
  );
};

export default SerieStackScreen;
