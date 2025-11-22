
export const careTips = {
  before: [
    'Durma pelo menos 6 horas na noite anterior',
    'Faça uma refeição leve e saudável antes',
    'Evite alimentos gordurosos 3 horas antes',
    'Aumente a ingestão de água',
    'Leve documento oficial com foto',
    'Não consuma bebidas alcoólicas 12h antes',
    'Evite fumar 2 horas antes',
    'Não vá em jejum'
  ],
  after: [
    'Permaneça no local por 15 minutos',
    'Beba bastante líquido nas próximas 24h',
    'Evite esforços físicos por 12 horas',
    'Não fume por pelo menos 2 horas',
    'Alimente-se bem após a doação',
    'Mantenha o curativo por 4 horas',
    'Em caso de tontura, deite e eleve as pernas',
    'Evite dirigir motos por 12 horas'
  ]
};

export const eligibility = {
  requirements: [
    'Idade entre 16 e 69 anos',
    'Peso acima de 50kg',
    'Estar bem de saúde',
    'Ter dormido pelo menos 6 horas',
    'Estar alimentado',
    'Apresentar documento oficial com foto'
  ],
  temporaryImpediments: [
    'Gripe, resfriado ou febre',
    'Gravidez',
    'Período de amamentação (até 12 meses após o parto)',
    'Tatuagem ou piercing recente (menos de 1 ano)',
    'Ingestão de bebida alcoólica nas últimas 12 horas',
    'Extração dentária recente (72 horas)',
    'Cirurgia de grande porte (6 meses)',
    'Transfusão de sangue (1 ano)'
  ],
  permanentImpediments: [
    'Doenças graves no coração, pulmões ou rins',
    'Hepatite B ou C',
    'HIV/AIDS',
    'Doença de Chagas',
    'Malária (dependendo da região)',
    'Uso de drogas ilícitas injetáveis'
  ]
};

export const bloodImpact = {
  oneDonation: {
    volume: '450ml',
    livesSaved: 4,
    timeRequired: '40-60 minutos',
    components: [
      { name: 'Hemácias', use: 'Tratamento de anemias e hemorragias' },
      { name: 'Plaquetas', use: 'Pacientes com câncer e dengue' },
      { name: 'Plasma', use: 'Queimaduras e distúrbios de coagulação' },
      { name: 'Crioprecipitado', use: 'Hemofilia e cirurgias complexas' }
    ]
  },
  frequency: {
    men: 'A cada 60 dias (até 4x por ano)',
    women: 'A cada 90 dias (até 3x por ano)'
  },
  needStats: {
    daily: 'Hospitais precisam de cerca de 38.000 doações por dia no Brasil',
    current: 'Apenas 1.6% da população brasileira doa sangue',
    ideal: 'OMS recomenda que 3% da população seja doadora regular',
    emergency: 'A cada 2 segundos alguém precisa de sangue no mundo'
  }
};

export const donationFacts = [
  'Uma única doação pode salvar até 4 vidas',
  'O sangue doado não pode ser fabricado artificialmente',
  'Estoques de sangue têm validade limitada (35-42 dias)',
  'Apenas 1 em cada 30 pessoas que podem doar realmente doam',
  'O corpo humano repõe o volume de sangue doado em 24 horas',
  'A medula óssea regenera as células sanguíneas em algumas semanas',
  'Não há risco de contrair doenças ao doar sangue',
  'Todo o material utilizado na doação é descartável e estéril'
];

export default {
  careTips,
  eligibility,
  bloodImpact,
  donationFacts
};