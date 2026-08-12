# Mov Saúde — Fisioterapia e Pilates

Aplicação web institucional desenvolvida em **React** para a **Mov Saúde**, clínica especializada em fisioterapia e Pilates.

O projeto foi desenvolvido com foco em apresentar os serviços da clínica de forma clara e profissional, facilitar o contato com potenciais pacientes e proporcionar uma experiência de navegação responsiva em diferentes dispositivos.

> Projeto desenvolvido como aplicação prática para aprimoramento de conhecimentos em desenvolvimento Front-end com React.

---

## 📖 Sobre o projeto

O **Mov Saúde** é um website institucional desenvolvido para apresentar a clínica, seus serviços, sua abordagem de atendimento e a profissional responsável.

A aplicação foi construída a partir de uma estrutura de componentes reutilizáveis em React, buscando transformar uma página institucional tradicional em uma aplicação organizada, modular e de fácil manutenção.

A interface foi planejada para conduzir o usuário pela apresentação da clínica até os principais pontos de conversão, especialmente os canais de contato e agendamento.

### Objetivos

* Apresentar a proposta da Mov Saúde;
* Destacar os serviços de fisioterapia e Pilates;
* Apresentar a profissional responsável;
* Explicar a metodologia e filosofia de atendimento;
* Facilitar o contato com a clínica;
* Oferecer uma experiência consistente em dispositivos móveis e desktop;
* Aplicar conceitos modernos de desenvolvimento com React.

---

## ✨ Funcionalidades

###  Apresentação institucional

A página apresenta a clínica desde a primeira seção, utilizando uma estrutura visual organizada para comunicar sua proposta e direcionar o usuário para as principais ações.

### 👩‍⚕️ Apresentação profissional

Seção dedicada à profissional responsável pela clínica, permitindo apresentar sua atuação e estabelecer maior proximidade com o visitante.

### 🧘 Serviços

Apresentação dos principais serviços oferecidos pela Mov Saúde, organizados em componentes independentes para facilitar a manutenção e evolução da aplicação.

### Jornada de atendimento

Seção dedicada à apresentação da experiência do paciente e das etapas do processo de atendimento.

### 💚 Filosofia

Área destinada a apresentar os princípios que orientam a abordagem da clínica e sua forma de cuidar dos pacientes.

### 📲 CTA de contato

Chamadas para ação distribuídas ao longo da página para direcionar o usuário ao contato com a clínica.

### 💬 WhatsApp

Botão de acesso rápido ao WhatsApp, permitindo que o visitante entre em contato diretamente com a clínica.

### ✨ Animações de entrada

A aplicação utiliza o hook customizado `useReveal` para controlar animações de revelação dos elementos durante a navegação pela página.

---

## 🛠️ Tecnologias utilizadas

### Front-end

* **React** — desenvolvimento da interface e componentização;
* **JavaScript (ES6+)** — lógica e comportamento da aplicação;
* **HTML5 / JSX** — estrutura semântica dos componentes;
* **CSS3** — estilização e responsividade;
* **Vite** — ambiente de desenvolvimento e build;
* **ESLint** — padronização e análise do código.

### Organização e desenvolvimento

* Componentização com React;
* Hooks personalizados;
* Separação de responsabilidades;
* Estrutura modular de componentes;
* Controle de versão com Git e GitHub.

O projeto utiliza atualmente React 19.2.7, React DOM 19.2.7, Vite 8.1.0 e ESLint 10.5.0.

---

## 🧩 Arquitetura do projeto

A aplicação foi estruturada de forma modular, mantendo os componentes da interface separados dentro da pasta `src/components`.

```text
mov-saude-react/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── imagens e recursos utilizados pela aplicação
│   │
│   ├── components/
│   │   ├── About/
│   │   ├── CTA/
│   │   ├── Differentials/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Journey/
│   │   ├── MOVForYou/
│   │   ├── Philosophy/
│   │   ├── Professional/
│   │   ├── Services/
│   │   └── WhatsAppButton/
│   │
│   ├── hooks/
│   │   └── useReveal.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

A estrutura atual do projeto possui pastas específicas para componentes, assets e hooks, mantendo o código da aplicação separado por responsabilidade.

### Componentização

O `App.jsx` atua como componente principal e é responsável por compor as diferentes seções da página:

```text
App
│
├── Header
├── Hero
├── Professional
├── Services
├── Journey
├── MOVForYou
├── Philosophy
├── CTA
├── Footer
└── WhatsAppButton
```

Essa abordagem permite que cada parte da interface seja desenvolvida e mantida de maneira independente.

---

## 🎨 Interface e identidade visual

A interface foi desenvolvida com uma proposta visual voltada ao segmento de saúde e bem-estar.

A estilização utiliza:

* Paleta baseada em tons de verde;
* Tipografia **Inter** para textos;
* Tipografia **Cormorant Garamond** para títulos;
* Botões com bordas arredondadas;
* Transições e efeitos de interação;
* Layout responsivo;
* Animações de entrada durante a navegação.

As cores principais e regras globais estão centralizadas no `index.css`, utilizando **CSS Custom Properties** para facilitar a manutenção da identidade visual.

---

## 📱 Responsividade

A aplicação foi desenvolvida considerando diferentes tamanhos de tela, proporcionando uma experiência adaptada para:

* 📱 Smartphones;
* 📲 Tablets;
* 💻 Notebooks;
* 🖥️ Desktops.

A estrutura baseada em componentes permite que cada seção da interface seja ajustada individualmente conforme as necessidades de cada resolução.

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de executar a aplicação, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/gustavoagsilva/mov-saude-react.git
```

### 2. Acesse a pasta

```bash
cd mov-saude-react
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e disponibilizará a aplicação localmente.

---

## 📦 Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com Vite.

### Build

```bash
npm run build
```

Gera a versão otimizada da aplicação para produção.

### Preview

```bash
npm run preview
```

Executa localmente a versão gerada pelo build.

### Lint

```bash
npm run lint
```

Executa o ESLint para identificar problemas relacionados à qualidade e padronização do código.

Os scripts fazem parte da configuração atual do `package.json`.

---

## 📚 Principais conceitos aplicados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes do ecossistema React e do desenvolvimento Front-end moderno:

* Componentização;
* JSX;
* Hooks;
* Custom Hooks;
* Props;
* Modularização;
* Organização de componentes;
* Responsividade;
* CSS Custom Properties;
* Animações e transições;
* Manipulação de eventos;
* Estruturação semântica;
* Separação de responsabilidades;
* Gerenciamento de dependências com npm;
* Desenvolvimento e build utilizando Vite;
* Linting com ESLint.

---

## 🚀 Aprendizados

O desenvolvimento do projeto permitiu aprofundar principalmente a utilização do **React para transformar uma interface anteriormente estruturada de forma tradicional em uma aplicação baseada em componentes**.

Entre os principais aprendizados estão:

* Estruturar uma aplicação React de forma modular;
* Transformar seções de uma interface em componentes independentes;
* Organizar imports e dependências entre componentes;
* Criar e utilizar um Custom Hook;
* Trabalhar com JSX;
* Integrar elementos visuais e interações dentro da arquitetura React;
* Organizar assets e arquivos de uma aplicação;
* Utilizar Vite como ferramenta de desenvolvimento;
* Aplicar boas práticas de organização e manutenção de código.

---

## 🔄 Evolução do projeto

Este projeto representa uma evolução da versão inicial do website da Mov Saúde, originalmente desenvolvido utilizando tecnologias fundamentais do desenvolvimento web.

A migração para React teve como objetivo aplicar conceitos de componentização e tornar a estrutura da aplicação mais modular e escalável.

### Versão anterior

```text
HTML
CSS
JavaScript
```

### Versão atual

```text
React
JavaScript
CSS
Vite
ESLint
```

Essa evolução permitiu reorganizar a interface em componentes independentes e criar uma estrutura mais adequada para futuras funcionalidades.

---

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades podem ser incorporadas em versões futuras:

* [ ] Implementação de formulário de contato;
* [ ] Integração com serviço de agendamento;
* [ ] Integração com API;
* [ ] Criação de páginas adicionais;
* [ ] Adição de testes automatizados;
* [ ] Otimização de imagens e assets;
* [ ] Melhorias de acessibilidade;
* [ ] SEO técnico;
* [ ] Deploy em ambiente de produção.

---

## 📌 Status do projeto

**Em desenvolvimento**

A aplicação encontra-se em evolução e pode receber novas funcionalidades, melhorias de interface, otimizações de performance e aprimoramentos de acessibilidade.

---

## 👨‍💻 Autor

**Gustavo Augusto Garcia da Silva**

Desenvolvedor Web Full-Stack, com foco em desenvolvimento Front-end e construção de aplicações web modernas.

### Contato

* GitHub: [@gustavoagsilva](https://github.com/gustavoagsilva)
* LinkedIn: [Gustavo Augusto Garcia da Silva](https://www.linkedin.com/)
