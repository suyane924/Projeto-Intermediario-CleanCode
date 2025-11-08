# 📜 Histórico de Mudanças

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.  
O formato é baseado em **[Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)**,  
e este projeto adere ao **Versionamento Semântico (SemVer)**.

---

## [0.1.0] - 2024-11-07

Esta é a versão **inicial de refatoração**, focada em estabelecer uma arquitetura de **Clean Code** e **persistência de dados**.

---

### 🆕 Adicionado (Added)
Estrutura de pastas organizada:

- src/services → serviços e lógica de negócio.

- src/components → componentes reutilizáveis de UI.

- src/data → armazenamento de dados estáticos e mocks.

Componentes reutilizáveis de UI:

- `PatientCard.js`

- `CenarioCard.js`

- `ModalMessage.js` (substituindo Alert.alert())

Implementação de Objetos Nomeados e Schemas de Validação para formulários:

- `Cadastro.js`

- `Feedback.js`

- Estrutura de testes unitários inicial em src/tests/ com Jest e Testing Library.
---

### 🔁 Alterado (Changed)

`GerarCenario.js` refatorado para:

- Persistência de dados locais via src/data.

- Entrada manual de cenários, removendo dependência de IA.

Formularios (`Cadastro.js` e `Feedback.js`) refatorados para:

- Usar propriedades nomeadas em vez de índices de array (removendo Primitive Obsession).

- Componente MainScreen renomeado para `Menu.js` para maior clareza de navegação.

- Pequenos ajustes cosméticos em nomes de variáveis e props para melhor legibilidade e consistência do código.

- Configurações de testes ajustadas para suportar Jest + React Native Testing Library.   

---

### ❌ Removido (Removed)
- Todas as chamadas nativas a `Alert.alert()` foram removidas e substituídas pelo componente customizado `ModalMessage` (melhor UX e conformidade com requisitos de ambiente).  
- Código de integração e dependências de serviços de **Inteligência Artificial (IA)** para geração de cenários.  

---

### 🐛 Corrigido (Fixed)

- Navegação entre telas (`Login.js` e `Pacientes.js`) corrigida para garantir fluxo correto.

- Validação de formulários (`Cadastro.js` e `Feedback.js`) corrigida para evitar erros de referência a campos inexistentes.

- Correção de pequenos bugs de UI e layout em componentes PatientCard e CenarioCard.

- Ajuste na integração de testes para compatibilidade com versões de React Native e Jest.

---
