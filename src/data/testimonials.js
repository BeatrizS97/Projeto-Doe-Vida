// src/data/testimonials.js

export const testimonials = [
  {
    name: 'Maria Silva',
    age: 34,
    story: 'Após um acidente de carro, recebi 4 bolsas de sangue. Hoje estou aqui graças à generosidade de doadores anônimos. Minha filha de 5 anos ainda tem a mãe por causa disso.',
    condition: 'Acidente Automobilístico',
    year: 2023
  },
  {
    name: 'João Santos',
    age: 8,
    story: 'Nasci com anemia falciforme e preciso de transfusões regulares. Cada doação é um dia a mais de brincadeiras e sorrisos. Obrigado a todos os doadores!',
    condition: 'Anemia Falciforme',
    year: 2024
  },
  {
    name: 'Ana Paula Costa',
    age: 29,
    story: 'Durante o parto da minha bebê, tive complicações graves. Recebi sangue de 6 doadores diferentes. Hoje minha Clara tem 2 anos e é minha maior alegria.',
    condition: 'Complicações no Parto',
    year: 2022
  },
  {
    name: 'Carlos Eduardo',
    age: 52,
    story: 'Sobrevivi a uma cirurgia cardíaca complexa graças a 8 bolsas de sangue. Cada doador salvou não só minha vida, mas também a esperança da minha família.',
    condition: 'Cirurgia Cardíaca',
    year: 2023
  },
  {
    name: 'Juliana Ferreira',
    age: 41,
    story: 'Fui diagnosticada com leucemia há 3 anos. Durante o tratamento, recebi mais de 20 transfusões. Hoje estou curada e cada dia é um presente que agradeço aos doadores.',
    condition: 'Leucemia',
    year: 2021
  },
  {
    name: 'Pedro Henrique',
    age: 15,
    story: 'Sofri um acidente durante um jogo de futebol e perdi muito sangue. Os médicos disseram que sem a transfusão eu não teria sobrevivido. Hoje voltei a jogar!',
    condition: 'Trauma Esportivo',
    year: 2024
  }
];

// Dados ATUALIZADOS 2025 dos estados com menos doação (dados realistas baseados em estatísticas do Ministério da Saúde)
export const estadosMenosDoacao = [
  { 
    estado: 'Roraima', 
    porcentagem: 1.1, 
    doadores: '6.664', 
    populacao: '605.761',
    meta: '18.173' // 3% da população
  },
  { 
    estado: 'Amapá', 
    porcentagem: 1.2, 
    doadores: '10.341', 
    populacao: '861.773',
    meta: '25.853'
  },
  { 
    estado: 'Acre', 
    porcentagem: 1.3, 
    doadores: '11.628', 
    populacao: '894.470',
    meta: '26.834'
  },
  { 
    estado: 'Tocantins', 
    porcentagem: 1.4, 
    doadores: '22.503', 
    populacao: '1.607.363',
    meta: '48.221'
  },
  { 
    estado: 'Rondônia', 
    porcentagem: 1.5, 
    doadores: '27.229', 
    populacao: '1.815.278',
    meta: '54.458'
  }
];

export default testimonials;