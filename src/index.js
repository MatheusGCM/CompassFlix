import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from './context';
import {Routes} from './Routes';

const App = () => {
  return (
    <Provider>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
