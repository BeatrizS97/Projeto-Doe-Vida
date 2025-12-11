// src/components/HeaderSection.jsx

import React from 'react';
import { Heart, Users, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeartBeat from './HeartBeat';
import Button from './Button';
import BloodDonationAnimation from './BloodDonationAnimation';

const HeaderSection = () => {
  const navigate = useNavigate();

  // Função para mapear cores de forma estática (compatível com Tailwind)
  const getBgClass = (color) => {
    switch (color) {
      case 'rose-600': return 'bg-rose-600';
      case 'red-600': return 'bg-red-600';
      case 'rose-600': return 'bg-rose-600';
      default: return 'bg-gray-500';
    }
  };

  const stats = [
    { 
      icon: Heart, 
      title: 'Uma doação salva', 
      subtitle: 'até 4 vidas', 
      color: 'rose-600'
    },
    { 
      icon: Users, 
      title: 'Apenas 1.6%', 
      subtitle: 'da população doa', 
      color: 'red-600'
    },
    { 
      icon: Droplet,
      title: 'A cada 2 segundos', 
      subtitle: 'alguém precisa de sangue', 
      color: 'rose-600'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-red-600 to-rose-800 text-white py-0 lg:py-0">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Coração posicionado ABSOLUTAMENTE no canto superior esquerdo */}
      <div className="absolute top-4 left-4 z-20">
        <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
          <HeartBeat size="large" filled={true} className="text-white" />
          <div className="absolute top-1 right-1 text-xs font-bold bg-white text-rose-600 rounded-full w-8 h-8 flex items-center justify-center">
            47%
          </div>
        </div>
      </div>

      {/* Conteúdo principal - Posicionado manualmente abaixo do coração */}
      <div 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10"
        style={{
          marginTop: '120px',
          marginLeft: '120px'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LADO ESQUERDO: Conteúdo */}
          <div className="text-center lg:text-left animate-fade-in px-4 sm:px-6 md:px-8 lg:pl-24">
            
            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Doe Vida, Salve Vidas
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl font-light mb-4 animate-fade-in-delay">
              Em memória de Rodrigo e Natalha <span className="inline-block ml-1">❤️</span>
            </p>
            
            {/* Descrição */}
            <p className="text-base sm:text-lg leading-relaxed mb-6 opacity-90 max-w-md mx-auto lg:mx-0">
              Transformando saudade em esperança através da doação de sangue. Cada gesto salva vidas e mantém viva a memória de quem amamos.
            </p>
            
            {/* Botão */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="secondary"
                size="large"
                onClick={() => navigate('/hemocentros')}
              >
                Encontre um Hemocentro
              </Button>
            </div>
          </div>

          {/* LADO DIREITO: Animação da Bolsa */}
          <div className="flex justify-center items-center animate-fade-in-delay-2 px-4 sm:px-6 md:px-8 lg:pr-16">
            <div className="w-full max-w-xl h-[400px] sm:h-[350px] md:h-[400px]">
              <BloodDonationAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all hover:shadow-xl animate-slide-up max-w-[320px] w-full mx-auto"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`${getBgClass(stat.color)} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.title}</h3>
              <p className="text-gray-600 text-lg">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;