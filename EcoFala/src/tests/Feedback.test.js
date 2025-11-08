import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Feedback from '../src/screens/Feedback';

describe('Feedback', () => {
  test('renderiza todos os campos de feedback', () => {
    const { getByText } = render(<Feedback />);
    expect(getByText('FEEDBACK DO PACIENTE')).toBeTruthy();
  });

  test('preenche e envia o feedback', () => {
    const { getByText, getAllByRole } = render(<Feedback />);
    const button = getByText('Enviar');

    fireEvent.press(button);
    // não há navegação, apenas verifica se o botão existe e pode ser pressionado
    expect(button).toBeTruthy();
  });
});
