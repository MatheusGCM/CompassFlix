import React from 'react';
import {StatusBar} from 'react-native';

import {AccountProvider} from '@context/account';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from '@routes';

const App = () => {
  return (
    <AccountProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    </AccountProvider>
  );
};

export default App;
