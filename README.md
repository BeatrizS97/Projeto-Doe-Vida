# 🫀 Doe Vida – Em Memória de Rodrigo e Natalha

![No Forks](https://img.shields.io/badge/fork-proibido-critical)
![Copyright](https://img.shields.io/badge/copyright-2025%20Beatriz%20Silva-red)
![Projeto Autoral](https://img.shields.io/badge/projeto-autoral-orange)
![Licença Proprietária](https://img.shields.io/badge/licença-proprietária-black)

Este é um projeto criado com amor, memória e propósito.  
Nasce como uma homenagem aos meus irmãos **Rodrigo** e **Natalha**, e tem como missão incentivar a doação de sangue — um gesto simples que salva vidas e marcou profundamente nossa história.

➡️ **Acesse o projeto:** [https://projeto-doe-vida.vercel.app](projeto-doe-vida.vercel.app)

---

## ✨ Sobre o Projeto

O **Doe Vida** é um site informativo, responsivo e profundamente humano. Ele combina:

- **Educação**: orientações médicas claras e atualizadas sobre doação de sangue.
- **Acesso**: localizador inteligente de hemocentros com cálculo de distância real.
- **Memória**: histórias reais e uma jornada pessoal de luto transformado em ação.
- **Privacidade**: todos os dados de acompanhamento são salvos localmente, sem coleta de informações pessoais.

O foco não é em metas coletivas irreais, mas em **acompanhar de forma responsável a jornada individual de cada doador**, respeitando os limites médicos: **até 2 doações por ano para homens, 1 para mulheres**.

---

## 🌟 Funcionalidades

- 🏠 **Página inicial emocional** com animação 3D e mensagem de homenagem  
- 💉 **Orientações completas** antes e depois da doação  
- 📖 **Histórias reais e dados informativos** sobre o impacto da doação  
- 🗺️ **Localizador de hemocentros do Brasil** com:
  - Busca por cidade ou estado
  - Cálculo de distância real (via OpenStreetMap Nominatim)
  - Links diretos para rotas no Google Maps
- 📊 **Acompanhamento pessoal de doações**:
  - Registro seguro com limite por gênero (60/90 dias de intervalo)
  - Persistência local via `localStorage`
  - Gráfico mensal de evolução
  - Celebração ao atingir a meta anual (1 ou 2 doações)
- 🎯 **Meta realista e individual**: até 2 doações por ano, alinhada com as recomendações médicas
- ❤️ **Animações e ícones personalizados** em homenagem a Rodrigo e Natalha
- 📱 **Totalmente responsivo**: otimizado para mobile, tablet e desktop

---

## 🚀 Tecnologias Utilizadas

- **React** (com hooks e Context API)
- **Vite** (para desenvolvimento rápido)
- **Tailwind CSS** (utilizando `mobile-first`)
- **React Router DOM** (navegação SPA)
- **Lucide React** (ícones vetoriais leves)
- **OpenStreetMap Nominatim API** (geolocalização precisa)
- **localStorage** (armazenamento local e privado)
- **Script automatizado** para atualização dos hemocentros

---

## 📂 Estrutura do Projeto

```
src/
├── assets/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Heart3D.jsx
│   ├── BloodDonationAnimation.jsx
│   ├── AnimatedGoalCard.jsx
│   └── Button.jsx
├── pages/
│   ├── Home.jsx
│   ├── Care.jsx
│   ├── Stories.jsx
│   ├── Map.jsx
│   └── DonationGoalPage.jsx
├── contexts/
│   └── DonationContext.jsx
├── hooks/
│   └── useCountAnimation.js
├── data/
│   ├── hemocentros.js
│   ├── testimonials.js
│   └── statistics.js
├── utils/
│   └── searchHelper.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## ▶️ Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesse em seu navegador:  
👉 **[http://localhost:5173](http://localhost:5173)**

---

## ♻️ Atualização de Dados

Os hemocentros são mantidos atualizados via script:

```bash
npm run atualizar-hemocentros
```

Esse comando gera o arquivo `public/data/hemocentros.json`, utilizado em produção com cache de 24h.

---

# 📄 Licença Proprietária de Uso Restrito

### © 2025 Beatriz Silva — Todos os direitos reservados.

Este projeto é **totalmente proprietário** e **não concede qualquer permissão pública**.  
É **proibido** copiar, baixar, clonar, fazer fork, reutilizar, modificar, redistribuir ou utilizar qualquer parte deste projeto — seja para fins pessoais, acadêmicos, comerciais ou profissionais.

> Este código é uma extensão da minha história. Respeite-a.

🔗 **Licença completa:**  
👉 [Clique aqui para acessar o LICENSE.md](./LICENSE.md)

---

## 📬 Contato Profissional

Para dúvidas, permissões ou oportunidades:

📧 **E-mail:**  
➡️ **(beatriz.santos.ads97@gmail.com)**

🔗 **LinkedIn:**  
➡️ [https://www.linkedin.com/in/beatrizsilvasantos-dev/](https://www.linkedin.com/in/beatrizsilvasantos-dev/)

---

## ❤️ Nota da Autora

Este projeto é uma ponte entre o luto e a esperança.  
Foi criado para manter viva a memória de **Rodrigo** e **Natalha**, transformando saudade em algo que pode **inspirar e salvar vidas**.

Obrigada por **respeitar esta história** e por considerar **doar sangue** — o gesto mais generoso que existe.

---

## 🧡 Dedicação

**Rodrigo e Natalha, vocês vivem em cada linha deste projeto.**  
Sempre.
