# 🌿 Mov Saúde — Site Institucional

> Site institucional moderno e responsivo para a clínica de fisioterapia e pilates **Mov Saúde**, desenvolvido do zero em **React.js**.

---

## 📋 Sobre o Projeto

O **Mov Saúde** é um site institucional criado para a clínica de fisioterapia e pilates da Dra. Bárbara Borghi, localizada no bairro Campestre em Santo André/SP. O objetivo do projeto é apresentar a clínica, seus serviços e a profissional de forma moderna, elegante e funcional, facilitando o contato e o agendamento de consultas pelos pacientes.

---

## ✨ Funcionalidades

- ✅ Design **100% responsivo** 
- ✅ **Animações de scroll** (classe `reveal`) em todos os componentes
- ✅ **Menu hamburguer** para dispositivos móveis
- ✅ **Botão flutuante** do WhatsApp
- ✅ **Acordeão interativo** na seção "Como podemos te ajudar?"
- ✅ **Timeline** animada na seção "Como será sua jornada"
- ✅ **Mapa do Google** integrado no footer
- ✅ **Link para agendamento** via Google Forms
- ✅ Tipografia elegante com **Cormorant Garamond** + **Inter**
- ✅ Variáveis CSS globais para fácil customização de cores

---

## 🧩 Componentes

`Header` • `Hero` • `Professional` • `Services` • `Journey` • `MOVForYou` • `Philosophy` • `Differentials` • `CTA` • `Footer` • `WhatsAppButton`

---

## 🛠️ Tecnologias Utilizadas

- **React.js** — Biblioteca para construção da interface
- **Vite** — Ferramenta de build e desenvolvimento
- **CSS3** — Estilização por componente (CSS modular)
- **Font Awesome** — Biblioteca de ícones
- **Google Fonts** — Tipografia (Cormorant Garamond + Inter)
- **Google Maps** — Mapa integrado no footer
- **Google Forms** — Formulário de agendamento

---

## 📁 Estrutura de Pastas

```
mov-saude-react/
├── public/
├── src/
│   ├── assets/               # Imagens do projeto
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Professional/
│   │   ├── Services/
│   │   ├── Journey/
│   │   ├── MOVForYou/
│   │   ├── Philosophy/
│   │   ├── Differentials/
│   │   ├── CTA/
│   │   ├── Footer/
│   │   └── WhatsAppButton/
│   ├── hooks/
│   │   └── useReveal.js      # Hook customizado para animações de scroll
│   ├── App.jsx
│   ├── index.css             # Estilos globais e variáveis CSS
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gustavoagsilva/mov-saude-react.git

# Acesse a pasta do projeto
cd mov-saude-react

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **desktop-first** e adaptado para mobile via media queries (`max-width: 768px`), garantindo uma experiência fluida em todos os dispositivos.

---

## 📞 Contato da Clínica

- 📍 Rua Marina, 1325 - Campestre - Santo André/SP
- 📱 (11) 91000-0570
- 📸 [@_movsaude](https://www.instagram.com/_movsaude/)

---

## 👨‍💻 Desenvolvido por

**Gustavo Augusto** — [LinkedIn](https://www.linkedin.com/in/gustavo-augusto-garcia/)

---

*Projeto desenvolvido para a Mov Saúde*
