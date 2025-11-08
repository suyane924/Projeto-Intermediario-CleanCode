export async function getCenarios() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cenariosData), 300);
  });
}

export async function gerarCenarioIA(titulo, descricao) {
  if (!titulo || !descricao) {
    throw new Error('Por favor, preencha o título e a descrição.');
  }

  try {
    const response = await fetch('SUA_API_URL_AQUI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `Crie um cenário de conversa com o título "${titulo}" e a descrição "${descricao}".`,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    const data = await response.json();
    return data.cenario || 'Cenário gerado com sucesso!';
  } catch (error) {
    throw new Error('Falha ao gerar cenário. Verifique sua conexão e tente novamente.');
  }
}
