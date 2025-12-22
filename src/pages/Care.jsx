import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { careTips, eligibility, donationFacts } from '../data/statistics';
import { useNavigate } from "react-router-dom" // Hook para navegação entre rotas

// Componente principal da página "Cuidados e Orientações"
// Fornece orientações pré e pós-doação, critérios de elegibilidade e fatos relevantes
const Care = () => {
  const navigate = useNavigate()

  return (
    // Fundo suave com gradiente para criar contraste visual suave
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Seção de cabeçalho com título centralizado e descrição */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Cuidados e Orientações
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tudo que você precisa saber para uma doação segura e tranquila
          </p>
        </div>

        {/* Layout em duas colunas (em telas grandes) com orientações antes e depois da doação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">

          {/* Card com orientações pré-doação */}
          <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-rose-100/50 hover:shadow-xl transition-all duration-300">
            {/* Cabeçalho do card com ícone personalizado e título */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                {/* Fundo circular com gradiente para o ícone */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl"></div>
                {/* Ícone centralizado sobre o gradiente */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                  Antes de Doar
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">Prepare-se adequadamente</p>
              </div>
            </div>

            {/* Lista de orientações pré-doação com ícones de check personalizados */}
            <ul className="space-y-0.5 sm:space-y-1">
              {careTips.before.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-2.5 py-1 sm:py-1.5 px-2 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  {/* Ícone de marcação com gradiente e SVG embutido para garantir aparência consistente */}
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card com orientações pós-doação */}
          <div className="bg-gradient-to-br from-white to-red-50/30 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-red-100/50 hover:shadow-xl transition-all duration-300">
            {/* Cabeçalho do card com ícone animado */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-700 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Ícone de coração com animação sutil de pulsação */}
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white animate-pulse" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                  Após Doar
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">Cuide-se com carinho</p>
              </div>
            </div>

            {/* Lista de orientações pós-doação */}
            <ul className="space-y-0.5 sm:space-y-1">
              {careTips.after.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-2.5 py-1 sm:py-1.5 px-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-rose-500 rounded-full"></div>
                    <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seção com critérios de elegibilidade para doação */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
          {/* Card principal com fundo em gradiente forte e destaque visual */}
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 text-white overflow-hidden">

            {/* Efeito decorativo animado ao passar o mouse */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="text-center mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Quem pode doar?</h2>
                <p className="text-base sm:text-lg text-white/90">Verifique os requisitos e impedimentos</p>
              </div>

              {/* Layout em 3 colunas a partir de telas médias */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Coluna: Requisitos básicos para doação */}
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-rose-300/40 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Ícone de check em SVG com fundo circular */}
                    <div className="w-8 h-8 bg-white/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">Requisitos Básicos</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {eligibility.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base lg:text-lg leading-tight">
                        <span className="text-white/90 flex-shrink-0">✓</span>
                        <span className="break-words">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coluna: Impedimentos temporários — limitados a 6 itens para evitar sobrecarga */}
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-rose-400/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">Temporários</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {eligibility.temporaryImpediments.slice(0, 6).map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base lg:text-lg leading-tight">
                        <span className="text-white/90 flex-shrink-0">⏱</span>
                        <span className="break-words">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coluna: Impedimentos permanentes */}
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-red-500/60 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">Permanentes</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {eligibility.permanentImpediments.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm sm:text-base lg:text-lg leading-tight">
                        <span className="text-white/90 flex-shrink-0">⚠</span>
                        <span className="break-words">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção com fatos importantes sobre doação de sangue */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-white via-rose-50/20 to-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 border border-rose-100/50">

            {/* Cabeçalho com ícone estilizado em SVG */}
            <div className="flex flex-col items-center mb-5 sm:mb-6">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3">
                <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-2xl animate-pulse" style={{ animationDuration: '2s' }}>
                  {/* Gradiente reutilizável para consistência visual */}
                  <defs>
                    <linearGradient id="mainDrop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#fb7185' }} />
                      <stop offset="50%" style={{ stopColor: '#f43f5e' }} />
                      <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                    </linearGradient>
                  </defs>
                  {/* Forma estilizada de gota de sangue */}
                  <path d="M40 12 C40 12, 20 30, 20 45 C20 57, 28 68, 40 68 C52 68, 60 57, 60 45 C60 30, 40 12, 40 12 Z" fill="url(#mainDrop)" />
                  {/* Destaque interno com opacidade para profundidade */}
                  <ellipse cx="32" cy="35" rx="8" ry="12" fill="white" opacity="0.35" />
                </svg>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Informações Importantes
              </h2>
              <p className="text-base sm:text-lg text-gray-600">Dados essenciais sobre a doação</p>
            </div>

            {/* Grid com fatos em cartões */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {donationFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-rose-100 hover:border-rose-300"
                >
                  <div className="flex items-center gap-3">
                    {/* Ícone de gota com gradiente único por item */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
                      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
                        <defs>
                          <linearGradient id={`drop-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#fb7185' }} />
                            <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                          </linearGradient>
                        </defs>
                        <path d="M20 6C20 6 10 15 10 22C10 27 14 32 20 32C26 32 30 27 30 22C30 15 20 6 20 6Z" fill={`url(#drop-${idx})`} />
                        <ellipse cx="16" cy="18" rx="3" ry="4" fill="white" opacity="0.4" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-snug flex-1 break-words">
                      {fact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action: direciona o usuário para encontrar hemocentros */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 rounded-2xl shadow-xl py-3 px-5 sm:py-4 sm:px-6 md:py-5 md:px-8 text-white text-center overflow-hidden group">
            {/* Efeito visual animado no fundo ao passar o mouse */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {/* Elementos decorativos com animação de pulso */}
            <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-5 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative z-10">
              {/* Ícone principal com múltiplas camadas de gradiente, sombra e animação */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-0 relative group-hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#fb7185", stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Círculo de fundo sutil para contraste */}
                  <circle cx="40" cy="40" r="36" fill="#fce7f3" opacity="0.3" />
                  {/* Forma de pin com gradiente */}
                  <path
                    d="M40 12 C28 12, 20 20, 20 32 C20 47, 40 64, 40 64 C40 64, 60 47, 60 32 C60 20, 52 12, 40 12 Z"
                    fill="url(#grad3)"
                  />
                  {/* Coração interno em branco */}
                  <path
                    d="M40 42 C33 38, 29 34, 29 29 C29 26, 31 24, 33 24 C35 24, 38 26, 40 29 C42 26, 45 24, 47 24 C49 24, 51 26, 51 29 C51 34, 47 38, 40 42 Z"
                    fill="#fff"
                    opacity="0.95"
                  />
                  {/* Anéis concêntricos com animação de pulso */}
                  <circle
                    cx="40"
                    cy="32"
                    r="20"
                    stroke="#fb7185"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.25"
                    className="animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                  <circle
                    cx="40"
                    cy="32"
                    r="24"
                    stroke="#fb7185"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.15"
                    className="animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                  />
                  {/* Partículas flutuantes adicionais */}
                  <circle cx="66" cy="18" r="1.5" fill="#fb7185" className="animate-ping" opacity="0.6" />
                  <circle
                    cx="16"
                    cy="36"
                    r="1.5"
                    fill="#f43f5e"
                    className="animate-ping"
                    style={{ animationDelay: "0.5s" }}
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Título sem margem inferior para evitar espaçamento desnecessário */}
              <h3 className="text-lg sm:text-xl lg:text-1xl font-bold mb-0">
                Pronto para Doar?
              </h3>

              {/* Subtítulo com espaçamento reduzido para manter coesão visual */}
              <p className="text-base sm:text-lg mb-2 opacity-95">
                Encontre o hemocentro mais próximo
              </p>

              {/* Botão de ação com navegação via window.location (revisar se roteamento via React Router for desejado) */}
              <button
                onClick={() => {
                  navigate('/hemocentros');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                }}
                className="bg-white text-rose-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-sm font-bold hover:bg-rose-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Encontrar Hemocentro
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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