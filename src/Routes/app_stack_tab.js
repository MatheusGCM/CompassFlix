import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import MoviePage from '../Pages/MoviePage';
import HomeSerie from '../Pages/HomeSerie';
import SeriePage from '../Pages/SeriePage';
import Profile from '../Pages/Profile';
import Favorites from '../Pages/Profile/Favorites';
import Rating from '../Pages/Profile/Rating';
import {Image} from 'react-native';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

export function AppStackTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 54,
          backgroundColor: '#454545',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/seriesFocused.png')} />
            ) : (
              <Image source={require('../assets/series.png')} />
            ),
        }}
        name="seriesScreen"
        component={SerieStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/movieFocused.png')} />
            ) : (
              <Image source={require('../assets/movie.png')} />
            ),
        }}
        name="movieScreen"
        component={MovieStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/perfilFocused.png')} />
            ) : (
              <Image source={require('../assets/perfil.png')} />
            ),
        }}
        name="profileScreen"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
}
