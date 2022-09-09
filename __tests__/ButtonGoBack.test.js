import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ButtonGoBack from '../src/Components/ButtonGoBack';

describe('ButtonGoBack', () => {
  const navegacaoMock = jest.fn();
  it('renderização padrão', () => {
    render(<ButtonGoBack />);
  });
  it('pressionado', () => {
    const {getByTestId} = render(
      <ButtonGoBack navigation={{goBack: navegacaoMock}} />,
    );
    fireEvent.press(getByTestId('arrow'));
    expect(navegacaoMock).toBeCalled();
  });
});
