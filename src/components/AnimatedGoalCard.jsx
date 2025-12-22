// src/components/AnimatedGoalCard.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import { useDonation } from '../contexts/DonationContext';
import { useCountAnimation } from '../hooks/useCountAnimation';

/**
 * Card animado de meta de doações para ser usado na Home
 * Mostra meta fixa de 500 e quantas faltam (animado)
 */
const AnimatedGoalCard = () => {
  const { donations, goal } = useDonation();

  // Calcula quantas doações faltam
  const remaining = Math.max(0, goal - donations);

  // Animação para o número de doações que faltam
  const animatedRemaining = useCountAnimation(remaining, 2000);

  return (
    <div className="md:col-span-2 bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 p-8 sm:p-8 flex flex-col items-center justify-center text-white relative overflow-hidden group min-h-[220px]">
      {/* Efeito de brilho ao passar mouse */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>

      {/* Partículas decorativas em posições diferentes */}
      <div
        className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-12 right-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-8 left-12 w-2.5 h-2.5 bg-white/25 rounded-full animate-ping"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-16 right-6 w-1 h-1 bg-white/35 rounded-full animate-ping"
        style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
      ></div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-center">
        {/* Ícone de coração com fundo */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
          <Heart
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white animate-pulse"
            style={{ animationDuration: "1.5s" }}
          />
        </div>

        <p className="text-lg sm:text-xl font-semibold mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
          Nossa meta é alcançar
        </p>

        {/* META FIXA - 500 doações */}
        <p className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-0.5 transform group-hover:scale-105 transition-transform duration-300">
          500
        </p>

        <p className="text-lg sm:text-xl font-bold mb-3"> {/* <-- REDUZIDO DE mb-2/4 PARA mb-3 */}
          doações este ano!
        </p>

        {/* Mensagem adicional com divisor - MOSTRA QUANTAS FALTAM */}
        <div className="mt-3 sm:mt-5 pt-4 sm:pt-5 border-t border-white/30">
          {remaining > 0 ? (
            <div>
              <p className="text-lg sm:text-xl font-medium opacity-90 mb-0.5"> {/* <-- REDUZIDO mb-1 → mb-0.5 */}
                Faltam
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold tabular-nums mb-0.5"> {/* <-- ADICIONADO mb-0.5 */}
                {animatedRemaining.toLocaleString('pt-BR')}
              </p>
              <p className="text-lg sm:text-xl font-medium opacity-90 mt-0.5"> {/* <-- REDUZIDO mt-1 → mt-0.5 */}
                doações
              </p>
            </div>
          ) : (
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold mb-1">
                🎉 Meta Alcançada! 🎉
              </p>
              <p className="text-sm sm:text-base font-medium opacity-90">
                Parabéns a todos!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedGoalCard;