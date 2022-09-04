import React from 'react';
import {render} from '@testing-library/react-native';
import ButtonFavorite from '../src/Components/ButtonFavorite';

test('Componente renderizado', () => {
  render(<ButtonFavorite />);
});
