import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ButtonFavorite from '../src/Components/ButtonFavorite';

describe('ButtonFavorite', () => {
  const favoriteMock = jest.fn();
  describe('favorito NÃO selecionado', () => {
    it('mostre o star icon sem preenchimento', () => {
      const {getByTestId} = render(<ButtonFavorite favorite={false} />);
      expect(getByTestId('starNoSelected')).toBeTruthy();
    });
    it('chame a função favoritar quando o botão for pressionado', () => {
      const {getByTestId} = render(
        <ButtonFavorite onPress={favoriteMock} favorite={false} />,
      );
      fireEvent.press(getByTestId('starNoSelected'));
      expect(favoriteMock).toBeCalled();
    });
  });
  describe('favorito selecionado', () => {
    it('mostre o star icon preenchido', () => {
      const {getByTestId} = render(<ButtonFavorite favorite={true} />);
      expect(getByTestId('starSelected')).toBeTruthy();
    });
    it('chame a função favoritar quando o botão for pressionado', () => {
      const {getByTestId} = render(
        <ButtonFavorite onPress={favoriteMock} favorite={true} />,
      );
      fireEvent.press(getByTestId('starSelected'));
      expect(favoriteMock).toBeCalled();
    });
  });
});
