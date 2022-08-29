import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Pages/Home';
import MoviePage from '../Pages/MoviePage';

const {Navigator, Screen} = createNativeStackNavigator();

const MovieStackScreen = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="HomeMovie" component={Home} />
      <Screen name="MoviePage" component={MoviePage} />
    </Navigator>
  );
};

export default MovieStackScreen;
