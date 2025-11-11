export async function loginUser(email, senha) {
  if (!email || !senha) {
    throw new Error('Por favor, preencha todos os campos!');
  }

  const mockEmail = 'teste@exemplo.com';
  const mockSenha = '123456';

  if (email === mockEmail && senha === mockSenha) {
    return true;
  } else {
    throw new Error('Credenciais inválidas');
  }
}
