// src/pages/Map.jsx
import React, { useState } from 'react';
import { MapPin, Search, Phone, Navigation, AlertCircle, Heart } from 'lucide-react';
import { hemocentros, cidadesParaEstado } from '../data/hemocentros';
import { findNearestHemocentros } from '../utils/searchHelper';
import Button from '../components/Button';

const Map = () => {
  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedState, setSelectedState] = useState('all');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if (!city) {
      setSearchResults([]);
      setNoResults(false);
      return;
    }
    
    const searchTerm = city.toLowerCase().trim();
    const nearestResults = findNearestHemocentros(searchTerm, hemocentros);
    
    if (nearestResults && nearestResults.length > 0) {
      setSearchResults(nearestResults);
      setNoResults(false);
      return;
    }

    const estadoDaCidade = cidadesParaEstado[searchTerm];
    
    if (estadoDaCidade && hemocentros[estadoDaCidade]) {
      const results = hemocentros[estadoDaCidade].slice(0, 2).map(center => ({
        ...center,
        state: estadoDaCidade
      }));
      setSearchResults(results);
      setNoResults(false);
    } else {
      setSearchResults([]);
      setNoResults(true);
    }
  };

  const filteredHemocentros = selectedState === 'all' 
    ? hemocentros 
    : { [selectedState]: hemocentros[selectedState] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
{/* Header Animado - SEM CORAÇÃO */}
<div className="text-center mb-8 animate-fade-in">
  <div className="relative inline-block mb-4">
    {/* Glow difuso com efeito 3D — IDÊNTICO AO DA HOME */}
    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>

    {/* Pin com coração — versão 3D com sombra e tamanho maior */}
    <div className="relative w-20 h-20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
      <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg" fill="none">
        {/* Pin vermelho sólido */}
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill="#f43f5e"
        />
        {/* Coração branco */}
        <path
          d="M12 13.5c-1.5-1-2.5-2-2.5-3.25 0-.69.56-1.25 1.25-1.25.36 0 .69.15.93.39l.32.36.32-.36c.24-.24.57-.39.93-.39.69 0 1.25.56 1.25 1.25 0 1.25-1 2.25-2.5 3.25z"
          fill="#fff"
        />
      </svg>
      
      {/* Anel de pulso animado — aura difusa rosa claro */}
      <div className="absolute inset-0 animate-ping opacity-30">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <circle
            cx="12"
            cy="9"
            r="6"
            stroke="#fecaca"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  </div>

  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
    Hemocentro Perto de Mim
  </h1>
  <p className="text-base lg:text-lg text-gray-600">
    Encontre o local mais próximo para doar
  </p>
</div>
        {/* Search Bar - REDESENHADO */}
        <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-xl p-5 border border-rose-100/50">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Digite sua cidade..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-xl text-base focus:border-rose-500 focus:outline-none transition-all bg-white"
                />
                {/* Ícone de busca dentro do input */}
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <Button
                onClick={handleSearch}
                variant="primary"
                size="medium"
                className="w-full sm:w-auto px-6 py-3 font-bold"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Buscar
                </span>
              </Button>
            </div>
            
            {/* Dica melhorada */}
            <div className="mt-3 flex items-start gap-2 bg-rose-50 p-3 rounded-lg border-l-4 border-rose-500">
              <svg className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold">Busca inteligente:</span> Calculamos a distância real e mostramos os 2 hemocentros mais próximos!
              </p>
            </div>
          </div>
        </div>

        {/* No Results Message - MELHORADO */}
        {noResults && (
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-xl shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-yellow-800 text-base mb-2">
                    Nenhum hemocentro encontrado para "{city}"
                  </h3>
                  <p className="text-yellow-700 text-sm mb-1">
                    Não encontramos hemocentros nesta localidade.
                  </p>
                  <p className="text-yellow-600 text-sm font-semibold">
                    💡 Dica: Tente buscar pela cidade mais próxima ou veja a lista completa abaixo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Results - REDESENHADO */}
        {searchResults.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8 animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Hemocentros Mais Próximos
                </h2>
                <p className="text-gray-600 text-sm">
                  {searchResults.length} local(is) encontrado(s)
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {searchResults.map((center, idx) => (
                <div 
                  key={idx} 
                  className="group bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 border-2 border-rose-200 hover:border-rose-400 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {/* Ícone personalizado */}
                    <div className="relative flex-shrink-0">
                      <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      {idx === 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                          {center.name}
                        </h3>
                        {idx === 0 && (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-fit">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                            </svg>
                            MAIS PRÓXIMO
                          </span>
                        )}
                      </div>
                      
                      {center.distance && (
                        <div className="mb-3 inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-3 py-1.5 rounded-lg font-bold text-sm">
                          <Navigation className="w-4 h-4" />
                          <span>{center.distance} km de distância</span>
                        </div>
                      )}
                      
                      <div className="space-y-2 text-gray-600 text-sm lg:text-base">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {center.city} - {center.state}
                              {center.district && ` • ${center.district}`}
                            </p>
                            <p className="text-gray-600">{center.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-6">
                          <Phone className="w-4 h-4 text-rose-600" />
                          <a 
                            href={`tel:${center.phone}`}
                            className="text-rose-600 font-semibold hover:underline"
                          >
                            {center.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-3 ml-6">
                        <a
                          href={`https://www.google.com/maps/search/${encodeURIComponent(center.name + ' ' + center.city)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold text-sm bg-rose-50 px-3 py-1.5 rounded-lg hover:bg-rose-100 transition-all"
                        >
                          <Navigation className="w-4 h-4" />
                          Como Chegar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* State Filter - MELHORADO */}
        <div className="max-w-5xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-lg p-5 border border-rose-100/50">
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
              Navegue por Estado
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedState('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm shadow-md ${
                  selectedState === 'all'
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white scale-105'
                    : 'bg-white text-gray-700 hover:bg-rose-50 hover:scale-105'
                }`}
              >
                Todos
              </button>
              {Object.keys(hemocentros).sort().map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm shadow-md ${
                    selectedState === state
                      ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white scale-105'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:scale-105'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Hemocentros List - ALTURA DINÂMICA */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
            {selectedState === 'all' 
              ? 'Todos os Hemocentros do Brasil' 
              : `Hemocentros - ${selectedState}`}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            {Object.entries(filteredHemocentros).sort().map(([state, centers]) => (
              <div 
                key={state} 
                className="bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-lg p-5 border border-rose-100/50 hover:shadow-xl transition-all duration-300 animate-slide-up h-fit"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-rose-500">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{state.substring(0, 2)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{state}</h3>
                  <span className="ml-auto bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 rounded-full">
                    {centers.length}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {centers.map((center, idx) => (
                    <div 
                      key={idx} 
                      className="group border-l-4 border-rose-500 pl-4 py-2 hover:bg-rose-50 transition-all rounded-r-lg"
                    >
                      <h4 className="font-bold text-base text-gray-800 mb-1 group-hover:text-rose-600 transition-colors">
                        {center.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {center.city}
                        {center.district && ` • ${center.district}`}
                      </p>
                      <p className="text-sm text-gray-700 mb-2">{center.address}</p>
                      <a 
                        href={`tel:${center.phone}`}
                        className="inline-flex items-center gap-1 text-rose-600 font-semibold hover:underline text-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {center.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section - INSPIRADO NA HOME/CARE */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-xl p-6 border border-rose-100/50">
            
            {/* Header da Seção */}
            <div className="text-center mb-6">
              {/* Ícone Personalizado: Gotas de Sangue Animadas */}
              <div className="relative w-14 h-14 flex-shrink-0 mx-auto mb-4">
                {/* Gota principal - formato de gota real */}
                <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '2s' }}>
                  <svg viewBox="0 0 56 56" className="w-full h-full drop-shadow-lg">
                    <defs>
                      <linearGradient id="dropGradientTips" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fb7185" />
                        <stop offset="50%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    {/* Formato de gota de sangue - mais larga e gordinha */}
                    <path 
                      d="M28 8 C28 8, 14 20, 14 32 C14 41, 20 49, 28 49 C36 49, 42 41, 42 32 C42 20, 28 8, 28 8 Z" 
                      fill="url(#dropGradientTips)"
                    />
                    {/* Brilho interno */}
                    <ellipse cx="24" cy="26" rx="6" ry="8" fill="white" opacity="0.3"/>
                    <ellipse cx="22" cy="24" rx="3" ry="4" fill="white" opacity="0.5"/>
                  </svg>
                </div>
                
                {/* Gota pequena superior direita */}
                <div className="absolute -top-1 -right-1 w-5 h-5 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>
                  <svg viewBox="0 0 20 20" className="w-full h-full drop-shadow-md">
                    <path 
                      d="M10 2 C10 2, 5 7, 5 11 C5 14, 7 16, 10 16 C13 16, 15 14, 15 11 C15 7, 10 2, 10 2 Z" 
                      fill="#dc2626"
                    />
                    <ellipse cx="8" cy="9" rx="2" ry="2.5" fill="white" opacity="0.4"/>
                  </svg>
                </div>
                
                {/* Gota pequena inferior esquerda */}
                <div className="absolute -bottom-1 -left-1 w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.6s' }}>
                  <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-md">
                    <path 
                      d="M8 1 C8 1, 4 5, 4 8 C4 10.5, 5.5 12, 8 12 C10.5 12, 12 10.5, 12 8 C12 5, 8 1, 8 1 Z" 
                      fill="#f43f5e"
                    />
                    <ellipse cx="6.5" cy="6.5" rx="1.5" ry="2" fill="white" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Antes de Ir ao Hemocentro
              </h3>
              <p className="text-gray-600 text-sm">Prepare-se adequadamente para a doação</p>
            </div>
            
            {/* Cards de Dicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1 - Leve com você */}
              <div className="group bg-white rounded-xl p-4 border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {/* Ícone Documento */}
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <svg className="w-6 h-6 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-gray-800">Leve com você</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    {/* Check customizado */}
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Documento oficial com foto</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Esteja bem alimentado</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Tenha dormido bem</span>
                  </li>
                </ul>
              </div>
              
              {/* Card 2 - Horários */}
              <div className="group bg-white rounded-xl p-4 border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {/* Ícone Relógio */}
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <svg className="w-6 h-6 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-gray-800">Horários</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Ligue antes para confirmar</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Alguns funcionam aos sábados</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                      <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="leading-relaxed">Chegue com antecedência</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Map;