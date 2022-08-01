import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
