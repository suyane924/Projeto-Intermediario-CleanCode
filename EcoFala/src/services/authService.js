export async function loginUser(email, senha) {
  if (!email || !senha) {
    throw new Error('Por favor, preencha todos os campos!');
  }

  // Aqui pode ser substituído depois por autenticação com Firebase Auth
  const mockEmail = 'teste@exemplo.com';
  const mockSenha = '123456';

  if (email === mockEmail && senha === mockSenha) {
    return true;
  } else {
    throw new Error('Credenciais inválidas. Tente novamente.');
  }
}
