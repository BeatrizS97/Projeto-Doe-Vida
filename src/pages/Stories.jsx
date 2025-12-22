// src/pages/Stories.jsx
import React, { useEffect, useRef } from 'react';
import { Droplet, TrendingDown, Heart } from 'lucide-react';
import { testimonials, estadosMenosDoacao } from '../data/testimonials';
import { bloodImpact } from '../data/statistics';
import BloodTypesChart from '../components/BloodTypesChart';
import { useNavigate } from 'react-router-dom';

// Página de "Histórias de Vida": apresenta depoimentos reais, dados sobre doação, tipos sanguíneos e call-to-action
// Usa Intersection Observer para animações progressivas ao rolar a página
const Stories = () => {
  const navigate = useNavigate();
  // Referências para elementos que terão animações disparadas pelo scroll
  const sectionRefs = useRef([]);

  // Configura Intersection Observer para adicionar classe de animação quando o elemento entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove opacidade inicial e aplica animação suave
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        // Dispara animação quando 10% do elemento estiver visível (ajustado para evitar delay visual)
        threshold: 0.1,
        // Margem negativa no rootMargin para antecipar a animação antes do elemento ficar totalmente visível
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observa todos os elementos registrados via refs
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Limpa observer ao desmontar componente para evitar memory leaks
    return () => observer.disconnect();
  }, []);

  // Função utilitária para associar refs dinamicamente com base no índice
  const setRef = (el, index) => {
    sectionRefs.current[index] = el;
  };

  return (
    // Fundo suave com gradiente para harmonizar com o tema geral do site
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-6 lg:py-8">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Cabeçalho da página — texto centralizado com hierarquia visual clara */}
        <div
          ref={(el) => setRef(el, 0)}
          className="text-center mb-6 lg:mb-8 opacity-0"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Histórias de Vida
          </h1>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Cada doação tem o poder de transformar histórias
          </p>
        </div>

        {/* Seção de depoimentos: cards compactos com avatar, dados demográficos e citação */}
        <div
          ref={(el) => setRef(el, 1)}
          className="max-w-3xl mx-auto space-y-3 lg:space-y-4 mb-6 lg:mb-8 opacity-0"
        >
          {testimonials.map((person, idx) => (
            <div 
              key={idx} 
              className="group bg-gradient-to-br from-white to-rose-50/40 rounded-xl shadow-sm p-4 border border-rose-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-slide-up"
              // Animação escalonada para dar sensação de "fluxo" ao carregar os depoimentos
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Avatar estilizado com inicial do nome e gota animada como detalhe visual */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg lg:text-xl font-bold shadow-sm group-hover:scale-110 transition-all">
                    {person.name.charAt(0)}
                  </div>
                  {/* Gota de sangue estilizada como partícula animada */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 animate-bounce" style={{ animationDuration: '2s', animationDelay: `${idx * 0.3}s` }}>
                    <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
                      <path d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z" fill="#f43f5e"/>
                      <ellipse cx="10" cy="11" rx="2" ry="2.5" fill="white" opacity="0.4"/>
                    </svg>
                  </div>
                  {/* Ponto pulsante para reforçar dinamismo */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full animate-ping"></div>
                </div>

                {/* Conteúdo textual do depoimento */}
                <div className="flex-1">
                  {/* Cabeçalho do depoimento com nome, idade, ano e condição médica */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                        {person.name}
                      </h3>
                      {/* Badges informativas com ícones SVG embutidos para melhor controle visual */}
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="inline-flex items-center gap-1 text-xs lg:text-sm text-gray-600 bg-rose-50 px-2 py-1 rounded-full">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </svg>
                          {person.age} anos
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs lg:text-sm text-gray-600 bg-red-50 px-2 py-1 rounded-full">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                          </svg>
                          {person.year}
                        </span>
                      </div>
                    </div>
                    {/* Destaque visual para condição clínica (ex: "Câncer", "Acidente") */}
                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-600 to-red-600 text-white px-2.5 py-1 rounded-full text-xs lg:text-sm font-semibold">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {person.condition}
                    </div>
                  </div>

                  {/* Citação com aspas decorativas e formatação estilizada para legibilidade */}
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-3xl text-rose-200/40 font-serif leading-none">"</div>
                    <p className="text-xs sm:text-sm lg:text-[13px] leading-[1.45] lg:leading-[1.5] border-l-4 border-rose-500 pl-4 pr-3 lg:pl-5 lg:pr-4 bg-gradient-to-r from-rose-50 to-transparent py-2.5 rounded-r-lg text-gray-800 italic relative">
                      {person.story}
                    </p>
                    <div className="absolute -right-2 -bottom-2 text-3xl text-rose-200/40 font-serif leading-none rotate-180">"</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gráfico de tipos sanguíneos: componente reutilizável, sem modificações visuais aqui */}
        <div
          ref={(el) => setRef(el, 2)}
          className="max-w-3xl mx-auto mb-6 lg:mb-8 opacity-0"
        >
          <div className="bg-white rounded-xl shadow-md p-4 border border-rose-100/50">
            <BloodTypesChart />
          </div>
        </div>

        {/* Seção "Como o Sangue Salva Vidas" — destaque visual com dados impactantes */}
        <div
          ref={(el) => setRef(el, 3)}
          className="max-w-2xl mx-auto mb-4 lg:mb-5 opacity-0"
        >
          <div className="relative bg-gradient-to-br from-rose-500 via-red-600 to-rose-700 rounded-2xl shadow-xl p-3 lg:p-4 text-white overflow-hidden group">
            {/* Efeito de brilho animado ao passar o mouse para dar profundidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Partículas sutis para reforçar atmosfera de "vida" e movimento */}
            <div className="absolute top-2 left-4 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-6 right-6 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-5 left-8 w-0.5 h-0.5 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

            {/* Ícone central com gota de sangue estilizada */}
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-6 h-6 text-white animate-pulse" viewBox="0 0 24 24" style={{ animationDuration: '2s' }}>
                    <path fill="currentColor" d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z"/>
                    <ellipse cx="10.5" cy="11" rx="2" ry="3" fill="white" opacity="0.4"/>
                  </svg>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-extrabold mb-1 text-center">
              Como o Sangue Salva Vidas
            </h2>
            <p className="text-[15px] lg:text-lg opacity-90 mb-4 text-center font-medium leading-relaxed">
              O impacto de uma única doação
            </p>

            {/* Três cards com métricas essenciais — uso de dados simbólicos para impacto emocional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              {[
                { title: '1', subtitle: 'doação', value: '4', unit: 'vidas salvas', icon: '🩸', color: 'from-rose-600 to-red-700' },
                { title: '450ml', subtitle: 'de sangue', value: '100%', unit: 'esperança', icon: '💧', color: 'from-red-600 to-rose-700' },
                { title: '60min', subtitle: 'do seu tempo', value: '∞', unit: 'gratidão', icon: '⏳', color: 'from-rose-700 to-red-800' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${item.color} rounded-xl p-2 border border-white/20 hover:border-white/40 hover:shadow-md transition-all duration-300 group/card transform hover:scale-105`}
                >
                  <div className="flex flex-col items-center text-center relative">
                    <div className="text-2xl lg:text-3xl font-bold mb-0.5 group-hover/card:scale-110 transition-transform">
                      {item.title}
                    </div>
                    <div className="text-[12px] opacity-80 mb-0.5 leading-tight">{item.subtitle}</div>
                    <div className="text-lg lg:text-xl font-bold text-rose-200 group-hover/card:text-white transition-colors">
                      {item.value}
                    </div>
                    <div className="text-[12px] opacity-70">{item.unit}</div>
                    {/* Ícone flutuante animado como detalhe visual */}
                    <div className="absolute top-1 right-1 w-3 h-3 bg-white/20 rounded-full flex items-center justify-center text-[9px] animate-bounce" style={{ animationDuration: '2s', animationDelay: `${idx * 0.2}s` }}>
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Explicação sobre os componentes do sangue — reforça valor educativo da doação */}
            <div className="mt-3 pt-2 border-t border-white/20">
              <h3 className="text-xl lg:text-2xl font-extrabold mb-2 text-center">
                Uma Doação, Múltiplos Usos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {bloodImpact.oneDonation.components.map((component, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20 hover:border-white/40 hover:shadow-md transition-all duration-300 group/component transform hover:scale-105"
                  >
                    <div className="flex items-start gap-2">
                      {/* Ícone de gota como representação visual do componente */}
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover/component:scale-110 transition-transform">
                        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C12 2 7 8 7 13C7 16.31 9.69 19 13 19C16.31 19 19 16.31 19 13C19 8 12 2 12 2Z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base lg:text-lg mb-0.5 group-hover/component:text-rose-200 transition-colors">
                          {component.name}
                        </h4>
                        <p className="text-sm opacity-90 leading-tight">
                          {component.use}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Seção de estados com baixa taxa de doação — dados reais para conscientização */}
        <div
          ref={(el) => setRef(el, 4)}
          className="max-w-3xl mx-auto mb-6 lg:mb-8 opacity-0"
        >
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-xl shadow-md p-4 border border-rose-100/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
              {/* Ícone com seta de tendência para reforçar "necessidade crítica" */}
              <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-red-700 rounded-xl shadow-sm animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 text-center sm:text-left">
                Estados que Mais Precisam de Doadores
              </h2>
            </div>
            
            {/* Lista de estados com barra de progresso visual para % de doadores */}
            <div className="space-y-3">
              {estadosMenosDoacao.map((estado, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-3.5 border border-rose-100 hover:border-rose-300 hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <div className="flex items-center gap-2.5">
                      {/* Posição no ranking */}
                      <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm shadow-sm group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-base lg:text-lg font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                          {estado.estado}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-0.5">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          Pop: {estado.populacao}
                        </div>
                      </div>
                    </div>
                    {/* Destaque numérico da porcentagem */}
                    <div className="bg-gradient-to-r from-rose-100 to-red-100 px-3 py-1.5 rounded-full">
                      <span className="text-lg lg:text-xl text-rose-600 font-bold">
                        {estado.porcentagem}%
                      </span>
                    </div>
                  </div>
                  {/* Barra de progresso customizada com gradiente e animação interna */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-rose-500 via-red-600 to-rose-500 h-2.5 rounded-full transition-all duration-1000 relative"
                        // Escala ajustada para tornar a barra visualmente proporcional (20x o valor percentual)
                        style={{ width: `${estado.porcentagem * 20}%` }}
                      >
                        {/* Efeito pulsante no preenchimento para dar sensação de "vitalidade" */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    {/* Número absoluto de doadores */}
                    <span className="text-xs lg:text-sm text-gray-700 font-semibold min-w-[80px] flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                      {estado.doadores}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mensagem de referência com meta da OMS para contexto educativo */}
            <div className="mt-5 pt-4 border-t border-rose-200">
              <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-bold text-rose-600">Meta da OMS:</span> 3% da população como doadores
                </p>
                <p className="text-sm text-gray-600">
                  Estes estados ainda estão abaixo da metade da meta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action final — compacto, direto e com navegação clara */}
        <div
          ref={(el) => setRef(el, 5)}
          className="max-w-lg mx-auto opacity-0"
        >
          <div className="relative bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 rounded-2xl shadow-xl p-5 text-white text-center overflow-hidden group">
            {/* Efeito de brilho animado no hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {/* Partículas decorativas para reforçar dinamismo */}
            <div className="absolute top-3 left-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-5 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="relative z-10">
              {/* Ícone de coração com pulsação sutil */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '1.5s' }}>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-0.5">
                Seja você também um doador!
              </h3>
              <p className="text-[15px] lg:text-lg mb-3 opacity-95">
                Sua história pode inspirar outras pessoas a salvar vidas
              </p>
              
              {/* Botão com navegação direta para /hemocentros + scroll suave ao topo */}
              <button 
  onClick={() => {
    navigate('/hemocentros');
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  }}
  className="bg-white text-rose-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-sm font-bold hover:bg-rose-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto"
>
                {/* Efeito de brilho animado dentro do botão */}
                <span className="flex items-center justify-center gap-2">
                  Encontrar Hemocentro
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Stories;