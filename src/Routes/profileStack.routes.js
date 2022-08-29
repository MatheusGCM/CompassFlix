import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../Pages/Profile';
import Favorites from '../Pages/Profile/Favorites';
import Rating from '../Pages/Profile/Rating';

const {Navigator, Screen} = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Profile" component={Profile} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Rating" component={Rating} />
    </Navigator>
  );
};

export default ProfileStackScreen;
