// src/components/DonationGoal.jsx
import React, { useState, useEffect } from 'react';
import { Heart, Users, TrendingUp, Sparkles } from 'lucide-react';

const DonationGoal = () => {
  const [donations, setDonations] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [justDonated, setJustDonated] = useState(false);
  
  const goal = 1000;
  const livesSaved = donations * 4; // 1 doação = 4 vidas
  const percentage = Math.min((donations / goal) * 100, 100);

  // Carregar doações do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('totalDonations');
    if (saved) {
      setDonations(parseInt(saved));
    }
  }, []);

  // Gerar confetes quando atingir a meta
  const generateConfetti = () => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      rotation: Math.random() * 360,
      color: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af'][Math.floor(Math.random() * 4)]
    }));
    setConfetti(pieces);
  };

  const handleDonate = () => {
    if (donations >= goal) return;
    
    const newTotal = donations + 1;
    setDonations(newTotal);
    localStorage.setItem('totalDonations', newTotal.toString());
    
    // Animação de clique
    setJustDonated(true);
    setTimeout(() => setJustDonated(false), 500);
    
    // Celebração ao atingir a meta
    if (newTotal === goal) {
      setShowCelebration(true);
      generateConfetti();
      setTimeout(() => {
        setShowCelebration(false);
        setConfetti([]);
      }, 5000);
    }
  };

  const resetGoal = () => {
    setDonations(0);
    localStorage.setItem('totalDonations', '0');
    setShowCelebration(false);
    setConfetti([]);
  };

  return (
    <div className="relative bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl shadow-xl p-6 lg:p-10 overflow-hidden">
      {/* Confetti Animation */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: `${piece.left}%`,
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                transform: `rotate(${piece.rotation}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-br from-rose-600 to-red-700 p-3 rounded-full">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          Meta de Doações 2025
        </h2>
        <p className="text-gray-600 text-base lg:text-lg">
          Ajude-nos a alcançar 1.000 doações este ano!
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-3xl lg:text-4xl font-bold text-rose-600">
            {donations}
          </span>
          <span className="text-xl lg:text-2xl font-semibold text-gray-600">
            / {goal} doações
          </span>
        </div>
        
        <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-600 to-red-700 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
            style={{ width: `${percentage}%` }}
          >
            {percentage > 10 && (
              <span className="text-white font-bold text-sm">
                {percentage.toFixed(0)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <Heart className="w-8 h-8 text-rose-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">{livesSaved}</p>
          <p className="text-sm text-gray-600">Vidas Salvas</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <Users className="w-8 h-8 text-rose-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">{goal - donations}</p>
          <p className="text-sm text-gray-600">Faltam</p>
        </div>
      </div>

      {/* Donation Button */}
      {!showCelebration ? (
        <button
          onClick={handleDonate}
          disabled={donations >= goal}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            donations >= goal
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-rose-600 to-red-700 text-white hover:shadow-lg transform hover:scale-105 active:scale-95'
          } ${justDonated ? 'animate-pulse-fast' : ''}`}
        >
          {donations >= goal ? '🎉 Meta Alcançada!' : '❤️ Eu Doei Sangue!'}
        </button>
      ) : (
        // Celebration Message
        <div className="text-center py-8 animate-bounce">
          <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-rose-600 mb-2">
            🎉 META ALCANÇADA! 🎉
          </h3>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Salvamos {livesSaved} vidas juntos!
          </p>
          <p className="text-lg text-gray-600">
            Obrigado por fazer parte dessa corrente de vida! ❤️
          </p>
        </div>
      )}

      {/* Reset Button (apenas para teste) */}
      {donations > 0 && (
        <button
          onClick={resetGoal}
          className="w-full mt-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Resetar contador (apenas teste)
        </button>
      )}

      {/* Info */}
      <p className="text-center text-sm text-gray-500 mt-4">
        💡 Clique no botão cada vez que você doar sangue!
      </p>
    </div>
  );
};

export default DonationGoal;