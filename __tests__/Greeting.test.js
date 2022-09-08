import React from 'react';
import {render} from '@testing-library/react-native';
import Greeting from '../src/Components/Greeting';

test('Componente renderizado', () => {
  render(<Greeting user={{name: 'username'}} />);
});
