import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import MoviePage from '../Pages/MoviePage';
import {Image, Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
};

export default Routes;

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MoviePage" component={MoviePage} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 54,
          backgroundColor: '#454545',
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/tabIcon.png')} />
          ),
        }}
        name="homeScreen"
        component={HomeStackScreen}
      />
    </Tab.Navigator>
  );
};
