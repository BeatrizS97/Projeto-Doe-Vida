// src/data/hemocentros.js

// Dados locais de fallback (seu conteúdo original, caso o JSON externo falhe)
const hemocentrosFallback = {
  'AC': [
    { city: 'Rio Branco', name: 'Hemoacre', address: 'Av. Getúlio Vargas, 2.405', phone: '(68) 3215-2300', district: 'Bosque' }
  ],
  'AL': [
    { city: 'Maceió', name: 'Hemoal', address: 'Av. Jorge de Lima, 58', phone: '(82) 3315-1170', district: 'Trapiche da Barra' },
    { city: 'Arapiraca', name: 'Hemoal - Arapiraca', address: 'Rua Estudante Abelardo Hora, 53', phone: '(82) 3530-2100', district: 'Centro' }
  ],
  // ... (todos os dados que você já tem)
  'SP': [
    { city: 'São Paulo', name: 'Fundação Pró-Sangue - Clínicas', address: 'Av. Dr. Enéas de Carvalho Aguiar, 155', phone: '(11) 4573-7800', district: 'Cerqueira César' },
    { city: 'Santos', name: 'Hemonúcleo Santos', address: 'Av. Cláudio Luiz da Costa, 50', phone: '(13) 3202-0600', district: 'Jabaquara' },
    { city: 'Santos', name: 'Colsan - Santos', address: 'Rua Silva Jardim, 211', phone: '(13) 3201-4600', district: 'Vila Mathias' }
  ],
  // ... (todos os outros estados)
};

// Mapa expandido de cidades para busca inteligente
export const cidadesParaEstado = {
  'santos': 'SP',
  'são paulo': 'SP',
  'rio de janeiro': 'RJ',
  'belo horizonte': 'MG',
  // ... (todos os que você já tem)
};

// Função para buscar hemocentros do JSON externo (gerado pelo script)
export async function fetchHemocentrosFromJSON() {
  const CACHE_KEY = 'hemocentros-data';
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

  // Verificar se temos dados em cache e se ainda são válidos
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      console.log('Dados carregados do cache.');
      return data;
    }
  }

  try {
    // Tenta buscar o JSON atualizado (gerado pelo script)
    const response = await fetch('/data/hemocentros.json');
    if (!response.ok) throw new Error('Erro ao buscar JSON');
    const data = await response.json();

    // Salvar em cache
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
    console.log('Dados carregados do JSON externo e salvos no cache.');
    return data;
  } catch (error) {
    console.warn('Erro ao buscar JSON atualizado. Usando fallback local.', error);
    return hemocentrosFallback;
  }
}

// Exportar os dados como default (pode ser útil para compatibilidade)
export default hemocentrosFallback;