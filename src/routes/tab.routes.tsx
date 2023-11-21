import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MovieStack} from './privateStack/movieStack.routes';
import {ProfileStack} from './privateStack/profileStack.routes';
import {SerieStack} from './privateStack/serieStack.routes';

const {Navigator, Screen} = createBottomTabNavigator();

export function Tabs() {
  return (
    <Navigator
      initialRouteName="movieScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let img;
          if (route.name === 'seriesScreen') {
            img = focused ? (
              <Image source={require('../assets/seriesFocused.png')} />
            ) : (
              <Image source={require('../assets/series.png')} />
            );
          } else if (route.name === 'movieScreen') {
            img = focused ? (
              <Image source={require('../assets/movieFocused.png')} />
            ) : (
              <Image source={require('../assets/movie.png')} />
            );
          } else if (route.name === 'profileScreen') {
            img = focused ? (
              <Image source={require('../assets/perfilFocused.png')} />
            ) : (
              <Image source={require('../assets/perfil.png')} />
            );
          }
          return img;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 54,
          backgroundColor: '#454545',
          borderTopWidth: 0,
        },
      })}>
      <Screen name="Serie" component={SerieStack} />
      <Screen name="Movie" component={MovieStack} />
      <Screen name="Profile" component={ProfileStack} />
    </Navigator>
  );
}
