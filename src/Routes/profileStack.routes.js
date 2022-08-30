import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../Pages/Profile';
import Favorites from '../Pages/Profile/Favorites';
import Rating from '../Pages/Profile/Rating';
import ListPage from '../Pages/ListPage';
import ListFilmPage from '../Pages/ListFilmPage';

const {Navigator, Screen} = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Profile" component={Profile} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Rating" component={Rating} />
      <Screen name="ListPage" component={ListPage} />
      <Screen name="ListFilmPage" component={ListFilmPage} />
    </Navigator>
  );
};

export default ProfileStackScreen;
