import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { careTips, eligibility, donationFacts } from '../data/statistics';

const Care = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 px-2">
            Cuidados e Orientações
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Tudo que você precisa saber para uma doação segura e tranquila
          </p>
        </div>
        
        {/* Antes e Depois - Espaçamento MÍNIMO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          
          {/* Antes da Doação */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 lg:p-6 border border-rose-100/50 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-6.5 sm:h-6.5 lg:w-7 lg:h-7 text-white" />
                </div>
              </div>
              
              <div className="ml-3 sm:ml-3.5 lg:ml-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                  Antes de Doar
                </h2>
                <p className="text-xs sm:text-xs lg:text-sm text-gray-600">Prepare-se adequadamente</p>
              </div>
            </div>
            
            {/* Espaçamento ULTRA reduzido */}
            <ul className="space-y-0">
              {careTips.before.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-md hover:bg-rose-50/50 transition-all duration-300"
                >
                  <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5 mr-2 sm:mr-2.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-0.5 sm:p-0.5 lg:p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-[1.3] sm:leading-[1.35]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Depois da Doação */}
          <div className="bg-gradient-to-br from-white to-red-50/30 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 lg:p-6 border border-red-100/50 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-700 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-6.5 sm:h-6.5 lg:w-7 lg:h-7 text-white animate-pulse" style={{ animationDuration: '2s' }} />
                </div>
              </div>
              
              <div className="ml-3 sm:ml-3.5 lg:ml-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                  Após Doar
                </h2>
                <p className="text-xs sm:text-xs lg:text-sm text-gray-600">Cuide-se com carinho</p>
              </div>
            </div>
            
            {/* Espaçamento ULTRA reduzido */}
            <ul className="space-y-0">
              {careTips.after.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-md hover:bg-red-50/50 transition-all duration-300"
                >
                  <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5 mr-2 sm:mr-2.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-500 rounded-full"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-0.5 sm:p-0.5 lg:p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-[1.3] sm:leading-[1.35]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quem Pode Doar - Mais compacto e responsivo */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 text-white overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-4 sm:mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-2 sm:mb-3">
                  <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">Quem Pode Doar?</h2>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base">Verifique os requisitos e impedimentos</p>
              </div>
              
              {/* Grid 100% responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4">
                
                {/* Requisitos Básicos */}
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-3.5 sm:p-4 lg:p-5 border border-rose-300/40 shadow-lg">
                  <div className="flex items-center mb-2.5 sm:mb-3">
                    <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 bg-white/25 rounded-md sm:rounded-lg flex items-center justify-center mr-2.5 sm:mr-3">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold">Requisitos Básicos</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {eligibility.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base lg:text-lg leading-[1.3] sm:leading-[1.35]">
                        <span className="text-white/90 mr-2 flex-shrink-0 text-sm sm:text-base">✓</span>
                        <span className="break-words">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Temporários */}
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-3.5 sm:p-4 lg:p-5 border border-rose-400/50 shadow-lg">
                  <div className="flex items-center mb-2.5 sm:mb-3">
                    <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 bg-white/25 rounded-md sm:rounded-lg flex items-center justify-center mr-2.5 sm:mr-3">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold">Temporários</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {eligibility.temporaryImpediments.slice(0, 6).map((imp, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base lg:text-lg leading-[1.3] sm:leading-[1.35]">
                        <span className="text-white/90 mr-2 flex-shrink-0 text-sm sm:text-base">⏱</span>
                        <span className="break-words">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Permanentes */}
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-3.5 sm:p-4 lg:p-5 border border-red-500/60 shadow-lg sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2.5 sm:mb-3">
                    <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 lg:w-8 lg:h-8 bg-white/25 rounded-md sm:rounded-lg flex items-center justify-center mr-2.5 sm:mr-3">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold">Permanentes</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {eligibility.permanentImpediments.map((imp, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base lg:text-lg leading-[1.3] sm:leading-[1.35]">
                        <span className="text-white/90 mr-2 flex-shrink-0 text-sm sm:text-base">⚠</span>
                        <span className="break-words">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Importantes - Responsivo */}
        <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-white via-rose-50/20 to-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 lg:p-6 border border-rose-100/50">
            
            <div className="flex flex-col items-center mb-4 sm:mb-5 lg:mb-6">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-2.5 lg:mb-3">
                <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-2xl animate-pulse" style={{ animationDuration: '2s' }}>
                  <defs>
                    <linearGradient id="mainDrop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#fb7185' }} />
                      <stop offset="50%" style={{ stopColor: '#f43f5e' }} />
                      <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                    </linearGradient>
                  </defs>
                  <path d="M40 12 C40 12, 20 30, 20 45 C20 57, 28 68, 40 68 C52 68, 60 57, 60 45 C60 30, 40 12, 40 12 Z" fill="url(#mainDrop)"/>
                  <ellipse cx="32" cy="35" rx="8" ry="12" fill="white" opacity="0.35"/>
                </svg>
              </div>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-1">
                Informações Importantes
              </h2>
              <p className="text-gray-600 text-xs sm:text-xs lg:text-sm">Dados essenciais sobre a doação</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 lg:gap-4">
              {donationFacts.map((fact, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg sm:rounded-xl p-3.5 sm:p-4 lg:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-rose-100 hover:border-rose-300"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex-shrink-0">
                      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
                        <defs>
                          <linearGradient id={`drop-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#fb7185' }} />
                            <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                          </linearGradient>
                        </defs>
                        <path d="M20 6C20 6 10 15 10 22C10 27 14 32 20 32C26 32 30 27 30 22C30 15 20 6 20 6Z" fill={`url(#drop-${idx})`}/>
                        <ellipse cx="16" cy="18" rx="3" ry="4" fill="white" opacity="0.4"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-snug flex-1 break-words">
                      {fact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Ultra compacto */}
        <div className="max-w-2xl mx-auto px-2 sm:px-4">
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-xl sm:rounded-2xl shadow-xl py-4 px-5 sm:py-5 sm:px-6 lg:py-6 lg:px-7 text-white text-center overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
                Pronto para Doar?
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 opacity-90 px-2">
                Encontre o hemocentro mais próximo
              </p>
              
              <button 
                onClick={() => window.location.href = '/hemocentros'}
                className="bg-white text-rose-600 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold hover:bg-rose-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className="hidden xs:inline sm:inline">Encontrar Hemocentro</span>
                  <span className="xs:hidden sm:hidden">Encontrar</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Care;