import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ButtonAvatar from '../src/Components/ButtonAvatar';

describe('ButtonAvatar', () => {
  const navegacaoMock = jest.fn();
  describe('renderização com o avatar path NÃO informado', () => {
    it('mostre o ícone', () => {
      const {getByTestId} = render(
        <ButtonAvatar
          user={{avatar: {tmdb: {avatar_path: ''}}}}
          navigation={{navigate: navegacaoMock}}
        />,
      );
      expect(getByTestId('icon')).toBeTruthy();
    });
    it('quando pressionado, navegar para o profileScreen', () => {
      const {getByTestId} = render(
        <ButtonAvatar
          user={{avatar: {tmdb: {avatar_path: ''}}}}
          navigation={{navigate: navegacaoMock}}
        />,
      );
      fireEvent.press(getByTestId('icon'));
      expect(navegacaoMock).toBeCalled();
    });
  });
  describe('renderização com o avatar path informado', () => {
    it('mostre o avatar', () => {
      const {getByTestId} = render(
        <ButtonAvatar
          user={{avatar: {tmdb: {avatar_path: 'avatar_path'}}}}
          navigation={{navigate: navegacaoMock}}
        />,
      );
      expect(getByTestId('avatar')).toBeTruthy();
    });
    it('quando pressionado, navegar para o profileScreen', () => {
      const {getByTestId} = render(
        <ButtonAvatar
          user={{avatar: {tmdb: {avatar_path: 'avatar_path'}}}}
          navigation={{navigate: navegacaoMock}}
        />,
      );
      fireEvent.press(getByTestId('avatar'));
      expect(navegacaoMock).toBeCalled();
    });
  });
});
