## 📜 Histórico de Mudanças

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

---

## [0.2.0] - 2025-11

Esta versão combina a **refatoração inicial de Clean Code** com **testes automatizados**, **configuração de Linter** e ajustes de gitignore.

---

### 🆕 Adicionado

* Estrutura de pastas organizada:
    * `src/services` → serviços e lógica de negócio.
    * `src/components` → componentes reutilizáveis de UI.
    * `src/data` → armazenamento de dados estáticos e mocks.
* **Componentes Reutilizáveis de UI:**
    * `CenarioCard.js`
    * `ModalMessage.js` (substituindo `Alert.alert()`)
    * `CardItem.js` (Componente de UI genérico para itens de lista).
    * `ToastMessage.js` (Componente para exibir mensagens temporárias/notificações).
* **Implementação de Objetos Nomeados e Schemas de Validação para formulários e dados:**
    * `Cadastro.js`
    * `Feedback.js`
    * `feedbackSchema.js` (Schema de validação para formulário de Feedback).
    * `patientSchema.js` (Schema de validação para dados/cadastro de Paciente).
* **Telas (Screens) de Navegação:**
    * `Cenario.js` (Tela para visualização/detalhes de um Cenário).
    * `ListarCenario.js` (Tela para listar os Cenários disponíveis).
    * `ListarRelatorios.js` (Tela para listar os Relatórios gerados).
    * `Relatorio.js` (Tela para visualização/detalhes de um Relatório).
* **Services e Lógica de Negócio:**
    * `cenarioService.js` (Serviço para manipulação da lógica de Cenários).
    * `pacienteService.js` (Serviço para manipulação da lógica de Pacientes).
    * `relatorioService.js` (Serviço para manipulação da lógica de Relatórios).
* **Novos Arquivos de Dados Estáticos:**
    * `cenariosData.js` (Dados estáticos de cenários).
    * `pacientesData.js` (Dados estáticos de pacientes).
    * `relatorioData.js` (Dados estáticos de relatórios).
* Estrutura de testes automatizados em `src/tests/` com Jest e Testing Library:
    * `authService.test.js`
    * `ReportBuilder.test.js`
    * `Cadastro.test.js`
    * `Feedback.test.js`
* Cobertura de testes registrada:
    * Linhas: 77.61%
    * Funções: 64.51%
    * Branches: 60%
* Configuração do ESLint com scripts:
    * `npm run lint` → checar problemas.
    * `npm run lint -- --fix` → corrigir problemas automaticamente.
* `.gitignore` atualizado para ignorar a pasta `node_modules/`.

---

### 🔁 Alterado

* `GerarCenario.js` refatorado para:
    * Persistência de dados locais via `src/data`.
    * Entrada manual de cenários, removendo dependência de IA.
* Formulários (`Cadastro.js` e `Feedback.js`) refatorados para:
    * Usar propriedades nomeadas em vez de índices de array (removendo Primitive Obsession).
    * Utilizar os Schemas de validação (`patientSchema.js`, `feedbackSchema.js`) para garantir consistência e integridade dos dados.
* Pequenos ajustes cosméticos em nomes de variáveis e props para melhor legibilidade e consistência do código.
* Configurações de testes ajustadas para suportar Jest + React Native Testing Library.
* Estrutura de imports ajustada para compatibilidade com módulos ECMAScript no Jest.

---

### ❌ Removido 

* Todas as chamadas nativas a `Alert.alert()` foram removidas e substituídas pelo componente customizado `ModalMessage` (melhor UX e conformidade com requisitos de ambiente).
* Código de integração e dependências de serviços de **Inteligência Artificial (IA)** para geração de cenários.

---

### 🐛 Corrigido (Fixed)

* Navegação entre telas (`Login.js` e `Pacientes.js`) corrigida para garantir fluxo correto.
* Validação de formulários (`Cadastro.js` e `Feedback.js`) corrigida para evitar erros de referência a campos inexistentes.
* Correção de pequenos bugs de UI e layout em componentes `PatientCard` e `CenarioCard`.
* Problemas de parsing do Jest com arquivos TypeScript/ESM em `node_modules` resolvidos via `transformIgnorePatterns`.
* Problemas de warnings de módulo do ESLint resolvidos com ajustes na configuração do `package.json`.
* Ajuste na integração de testes para compatibilidade com versões de React Native e Jest.
