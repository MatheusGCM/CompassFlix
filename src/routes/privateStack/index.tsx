import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MovieStack} from './movieStack.routes';
import {ProfileStack} from './profileStack.routes';
import {SerieStack} from './serieStack.routes';

import {tabBarIcon} from '~utils';

const {Navigator, Screen} = createBottomTabNavigator();

export function PrivateStack() {
  return (
    <Navigator
      initialRouteName="Movie"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icon = tabBarIcon(route.name, focused);
          return <Image source={icon} />;
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
      <Screen name="ProfileStack" component={ProfileStack} />
    </Navigator>
  );
}
