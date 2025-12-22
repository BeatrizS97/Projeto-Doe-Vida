// src/utils/searchHelper.js

// Função para remover acentos e normalizar strings
function normalizeString(str) {
  return str.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Coordenadas aproximadas das principais cidades (lat, lng)
export const cityCoordinates = {
  // São Paulo - Litoral
  'itanhaem': { lat: -24.1833, lng: -46.7889, state: 'SP' }, // Itanhaém
  'santos': { lat: -23.9608, lng: -46.3333, state: 'SP' }, // Santos
  'saovicente': { lat: -23.9631, lng: -46.3919, state: 'SP' }, // São Vicente
  'guaruja': { lat: -23.9931, lng: -46.2564, state: 'SP' }, // Guarujá
  'praia grande': { lat: -24.0058, lng: -46.4128, state: 'SP' }, // Praia Grande
  'cubatao': { lat: -23.8833, lng: -46.4667, state: 'SP' }, // Cubatão
  'mongagua': { lat: -24.0500, lng: -46.6833, state: 'SP' }, // Mongaguá
  'peruibe': { lat: -24.2500, lng: -47.0000, state: 'SP' }, // Peruíbe
  'bertioga': { lat: -23.8500, lng: -46.1167, state: 'SP' }, // Bertioga
  'sao paulo': { lat: -23.5505, lng: -46.6333, state: 'SP' }, // São Paulo
  'campinas': { lat: -22.9099, lng: -47.0626, state: 'SP' }, // Campinas
  'guarulhos': { lat: -23.4538, lng: -46.5333, state: 'SP' }, // Guarulhos
  'sao jose dos campos': { lat: -23.1791, lng: -45.8872, state: 'SP' }, // São José dos Campos
  'ribeirao preto': { lat: -21.1704, lng: -47.8103, state: 'SP' }, // Ribeirão Preto
  'sorocaba': { lat: -23.5015, lng: -47.4526, state: 'SP' }, // Sorocaba

  // Rio de Janeiro
  'rio de janeiro': { lat: -22.9068, lng: -43.1729, state: 'RJ' },
  'niteroi': { lat: -22.8833, lng: -43.1036, state: 'RJ' },
  'campos dos goytacazes': { lat: -21.7622, lng: -41.3181, state: 'RJ' },

  // Outras capitais
  'belo horizonte': { lat: -19.9167, lng: -43.9345, state: 'MG' },
  'curitiba': { lat: -25.4284, lng: -49.2733, state: 'PR' },
  'porto alegre': { lat: -30.0346, lng: -51.2177, state: 'RS' },
  'salvador': { lat: -12.9714, lng: -38.5014, state: 'BA' },
  'fortaleza': { lat: -3.7319, lng: -38.5267, state: 'CE' },
  'brasilia': { lat: -15.8267, lng: -47.9218, state: 'DF' }
};

// Coordenadas dos hemocentros principais
export const hemocentroCoordinates = {
  'Hemonúcleo Santos': { lat: -23.9608, lng: -46.3333, city: 'Santos', state: 'SP' },
  'Colsan - Santos': { lat: -23.9400, lng: -46.3350, city: 'Santos', state: 'SP' },
  'Fundação Pró-Sangue - Clínicas': { lat: -23.5505, lng: -46.6333, city: 'São Paulo', state: 'SP' },
  'Hemocentro Unicamp': { lat: -22.9099, lng: -47.0626, city: 'Campinas', state: 'SP' },
  'Hemocentro Guarulhos': { lat: -23.4538, lng: -46.5333, city: 'Guarulhos', state: 'SP' },
  'Hemocentro SJC': { lat: -23.1791, lng: -45.8872, city: 'São José dos Campos', state: 'SP' },
};

// Calcular distância entre dois pontos (Haversine formula)
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distância em km
}

// Função para buscar coordenadas de uma cidade usando OpenStreetMap Nominatim
export async function getCoordinatesFromCity(cityName) {
  const normalizedCity = cityName.trim();
  const encodedCity = encodeURIComponent(normalizedCity);

  // API do Nominatim (OpenStreetMap)
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedCity}&limit=1&addressdetails=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SangueSolidarioApp/1.0 (contato@seudominio.com)' // Boas práticas do OSM
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon, address } = data[0];
      return {
        lat: parseFloat(lat),
        lng: parseFloat(lon),
        state: address.state || null,
        country: address.country || null
      };
    } else {
      return null; // Cidade não encontrada
    }
  } catch (error) {
    console.error('Erro ao buscar coordenadas:', error);
    return null;
  }
}

// Busca inteligente por proximidade
export async function findNearestHemocentros(cityName, allHemocentros) {
  let userLocation = null;

  // Primeiro, tenta buscar coordenadas com a API
  userLocation = await getCoordinatesFromCity(cityName);

  // Se a API não encontrar, tenta no mapa local
  if (!userLocation) {
    const normalizedCity = normalizeString(cityName);
    userLocation = cityCoordinates[normalizedCity];

    // Se ainda não encontrar, usar fallback
    if (!userLocation) {
      // Fallback: usar Santos como padrão para SP
      userLocation = cityCoordinates['santos'];
    }
  }

  // Calcular distância para cada hemocentro
  const hemocentrosWithDistance = [];
  
  Object.entries(allHemocentros).forEach(([state, centers]) => {
    centers.forEach(center => {
      const centerKey = center.name;
      const centerCoords = hemocentroCoordinates[centerKey];
      
      if (centerCoords) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          centerCoords.lat,
          centerCoords.lng
        );
        
        hemocentrosWithDistance.push({
          ...center,
          state,
          distance: Math.round(distance),
          distanceKm: distance
        });
      } else {
        const cityCoords = cityCoordinates[normalizeString(center.city)];
        if (cityCoords) {
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            cityCoords.lat,
            cityCoords.lng
          );
          
          hemocentrosWithDistance.push({
            ...center,
            state,
            distance: Math.round(distance),
            distanceKm: distance
          });
        }
      }
    });
  });

  // Ordenar por distância e retornar os 2 mais próximos
  return hemocentrosWithDistance
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 2);
}

export default {
  cityCoordinates,
  hemocentroCoordinates,
  calculateDistance,
  findNearestHemocentros
};