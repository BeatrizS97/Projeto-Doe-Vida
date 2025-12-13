// src/components/BloodTypesChart.jsx
import React, { useState } from 'react';
import { Droplet, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const BloodTypesChart = ({ compact = false }) => {
  const [activeType, setActiveType] = useState(null);

  const bloodTypes = [
    { type: 'O+', donated: 38, needed: 35, demand: 'alta', color: 'from-rose-500 to-red-600', icon: '🩸' },
    { type: 'A+', donated: 28, needed: 30, demand: 'média', color: 'from-red-500 to-rose-600', icon: '💧' },
    { type: 'B+', donated: 18, needed: 20, demand: 'média', color: 'from-rose-600 to-red-700', icon: '❤️' },
    { type: 'AB+', donated: 5, needed: 8, demand: 'crítica', color: 'from-red-600 to-rose-700', icon: '🫀' },
    { type: 'O-', donated: 4, needed: 15, demand: 'crítica', color: 'from-rose-700 to-red-800', icon: '⚠️' },
    { type: 'A-', donated: 4, needed: 10, demand: 'alta', color: 'from-red-700 to-rose-800', icon: '💉' },
    { type: 'B-', donated: 2, needed: 5, demand: 'crítica', color: 'from-rose-800 to-red-900', icon: '🚨' },
    { type: 'AB-', donated: 1, needed: 2, demand: 'crítica', color: 'from-red-800 to-rose-900', icon: '⛔' }
  ];

  const getDemandIcon = (demand) => {
    switch(demand) {
      case 'crítica': return <AlertTriangle className="w-5 h-5 text-red-600 animate-bounce-subtle" />;
      case 'alta': return <AlertTriangle className="w-5 h-5 text-orange-500 animate-pulse" />;
      case 'média': return <CheckCircle className="w-5 h-5 text-yellow-500" />;
      default: return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-5 animate-slide-up">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-br from-rose-600 to-red-700 p-2.5 rounded-full animate-pulse-slow shadow-md">
          <Droplet className="w-7 h-7 text-white animate-float" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 ml-3">
          Tipos Sanguíneos no Brasil
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6 pb-4 border-b border-gray-200 animate-fade-in-delay">
        <div className="flex items-center transform hover:scale-110 transition-all">
          <div className="w-4 h-4 bg-red-900 rounded mr-2 animate-pulse-slow shadow-md"></div>
          <span className="text-xs lg:text-sm text-gray-600 font-semibold">% Doado (Escuro)</span>
        </div>
        <div className="flex items-center transform hover:scale-110 transition-all">
          <div className="w-4 h-4 bg-rose-200 rounded mr-2 shadow-md"></div>
          <span className="text-xs lg:text-sm text-gray-600 font-semibold">% Necessário (Claro)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {bloodTypes.map((blood, idx) => (
          <div
            key={blood.type}
            onMouseEnter={() => setActiveType(blood.type)}
            onMouseLeave={() => setActiveType(null)}
            className={`relative bg-gradient-to-br ${blood.color} rounded-xl p-3 lg:p-4 text-white cursor-pointer transform transition-all duration-300 animate-slide-up ${
              activeType === blood.type ? 'scale-110 shadow-2xl z-10 rotate-1' : 'hover:scale-105 shadow-md'
            }`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity"></div>

            <div className="text-center mb-3 relative z-10">
              <div className="text-2xl lg:text-3xl mb-2 animate-pulse-slow">{blood.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold">{blood.type}</h3>
            </div>

            <div className="space-y-2 relative z-10">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold">Doado</span>
                  <span className="font-bold">{blood.donated}%</span>
                </div>
                <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-900 transition-all duration-1000 animate-slide-right shadow-inner"
                    style={{ 
                      width: `${blood.donated}%`,
                      animationDelay: `${idx * 0.1 + 0.3}s`
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold">Precisa</span>
                  <span className="font-bold">{blood.needed}%</span>
                </div>
                <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rose-200 transition-all duration-1000 animate-slide-right shadow-inner"
                    style={{ 
                      width: `${blood.needed}%`,
                      animationDelay: `${idx * 0.1 + 0.4}s`
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/30 flex items-center justify-center relative z-10">
              {getDemandIcon(blood.demand)}
              <span className="ml-2 text-xs font-semibold uppercase">{blood.demand}</span>
            </div>

            {activeType === blood.type && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-20 shadow-xl animate-bounce-subtle">
                {blood.donated < blood.needed ? (
                  <>⚠️ Faltam {blood.needed - blood.donated}% para a meta!</>
                ) : (
                  <>✅ Estoque OK</>
                )}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-3.5 text-center transform hover:scale-105 transition-all shadow-sm animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex justify-center mb-1.5">
            <AlertTriangle className="w-7 h-7 text-red-600 animate-bounce-subtle" />
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mb-1 font-semibold">Demanda Crítica</p>
          <p className="text-lg font-bold text-red-600">O-, AB-, B-, AB+</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-xl p-3.5 text-center transform hover:scale-105 transition-all shadow-sm animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <div className="flex justify-center mb-1.5">
            <TrendingUp className="w-7 h-7 text-orange-500 animate-pulse" />
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mb-1 font-semibold">Mais Doado</p>
          <p className="text-lg font-bold text-orange-600">O+ (38%)</p>
        </div>
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-3.5 text-center transform hover:scale-105 transition-all shadow-sm animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="flex justify-center mb-1.5">
            <Droplet className="w-7 h-7 text-rose-600 animate-pulse-slow" />
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mb-1 font-semibold">Doador Universal</p>
          <p className="text-lg font-bold text-rose-600">O- (4%)</p>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-rose-50 to-red-50 rounded-lg p-3 transform hover:scale-101 transition-all animate-fade-in-delay-2">
        <p className="text-xs lg:text-sm text-gray-700 text-center">
          💡 <span className="font-semibold">Você sabia?</span> O tipo O- pode doar para todos, mas só pode receber de O-. 
          Já o AB+ pode receber de todos os tipos!
        </p>
      </div>
    </div>
  );
};

export default BloodTypesChart;