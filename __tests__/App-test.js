import React, {useState} from 'react';
import {render} from '@testing-library/react-native';
import {Text, View} from 'react-native';
import {EmailPasswordField} from '../src/Components/EmailPasswordField';

test('campo senha faz algo', () => {
  render(<EmailPasswordField />);
});
