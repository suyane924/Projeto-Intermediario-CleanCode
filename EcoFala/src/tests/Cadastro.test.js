import { render, fireEvent } from '@testing-library/react-native';
import Cadastro from '../screens/Cadastro';

describe('Cadastro', () => {
  const mockNavigation = { navigate: jest.fn() };

  test('renderiza todos os inputs', () => {
    const { getByText, getAllByA11yLabel } = render(<Cadastro navigation={mockNavigation} />);
    expect(getByText('Cadastrar')).toBeTruthy();
  });

  test('preenche os campos e clica no botão', () => {
    const { getByText, getAllByRole } = render(<Cadastro navigation={mockNavigation} />);
    const button = getByText('Cadastrar');

    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Pacientes');
  });
});
