# 📜 Histórico de Mudanças (ainda não implementadas)

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.  
O formato é baseado em **[Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)**,  
e este projeto adere ao **Versionamento Semântico (SemVer)**.

---

## [0.1.0] - 2024-10-31

Esta é a versão **inicial de refatoração**, focada em estabelecer uma arquitetura de **Clean Code** e **persistência de dados**.

---

### 🆕 Adicionado (Added)
- Estrutura de pastas `src/services`, `src/components` e `src/data` para separação de preocupações (SoC).  
- Componentes reutilizáveis de UI (`PatientCard.js`, `CenarioCard.js`, `ModalMessage.js`) substituindo blocos repetitivos e chamadas a `Alert`.  
- Implementação inicial de **Objetos Nomeados** e **Schemas de Validação** para formulários (`Cadastro.js`, `Feedback.js`).  
- Configuração inicial de persistência de dados via **Firebase** (a ser implementada na camada de serviços).  

---

### 🔁 Alterado (Changed)
- O componente `GerarCenario.js` foi modificado para focar na persistência de dados estáticos e entrada manual de cenários, **removendo a lógica de chamada de API de IA**.  
- Lógica de formulários em `Cadastro.js` e `Feedback.js` refatorada para usar **propriedades nomeadas** em vez de índices de array (*removendo o Primitive Obsession*).  
- Componente `MainScreen` (menu principal) renomeado para `Menu.js` para melhor clareza.  

---

### ❌ Removido (Removed)
- Todas as chamadas nativas a `Alert.alert()` foram removidas e substituídas pelo componente customizado `ModalMessage` (melhor UX e conformidade com requisitos de ambiente).  
- Código de integração e dependências de serviços de **Inteligência Artificial (IA)** para geração de cenários.  

---

### 🐛 Corrigido (Fixed)
- Lógica de navegação em `Login.js` e `Pacientes.js` corrigida para garantir o fluxo correto entre as telas de autenticação e o menu.  

---
