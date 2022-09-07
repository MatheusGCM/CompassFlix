import React from 'react';
import {render} from '@testing-library/react-native';
import RatingAverage from '../src/Components/RatingAverage';

describe('RatingAverage', () => {
  describe('avaliação informada', () => {
    it('mostre a avaliação', () => {
      const {getByText} = render(<RatingAverage rating={5.5} />);
      expect(getByText(/5.5/)).toBeTruthy();
    });
    it('mostre o star icon', () => {
      const {getByTestId} = render(<RatingAverage rating={5.5} />);
      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });
  describe('avaliação NÃO informada', () => {
    it('mostre o tratamento', () => {
      const {getByText} = render(<RatingAverage />);
      expect(getByText(/0.0/)).toBeTruthy();
    });
  });
});
