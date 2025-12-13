// src/pages/Care.jsx
import React from 'react';
import { Calendar, Heart, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { careTips, eligibility, donationFacts } from '../data/statistics';

const Care = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Header Animado */}
        <div className="text-center mb-10 animate-fade-in">
          {/* Decoração superior com CORAÇÃO */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300 animate-pulse"></div>
            <div className="relative">
              <Heart className="w-5 h-5 text-rose-500 animate-pulse" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 animate-ping">
                <Heart className="w-5 h-5 text-rose-300" />
              </div>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300 animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Cuidados e Orientações
          </h1>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber para uma doação segura e tranquila
          </p>
        </div>
        
        {/* Antes e Depois da Doação - CONTAINERS COMPACTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16">
          
          {/* Antes da Doação */}
          <div className="group bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-xl p-5 lg:p-6 border border-rose-100/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-slide-up">
            <div className="flex items-center mb-5">
              {/* Ícone Personalizado: Calendário com Coração */}
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                    <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/>
                    <path d="M12 14.5c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2z" fill="currentColor"/>
                  </svg>
                </div>
                {/* Partícula animada */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="ml-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                  Antes de Doar
                </h2>
                <p className="text-sm text-gray-600">Prepare-se adequadamente</p>
              </div>
            </div>
            
            <ul className="space-y-2.5">
              {careTips.before.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start p-2.5 rounded-lg hover:bg-rose-50/50 transition-all duration-300 group/item animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Check customizado */}
                  <div className="relative w-5 h-5 flex-shrink-0 mt-0.5 mr-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Depois da Doação */}
          <div className="group bg-gradient-to-br from-white to-red-50/30 rounded-2xl shadow-xl p-5 lg:p-6 border border-red-100/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-5">
              {/* Ícone Personalizado: Coração com Proteção */}
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-700 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '2s' }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                {/* Partícula animada */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="ml-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                  Após Doar
                </h2>
                <p className="text-sm text-gray-600">Cuide-se com carinho</p>
              </div>
            </div>
            
            <ul className="space-y-2.5">
              {careTips.after.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start p-2.5 rounded-lg hover:bg-red-50/50 transition-all duration-300 group/item animate-slide-up"
                  style={{ animationDelay: `${(idx + 5) * 0.1}s` }}
                >
                  {/* Check customizado */}
                  <div className="relative w-5 h-5 flex-shrink-0 mt-0.5 mr-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-500 rounded-full group-hover/item:scale-110 transition-transform"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base lg:text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quem Pode Doar - REDESENHADO */}
        <div className="max-w-6xl mx-auto mb-12 lg:mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-2xl shadow-2xl p-6 lg:p-8 text-white overflow-hidden group">
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Partículas decorativas */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 left-16 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-20 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Gotas decorativas */}
            <div className="absolute top-6 right-24 opacity-10">
              <svg className="w-8 h-8 text-white animate-bounce" viewBox="0 0 24 24" style={{ animationDuration: '3s' }}>
                <path fill="currentColor" d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z"/>
              </svg>
            </div>
            <div className="absolute bottom-10 left-24 opacity-10">
              <svg className="w-6 h-6 text-white animate-bounce" viewBox="0 0 24 24" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                <path fill="currentColor" d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Quem Pode Doar?</h2>
                <p className="text-white/90 text-sm lg:text-base">Verifique os requisitos e impedimentos</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                
                {/* Requisitos Básicos - ROSA CLARO */}
                <div className="relative bg-white/20 backdrop-blur-md rounded-xl p-5 lg:p-6 border-2 border-rose-300/40 hover:scale-105 hover:border-rose-200/60 transition-all duration-300 group/card shadow-lg overflow-hidden">
                  {/* Brilho animado de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-rose-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-rose-300/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {/* Ícone customizado */}
                      <div className="w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center mr-3 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all shadow-md">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold">Requisitos Básicos</h3>
                    </div>
                    <ul className="space-y-2.5 text-base lg:text-lg">
                      {eligibility.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <span className="text-white/90 mr-2 group-hover/item:scale-125 transition-transform inline-block text-lg">✓</span>
                          <span className="group-hover/item:text-white transition-colors">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impedimentos Temporários - ROSA MÉDIO */}
                <div className="relative bg-white/20 backdrop-blur-md rounded-xl p-5 lg:p-6 border-2 border-rose-400/50 hover:scale-105 hover:border-rose-300/70 transition-all duration-300 group/card shadow-lg overflow-hidden">
                  {/* Brilho animado de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-rose-400/40 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-rose-400/30 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {/* Ícone customizado */}
                      <div className="w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center mr-3 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all shadow-md">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold">Temporários</h3>
                    </div>
                    <ul className="space-y-2.5 text-base lg:text-lg">
                      {eligibility.temporaryImpediments.slice(0, 6).map((imp, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <span className="text-white/90 mr-2 group-hover/item:scale-125 transition-transform inline-block text-lg">⏱</span>
                          <span className="group-hover/item:text-white transition-colors">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impedimentos Permanentes - VERMELHO ESCURO */}
                <div className="relative bg-white/20 backdrop-blur-md rounded-xl p-5 lg:p-6 border-2 border-red-500/60 hover:scale-105 hover:border-red-400/80 transition-all duration-300 group/card shadow-lg overflow-hidden">
                  {/* Brilho animado de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-red-400/30 rounded-full animate-ping" style={{ animationDelay: '1.1s' }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {/* Ícone customizado */}
                      <div className="w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center mr-3 group-hover/card:scale-110 group-hover/card:rotate-12 transition-all shadow-md">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold">Permanentes</h3>
                    </div>
                    <ul className="space-y-2.5 text-base lg:text-lg">
                      {eligibility.permanentImpediments.map((imp, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <span className="text-white/90 mr-2 group-hover/item:scale-125 transition-transform inline-block text-lg">⚠</span>
                          <span className="group-hover/item:text-white transition-colors">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fatos sobre Doação - REDESENHADO */}
        <div className="max-w-5xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-2xl shadow-xl p-6 lg:p-8 border border-rose-100/50">
            
            <div className="flex items-center justify-center mb-8">
              {/* Ícone Info Customizado */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl shadow-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path d="M12 16v-4M12 8h.01" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                {/* Anel pulsante */}
                <div className="absolute inset-0 border-4 border-rose-300 rounded-2xl animate-ping opacity-30"></div>
              </div>
              
              <div className="ml-4 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  Informações Importantes
                </h2>
                <p className="text-gray-600 text-sm lg:text-base">Dados essenciais sobre a doação</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationFacts.map((fact, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-white border-l-4 border-rose-500 rounded-lg shadow-md hover:shadow-xl pl-5 pr-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 animate-slide-up"
                  style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
                >
                  {/* Brilho de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                  
                  {/* Ícone decorativo */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-125 transition-transform">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z"/>
                    </svg>
                  </div>
                  
                  <p className="relative text-gray-700 text-base lg:text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - REDESENHADO */}
        <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-2xl shadow-2xl p-6 lg:p-8 text-white text-center overflow-hidden group">
            
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Partículas */}
            <div className="absolute top-6 left-8 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-12 right-16 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              {/* Ícone de localização */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Pronto para Doar?
              </h3>
              
              <p className="text-base lg:text-lg mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Agora que você já sabe tudo sobre a doação, que tal encontrar o hemocentro mais próximo e fazer a diferença?
              </p>
              
              <button 
                onClick={() => window.location.href = '/hemocentros'}
                className="relative group/btn bg-white text-rose-600 px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-bold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              >
                {/* Efeito de brilho no botão */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100/50 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                
                <span className="relative flex items-center justify-center gap-2">
                  Encontrar Hemocentro
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
              
              {/* Linha decorativa */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-0.5 w-12 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="h-0.5 w-12 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Care;