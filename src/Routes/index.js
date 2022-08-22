import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackLogin} from './app_stack_login';
import {AppStackTabs} from './app_stack_tab';
import {Context} from '../context';

export function Routes() {
  const {user} = useContext(Context);
  return (
    <NavigationContainer>
      {user ? <AppStackTabs /> : <AppStackLogin />}
    </NavigationContainer>
  );
}
