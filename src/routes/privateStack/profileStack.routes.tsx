import React from 'react';

import ListFilmPage from '@pages/ListFilmPage';
import ListPage from '@pages/ListPage';
import {MidiaPage} from '@pages/MidiaPage';
import {Profile} from '@pages/Profile';
import Favorites from '@pages/Profile/Favorites';
import Rating from '@pages/Profile/Rating';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Profile" component={Profile} />
      <Screen name="MoviePage" component={MidiaPage} />
      <Screen name="SeriePage" component={MidiaPage} />
      {/* <Screen name="Favorites" component={Favorites} />
      <Screen name="Rating" component={Rating} />
      <Screen name="ListPage" component={ListPage} />
      <Screen name="ListFilmPage" component={ListFilmPage} /> */}
    </Navigator>
  );
}
