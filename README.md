# EcoFala: Plataforma de Treinamento de Habilidades Sociais Para Crianças Autistas

--- 
## 🫂 Equipe
Gabriel Tarciso Macieiski  
Suyane Bonfanti dos Santos

## 🌟 1. Descrição do Software e Funcionalidades

O **EcoFala** é uma aplicação mobile (desenvolvida em **React Native**) destinada a terapeutas e profissionais que trabalham com o **Treinamento de Habilidades Sociais (THS)**.  
O objetivo central é fornecer uma ferramenta dinâmica para a criação, execução e avaliação de cenários de conversação simulada.

### Funcionalidades Implementadas

- **Autenticação (`Login.js`)**: Tela de entrada para usuários (terapeutas).  
- **Gestão de Pacientes (`Pacientes.js`)**: Listagem e navegação para o menu do paciente selecionado.  
- **Geração de Cenários (`GerarCenario.js`)**: Formulário para entrada de título e descrição, armazenando dados para criação de cenários pré-definidos (conteúdo e imagens estáticas, sem geração dinâmica por IA).  
- **Execução Interativa (`Cenario.js`)**: Exibição do texto da história com opções de escolha (correta/incorreta) e feedback imediato.  
- **Formulário de Feedback (`Feedback.js`)**: Coleta estruturada de dados de desempenho do paciente (clareza, coerência, interação etc.).  
- **Relatórios (`Relatorio.js`, `ListarRelatorios.js`)**: Visualização e edição de relatórios gerados automaticamente ou registrados pelo terapeuta.  

---

## ⚠️ 2. Análise dos Principais Problemas Detectados (Code Smells)

A arquitetura inicial do projeto, embora funcional, apresenta **alto acoplamento** e **baixa manutenibilidade**, violando princípios fundamentais do *Clean Code*.

| Problema (Code Smell) | Onde Ocorre | Impacto |
|------------------------|--------------|----------|
| **Mistura de Responsabilidades (SRP)** | `Login.js`, `GerarCenario.js` | Lógica de autenticação e chamadas de serviços estão misturadas com código de UI, dificultando manutenção e troca de serviços. |
| **Dados Hardcoded** | `Pacientes.js`, `ListarCenario.js`, `Relatorio.js` | Dados fixos impedem uso dinâmico com banco de dados (ex: Firestore). |
| **Primitive Obsession** | `cadastro.js`, `Feedback.js` | Formulários usam arrays genéricos e índices, dificultando manutenção e legibilidade. |
| **Uso de Alerta Nativo** | Múltiplas telas | Uso de `Alert.alert()` viola princípios de UX moderno e isolamento de ambiente. |
| **Não-DRY (Repetição)** | `ListarCenario.js`, `ListarRelatorios.js` | Código de UI repetitivo em múltiplos componentes. |

---

## 🚀 3. Estratégias de Refatoração Utilizadas

A refatoração proposta visa o **desacoplamento** e a criação de uma **arquitetura baseada em camadas**, com foco na persistência e gestão de dados.

| Estratégia | Objetivo | Implementação Arquitetural |
|-------------|-----------|-----------------------------|
| **Separação de Preocupações (SoC)** | Isolar UI, Dados e Serviços. | Criação das pastas `src/services`, `src/data`, e `src/components`. A camada de serviços se comunica com o Firebase. |
| **DRY e Componentização** | Eliminar código repetido. | Extração de itens de lista para componentes `Card` (`PatientCard.js`, `CenarioCard.js`) e criação de `ModalMessage.js` para mensagens. |
| **Refatoração de Estado** | Melhorar legibilidade e robustez de formulários. | Substituição de arrays por objetos nomeados e uso de *schemas* (`feedbackSchema.js`, `patientSchema.js`). |
| **Substituição de Alertas** | Melhorar UX. | Implementação de componente de `Modal/Toast` reutilizável para mensagens. |

---

## ✅ 4. Descrição dos Testes Implementados e Cobertura Atingida

### 4.1. Testes Implementados

Foi utilizado o **Jest** para a realização dos testes unitários.

#### Áreas de Foco para Testes

| Tipo de Teste | Componentes e Serviços | Foco |
|----------------|------------------------|-------|
| **Testes Unitários** | `authService.js`, `reportBuilder.js` | Validação de login, geração de relatórios e persistência de dados. |
| **Testes de Componentes** | `Cadastro.js`, `Feedback.js`, `ToastMessage.js` | Renderização e validação de formulários, mensagens de toast. |
| **Testes de Integração** | Fluxo Cadastro → Feedback → Relatórios | Simulação da navegação e interação entre camadas. |

### 4.2. Cobertura Atingida

| Tipo de Cobertura | Status Atual |
|--------------------|--------------|
| Cobertura de Linhas | 77.61% |
| Cobertura de Funções | 64.51% |
| Cobertura de Branches | 60% |

---

## 🖋️ 5. Implementação de Interface Fluente (Fluent Interface)

A **Interface Fluente** é ideal para criação de cenários ou relatórios complexos, tornando o código mais legível e configurável.

### Cenário Proposto: `ReportBuilder` (Construtor de Relatórios)

O padrão permite encadear métodos, onde cada chamada retorna a instância da classe.

| Sem Fluent Interface (Imperativo) | Com Fluent Interface (Declarativo) |
|----------------------------------|------------------------------------|
| ```js<br>const builder = new ReportBuilder();<br>builder.setPatient('p123');<br>builder.setDateRange('2024-01-01', '2024-03-31');<br>builder.includeFeedback('interaction');<br>const report = builder.build();<br>``` | ```js<br>const report = new ReportBuilder()<br>  .setPatient('p123')<br>  .setDateRange('2024-01-01', '2024-03-31')<br>  .includeFeedback('interaction')<br>  .build();<br>``` |

---

## 📥 6. Descrição da Instalação e Execução

### 🧩 Pré-requisitos
- Node.js 
- Expo CLI → `npm install -g expo-cli`  

### ⚙️ Passos para Instalação

```bash
# Clonar o repositório
git clone https://github.com/suyane924/Projeto-Intermediario-CleanCode.git
cd Projeto-Intermediario-CleanCode

# Instalar dependências
npm install
# ou
yarn install

```

### ▶️ Iniciar o Projeto

```bash
npx expo start
```
Escaneie o QR Code exibido no terminal com o aplicativo Expo Go no seu dispositivo mobile ou utilize um simulador.

## 📋 Testes

### Rodar todos os testes 

```bash
npm test
```

### Cobertura dos testes

```bash
npx jest --coverage
```
Observação: cobertura atual está em ~75% das linhas. 🤓☝️

## 🔎 ESLint

### Verificar problemas no código

```bash
npm run lint
```

### Corrigir problemas automaticamente

```bash
npm run lint -- --fix
```






