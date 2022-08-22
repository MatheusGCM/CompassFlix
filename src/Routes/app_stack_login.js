import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../Pages/Login';
import {AppStackTabs} from './app_stack_tab';

const Stack = createNativeStackNavigator();

export function AppStackLogin() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={AppStackTabs} />
    </Stack.Navigator>
  );
}
