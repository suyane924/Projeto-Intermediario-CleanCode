import { login } from '../services/authService';

describe('authService', () => {
  test('deve autenticar com usuário correto', async () => {
    const result = await login('usuario@example.com', '123456');
    expect(result).toHaveProperty('success', true);
  });

  test('deve falhar com senha incorreta', async () => {
    await expect(login('usuario@example.com', 'senhaErrada')).rejects.toThrow('Credenciais inválidas');
  });
});
