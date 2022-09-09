import React from 'react';
import {render} from '@testing-library/react-native';
import Greeting from '../src/Components/Greeting';

//FILMES
describe('Greeting', () => {
  describe('tela de filmes selecionada', () => {
    it('mostre a palavra -filmes-', () => {
      const {getAllByText} = render(
        <Greeting
          screen={'HomeMovie'}
          user={{name: 'João', username: 'Pedro'}}
        />,
      );
      expect(getAllByText(/filmes/i)).toBeTruthy();
    });
    describe('nome foi informado', () => {
      it('mostre o nome', () => {
        const {getByText} = render(
          <Greeting
            screen={'HomeMovie'}
            user={{name: 'João', username: 'Pedro'}}
          />,
        );
        expect(getByText('João')).toBeTruthy();
      });
    });
    describe('nome NÃO foi informado', () => {
      it('mostre o username', () => {
        const {getByText} = render(
          <Greeting
            screen={'HomeMovie'}
            user={{name: '', username: 'Pedro'}}
          />,
        );
        expect(getByText('Pedro')).toBeTruthy();
      });
    });
  });

  //SERIES
  describe('tela de séries selecionada', () => {
    it('mostre a palavra -séries-', () => {
      const {getAllByText} = render(
        <Greeting
          screen={'HomeSerie'}
          user={{name: 'João', username: 'Pedro'}}
        />,
      );
      expect(getAllByText(/séries/i)).toBeTruthy();
    });
    describe('nome foi informado', () => {
      it('mostre o nome', () => {
        const {getByText} = render(
          <Greeting
            screen={'HomeSerie'}
            user={{name: 'João', username: 'Pedro'}}
          />,
        );
        expect(getByText('João')).toBeTruthy();
      });
    });
    describe('nome NÃO foi informado', () => {
      it('mostre o username', () => {
        const {getByText} = render(
          <Greeting
            screen={'HomeSerie'}
            user={{name: '', username: 'Pedro'}}
          />,
        );
        expect(getByText('Pedro')).toBeTruthy();
      });
    });
  });
});
