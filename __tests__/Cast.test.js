import React from 'react';
import {render} from '@testing-library/react-native';
import Cast from '../src/Components/Cast';

describe('Cast', () => {
  describe('profile path NÃO informado', () => {
    it('renderize o icone', () => {
      const {getByTestId} = render(
        <Cast
          profile_path={''}
          original_name={'original_name'}
          character={'character'}
        />,
      );
      expect(getByTestId('icon')).toBeTruthy();
    });
  });
  describe('profile path informado', () => {
    it('renderize a imagem', () => {
      const {getByTestId} = render(
        <Cast
          profile_path={'profile_path'}
          original_name={'original_name'}
          character={'character'}
        />,
      );
      expect(getByTestId('imagem')).toBeTruthy();
    });
  });
});
