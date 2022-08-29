import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Pages/Login';
import Tabs from './tab.routes';

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
