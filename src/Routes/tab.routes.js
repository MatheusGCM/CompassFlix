import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import SerieStackScreen from './serieStack.routes';
import MovieStackScreen from './movieStack.routes';
import ProfileStackScreen from './profileStack.routes';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
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
      <Screen name="seriesScreen" component={SerieStackScreen} />
      <Screen name="movieScreen" component={MovieStackScreen} />
      <Screen name="profileScreen" component={ProfileStackScreen} />
    </Navigator>
  );
};

export default Tabs;
