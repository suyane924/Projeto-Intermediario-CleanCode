import { loginUser } from '../services/authService';

describe('authService', () => {
  test('deve autenticar com usuário correto', async () => {
    const result = await loginUser('teste@exemplo.com', '123456');
    expect(result).toBe(true);
  });

  test('deve falhar com senha incorreta', async () => {
    await expect(loginUser('teste@exemplo.com', 'senhaErrada')).rejects.toThrow(
      'Credenciais inválidas'
    );
  });
});
