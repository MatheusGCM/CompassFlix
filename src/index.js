import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {StatusBar} from 'react-native';
import {Provider} from './context';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
