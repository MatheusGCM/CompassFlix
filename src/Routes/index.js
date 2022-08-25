import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import MoviePage from '../Pages/MoviePage';
import HomeSerie from '../Pages/HomeSerie';
import SeriePage from '../Pages/SeriePage';
import Profile from '../Pages/Profile';
import Favorites from '../Pages/Profile/Favorites';
import Rating from '../Pages/Profile/Rating';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default Routes;

const HomeStack = createNativeStackNavigator();

function MovieStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMovie" component={Home} />
      <HomeStack.Screen name="MoviePage" component={MoviePage} />
    </HomeStack.Navigator>
  );
}
function SerieStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeSerie" component={HomeSerie} />
      <HomeStack.Screen name="SeriePage" component={SeriePage} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Favorites" component={Favorites} />
      <HomeStack.Screen name="Rating" component={Rating} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
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
          position: 'absolute',
        },
      })}>
      <Tab.Screen name="seriesScreen" component={SerieStackScreen} />
      <Tab.Screen name="movieScreen" component={MovieStackScreen} />
      <Tab.Screen name="profileScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};
