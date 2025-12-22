// src/components/DonationGoal.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Heart, Users, Clock, Calendar, Timer, Info, RotateCcw, BarChart3, CheckCircle, Droplet, Sparkles, TrendingUp, Award, X } from 'lucide-react';
import { useDonation } from '../contexts/DonationContext';
import { useCountAnimation } from '../hooks/useCountAnimation';

// Componente de gráfico mensal MELHORADO
const MonthlyChart = React.memo(({ monthlyData, showChart, setShowChart, donations }) => {
  const { barHeights, barColors, maxDonations } = useMemo(() => {
    const max = Math.max(...monthlyData.map(item => item.donations), 5);
    const heights = monthlyData.map(item => {
      const percentage = (item.donations / max) * 100;
      return item.donations > 0 ? Math.max(percentage, 15) : 10;
    });
    const colors = monthlyData.map(item => {
      if (item.donations === 0) return 'from-gray-200 to-gray-300';
      if (item.donations <= Math.ceil(max * 0.3)) return 'from-rose-300 to-rose-500';
      if (item.donations <= Math.ceil(max * 0.6)) return 'from-red-400 to-red-600';
      return 'from-red-600 to-red-700';
    });
    return { barHeights: heights, barColors: colors, maxDonations: max };
  }, [JSON.stringify(monthlyData)]);

  return (
    <div className="mb-6 animate-slide-up">
      <button
        onClick={() => setShowChart(!showChart)}
        className="w-full flex items-center justify-between text-left hover:bg-white/60 transition-all rounded-xl p-5 group bg-gradient-to-br from-white/40 to-white/30 backdrop-blur-md border-2 border-white/50 shadow-xl hover:shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-rose-500 via-red-600 to-rose-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700"></div>
            <BarChart3 className="w-7 h-7 text-white relative z-10" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-xl flex items-center gap-2">
              Evolução Mensal {new Date().getFullYear() + 1}
              <TrendingUp className="w-5 h-5 text-rose-600" />
            </h3>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              {showChart ? 'Clique para ocultar' : 'Visualize seu progresso mensal'}
            </p>
          </div>
        </div>
        <svg className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${showChart ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showChart && (
        <div className="mt-5 animate-fade-in">
          <div className="bg-gradient-to-br from-white/50 to-white/40 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/60 shadow-2xl">
            {/* Legenda */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-rose-200/50">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-rose-600" />
                <span className="text-sm font-bold text-gray-700">Máximo: {maxDonations} {maxDonations === 1 ? 'doação' : 'doações'}/mês</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-600 to-red-700"></div>
                <span className="text-xs text-gray-600 font-semibold">Alto</span>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 ml-2"></div>
                <span className="text-xs text-gray-600 font-semibold">Médio</span>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 ml-2"></div>
                <span className="text-xs text-gray-600 font-semibold">Baixo</span>
              </div>
            </div>

            {/* Gráfico */}
            <div className="grid grid-cols-12 gap-2 items-end h-48 mb-5 relative">
              {/* Linhas de grade horizontais */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-gray-300/30"></div>
                ))}
              </div>

              {monthlyData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-end h-full group/bar cursor-pointer relative z-10">
                  {/* Valor no topo */}
                  <div className="h-6 flex items-end justify-center mb-2 transition-all duration-300">
                    {item.donations > 0 && (
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 rounded-full px-2 py-1 shadow-lg group-hover/bar:scale-125 transition-transform">
                        {item.donations}
                      </span>
                    )}
                  </div>

                  {/* Barra */}
                  <div
                    className={`w-full bg-gradient-to-t ${barColors[idx]} rounded-t-xl transition-all duration-500 hover:brightness-110 hover:shadow-xl hover:scale-105 border-b-4 border-red-800 relative group-hover/bar:border-rose-500`}
                    style={{
                      height: `${barHeights[idx]}%`,
                      opacity: item.donations > 0 ? 1 : 0.2,
                      minHeight: '20px'
                    }}
                  >
                    {/* Brilho interno */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-t-xl opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                      <div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg shadow-2xl border-2 border-rose-500">
                        <div className="font-bold">{item.month}</div>
                        <div className="text-xs">{item.donations} {item.donations === 1 ? 'doação' : 'doações'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Mês */}
                  <span className="text-sm font-bold text-gray-700 mt-3 group-hover/bar:text-rose-600 transition-colors">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>

            {/* Rodapé com estatísticas */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t-2 border-rose-200/50">
              <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-50 to-red-50 rounded-xl py-3 px-4 shadow-md">
                <Droplet className="w-5 h-5 text-rose-600" />
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-semibold">Total em {new Date().getFullYear() + 1}</p>
                  <p className="text-2xl font-bold text-rose-700">{donations}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-50 to-red-50 rounded-xl py-3 px-4 shadow-md">
                <Heart className="w-5 h-5 text-red-600" />
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-semibold">Vidas Salvas</p>
                  <p className="text-2xl font-bold text-red-700">{donations * 4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

// Modal de seleção de gênero
const GenderModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[200] animate-fade-in p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in border-4 border-rose-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirmar Doação</h2>
          <p className="text-gray-600">Selecione seu gênero para calcularmos corretamente o intervalo entre doações</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onConfirm('male')}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <span>♂</span>
            Masculino
            <span className="text-sm font-normal">(60 dias)</span>
          </button>

          <button
            onClick={() => onConfirm('female')}
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <span>♀</span>
            Feminino
            <span className="text-sm font-normal">(90 dias)</span>
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          <Info className="w-3 h-3 inline mr-1" />
          Essa informação é usada apenas para calcular o período de intervalo recomendado entre doações
        </p>
      </div>
    </div>
  );
};

// Componente principal
const DonationGoal = () => {
  const {
    donations,
    setDonations,
    lastDonation,
    setLastDonation,
    monthlyData,
    setMonthlyData,
    goal,
    livesSaved,
    targetYear,
    TEST_MODE
  } = useDonation();

  const [canDonate, setCanDonate] = useState(true);
  const [daysUntilNext, setDaysUntilNext] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [fireworks, setFireworks] = useState([]);
  const [justDonated, setJustDonated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [userGender, setUserGender] = useState(null);

  // Percentual e doações restantes COM ANIMAÇÃO CONTROLADA
  const percentage = Math.min((donations / goal) * 100, 100);
  const remaining = Math.max(0, goal - donations);
  const COOLDOWN_DAYS_MALE = 60;
  const COOLDOWN_DAYS_FEMALE = 90;

  // Animações de contagem - NÃO anima no mount inicial
  const animatedDonations = useCountAnimation(donations, 1500, false);
  const animatedGoal = useCountAnimation(goal, 2000, false);
  const animatedLives = useCountAnimation(livesSaved, 1800, false);
  const animatedRemaining = useCountAnimation(remaining, 1600, false);

  useEffect(() => {
    const savedGender = localStorage.getItem('userGender');
    if (savedGender) {
      setUserGender(savedGender);
    }

    if (lastDonation) {
      checkCanDonate(lastDonation, savedGender);
    }
  }, [lastDonation]);

  const checkCanDonate = (lastDate, gender = userGender) => {
    if (!lastDate) {
      setCanDonate(true);
      setDaysUntilNext(0);
      return;
    }

    const cooldownDays = gender === 'female' ? COOLDOWN_DAYS_FEMALE : COOLDOWN_DAYS_MALE;
    const now = new Date();
    const diffTime = Math.abs(now - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= cooldownDays) {
      setCanDonate(true);
      setDaysUntilNext(0);
    } else {
      setCanDonate(false);
      setDaysUntilNext(cooldownDays - diffDays);
    }
  };

  const generateCelebration = () => {
    // Confetti
    const colors = ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#fee2e2', '#fbbf24', '#fcd34d'];
    const shapes = ['circle', 'square', 'triangle'];

    const confettiPieces = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 720,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      swing: Math.random() * 60 - 30,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }));
    setConfetti(confettiPieces);

    // Fogos de artifício (explosões)
    const fireworksArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      bottom: 20 + Math.random() * 40,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      particles: Array.from({ length: 30 }, (_, j) => ({
        id: j,
        angle: (j * 360) / 30,
        distance: 40 + Math.random() * 40,
        size: 3 + Math.random() * 4
      }))
    }));
    setFireworks(fireworksArray);
  };

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const updateMonthlyDataForDonation = () => {
    const now = new Date();
    const currentMonth = now.toLocaleString('pt-BR', { month: 'short' });
    const monthKey = currentMonth.replace('.', '').charAt(0).toUpperCase() + currentMonth.replace('.', '').slice(1);

    const updatedData = monthlyData.map(item => {
      if (item.month === monthKey) {
        return { ...item, donations: item.donations + 1 };
      }
      return item;
    });

    setMonthlyData(updatedData);
  };

  const handleDonateClick = () => {
    if (!canDonate || donations >= goal) return;
    setShowGenderModal(true);
  };

  const handleGenderConfirm = (gender) => {
    setShowGenderModal(false);
    setUserGender(gender);
    localStorage.setItem('userGender', gender);

    const now = new Date();
    const newTotal = donations + 1;

    setDonations(newTotal);
    setLastDonation(now);
    setCanDonate(false);

    updateMonthlyDataForDonation();
    checkCanDonate(now, gender);

    setJustDonated(true);
    setTimeout(() => setJustDonated(false), 500);

    setProgressAnimation(true);
    setTimeout(() => setProgressAnimation(false), 1000);

    showToastNotification('Doação registrada! Você salvou até 4 vidas!');

    if (newTotal === 1) {
      setShowChart(true);
      setTimeout(() => {
        const chartEl = document.querySelector('[data-chart-container]');
        if (chartEl) chartEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }

    if (newTotal === goal) {
      setShowCelebration(true);
      generateCelebration();
      showToastNotification(`🎉 META ALCANÇADA! Você completou ${goal} ${goal === 1 ? 'doação' : 'doações'}! 🎉`);
      setTimeout(() => {
        setShowCelebration(false);
        setConfetti([]);
        setFireworks([]);
      }, 12000);
    }
  };

  const resetGoal = () => {
    if (window.confirm('Resetar todas as doações? Esta ação não pode ser desfeita.')) {
      setDonations(0);
      setLastDonation(null);
      setCanDonate(true);
      setDaysUntilNext(0);
      setShowCelebration(false);
      setConfetti([]);
      setFireworks([]);
      setUserGender(null);

      localStorage.setItem('totalDonations', '0');
      localStorage.removeItem('lastDonationDate');
      localStorage.removeItem('userGender');

      const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const data = months.map((month, i) => ({
        month,
        donations: 0,
        fullDate: new Date(targetYear, i, 1).toISOString()
      }));
      setMonthlyData(data);
      localStorage.setItem('monthlyDonations', JSON.stringify(data));

      showToastNotification('Contador resetado com sucesso! ✅');
    }
  };

  const memoizedSetShowChart = useCallback((value) => setShowChart(value), []);

  return (
    <div className="relative">
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        <GenderModal
          isOpen={showGenderModal}
          onClose={() => setShowGenderModal(false)}
          onConfirm={handleGenderConfirm}
        />

        {showToast && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] animate-fade-in">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 min-w-[280px] border-2 border-green-400">
              <div className="bg-white/20 rounded-lg p-1.5 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">{toastMessage}</p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-white/80 hover:text-white transition-colors font-bold text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Confetti e Fogos de Artifício */}
        {showCelebration && (
          <>
            {/* Confetti caindo */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
              {confetti.map((piece) => (
                <div
                  key={`confetti-${piece.id}`}
                  className="absolute"
                  style={{
                    left: `${piece.left}%`,
                    top: '-10%',
                    width: `${piece.size}px`,
                    height: `${piece.size}px`,
                    backgroundColor: piece.shape === 'circle' ? piece.color : 'transparent',
                    borderRadius: piece.shape === 'circle' ? '50%' : '0',
                    animation: `confetti ${piece.duration}s ease-out forwards`,
                    animationDelay: `${piece.delay}s`,
                    transform: `rotate(${piece.rotation}deg)`,
                    '--swing': `${piece.swing}px`,
                    ...(piece.shape === 'square' && {
                      background: `linear-gradient(135deg, ${piece.color} 0%, ${piece.color}dd 100%)`,
                    }),
                    ...(piece.shape === 'triangle' && {
                      width: 0,
                      height: 0,
                      borderLeft: `${piece.size / 2}px solid transparent`,
                      borderRight: `${piece.size / 2}px solid transparent`,
                      borderBottom: `${piece.size}px solid ${piece.color}`,
                    })
                  }}
                />
              ))}
            </div>

            {/* Fogos de artifício */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
              {fireworks.map((firework) => (
                <div
                  key={`firework-${firework.id}`}
                  className="absolute"
                  style={{
                    left: `${firework.left}%`,
                    bottom: `${firework.bottom}%`,
                    animationDelay: `${firework.delay}s`,
                  }}
                >
                  {firework.particles.map((particle) => (
                    <div
                      key={`particle-${firework.id}-${particle.id}`}
                      className="absolute rounded-full"
                      style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: firework.color,
                        boxShadow: `0 0 ${particle.size * 2}px ${firework.color}`,
                        animation: `firework-particle 1.5s ease-out forwards`,
                        animationDelay: `${firework.delay}s`,
                        '--angle': `${particle.angle}deg`,
                        '--distance': `${particle.distance}px`,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative w-14 h-14 flex-shrink-0 mx-auto mb-4">
            <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '2s' }}>
              <svg viewBox="0 0 56 56" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
                <path
                  d="M28 8 C28 8, 14 20, 14 32 C14 41, 20 49, 28 49 C36 49, 42 41, 42 32 C42 20, 28 8, 28 8 Z"
                  fill="url(#dropGradient)"
                />
                <ellipse cx="24" cy="26" rx="6" ry="8" fill="white" opacity="0.3" />
                <ellipse cx="22" cy="24" rx="3" ry="4" fill="white" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/*}
          {TEST_MODE && (
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-blue-300 mb-3 shadow-sm">
              <Info className="w-3.5 h-3.5" />
              Modo Teste Ativado
            </div>
          )}
          */}

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Minha Meta de Doações {targetYear}
          </h1>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Sua meta pessoal é realizar <strong className="text-rose-700 tabular-nums">{animatedGoal}</strong> {animatedGoal === 1 ? 'doação' : 'doações'} e salvar até <strong className="text-rose-700 tabular-nums">{animatedGoal * 4}</strong> vidas em {targetYear}
          </p>
        </div>

        {/* Card de informação INDIVIDUAL */}
        <div className="max-w-4xl mx-auto mb-6 animate-slide-up">
          <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/80 backdrop-blur-sm rounded-xl p-4 border-l-4 border-rose-500 shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm mb-1">
                  Seu Acompanhamento Pessoal
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Este é o seu contador individual! Registre suas doações e acompanhe sua jornada pessoal de salvar vidas através da doação de sangue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador e Progress COM ANIMAÇÃO CONTROLADA */}
        <div className="max-w-4xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Suas Doações</p>
              <p className="text-4xl font-bold text-rose-700 tabular-nums">{animatedDonations}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm font-semibold mb-1">Sua Meta</p>
              <p className="text-3xl font-bold text-gray-400 tabular-nums">{animatedGoal}</p>
            </div>
          </div>

          <div className="relative h-8 bg-white/50 backdrop-blur-sm rounded-full overflow-hidden shadow-inner border-2 border-white/60">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 via-red-600 to-rose-600 rounded-full flex items-center justify-end pr-4 shadow-lg ${progressAnimation ? 'animate-progress-grow' : 'transition-all duration-1000 ease-out'
                }`}
              style={{ width: `${percentage}%` }}
            >
              {percentage > 15 && (
                <span className="text-white font-bold text-sm drop-shadow-md">
                  {percentage.toFixed(0)}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Cards de Estatísticas COM ANIMAÇÃO CONTROLADA */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-rose-100/80 to-red-100/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border-2 border-rose-200/50 group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900 tabular-nums">{animatedLives}</p>
            <p className="text-xs text-gray-700 font-semibold mt-1">Vidas Salvas por Você</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border-2 border-gray-300/50 group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900 tabular-nums">{animatedRemaining}</p>
            <p className="text-xs text-gray-700 font-semibold mt-1">{animatedRemaining === 1 ? 'Falta' : 'Faltam'}</p>
          </div>
        </div>

        {/* Gráfico Mensal */}
        {donations > 0 && (
          <div data-chart-container className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <MonthlyChart
              monthlyData={monthlyData}
              showChart={showChart}
              setShowChart={memoizedSetShowChart}
              donations={donations}
            />
          </div>
        )}

        {/* Aviso de Cooldown */}
        {!canDonate && !showCelebration && (
          <div className="max-w-4xl mx-auto mb-6 bg-gradient-to-br from-rose-50/80 to-red-50/80 backdrop-blur-sm border-l-4 border-rose-600 rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Timer className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-base mb-3">
                  Período de Recuperação
                </h4>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 mb-3 shadow-sm border border-rose-200/50">
                  <p className="text-gray-600 text-xs mb-1.5 font-semibold">
                    Sua última doação registrada
                  </p>
                  <p className="text-rose-700 font-bold text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {lastDonation?.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 mb-3 shadow-sm border border-rose-200/50 text-center">
                  <p className="text-gray-700 text-sm mb-2 font-semibold">
                    Sua próxima doação disponível em
                  </p>
                  <p className="text-rose-700 font-bold text-3xl tabular-nums">
                    {daysUntilNext}
                  </p>
                  <p className="text-gray-600 text-xs font-semibold mt-1">
                    {daysUntilNext === 1 ? 'dia' : 'dias'}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-gray-700 text-xs bg-blue-50/80 backdrop-blur-sm p-2.5 rounded-lg border border-blue-200/50">
                  <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Importante:</strong> O intervalo foi calculado com base no seu gênero ({userGender === 'female' ? 'feminino - 90 dias' : 'masculino - 60 dias'}).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!showCelebration ? (
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex justify-center mb-6">
              <button
                onClick={handleDonateClick}
                disabled={!canDonate || donations >= goal}
                className={`py-4 px-8 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg ${!canDonate
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-2 border-gray-400'
                    : donations >= goal
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-2 border-gray-400'
                      : 'bg-gradient-to-r from-rose-600 to-red-600 text-white hover:shadow-xl transform hover:scale-105 active:scale-95 hover:from-rose-700 hover:to-red-700'
                  } ${justDonated ? 'animate-pulse' : ''}`}
              >
                {!canDonate ? (
                  <>
                    <Clock className="w-5 h-5" />
                    Aguarde {daysUntilNext} {daysUntilNext === 1 ? 'dia' : 'dias'}
                  </>
                ) : donations >= goal ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Meta Alcançada!
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-current" />
                    Registrar Doação
                  </>
                )}
              </button>
            </div>
            {lastDonation && canDonate && (
              <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2 font-semibold mb-4">
                <Calendar className="w-4 h-4" />
                Última doação: {lastDonation.toLocaleDateString('pt-BR')}
              </p>
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-12 bg-gradient-to-br from-amber-100/90 to-yellow-200/90 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-amber-400 mb-6 animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>

            <div className="relative z-10">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl border-4 border-white">
                <Sparkles className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 mb-3 animate-pulse">
                🎉 PARABÉNS! 🎉
              </h3>

              <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 mb-4 border-2 border-amber-400 shadow-xl">
                <p className="text-lg font-bold text-gray-800 mb-1">
                  Você alcançou sua meta de {goal} {goal === 1 ? 'doação' : 'doações'}!
                </p>
                <p className="text-3xl font-extrabold text-rose-700 mb-1 tabular-nums">
                  {livesSaved} VIDAS
                </p>
                <p className="text-lg font-bold text-gray-800">
                  podem ser salvas graças a você!
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 text-amber-800 text-lg font-bold">
                <Heart className="w-6 h-6 text-rose-600 fill-current animate-pulse" />
                <span>Você é um herói!</span>
                <Heart className="w-6 h-6 text-rose-600 fill-current animate-pulse" />
              </div>

              <p className="mt-6 text-sm text-gray-700 font-medium">
                Sua dedicação à doação de sangue faz toda a diferença! ✨
              </p>
            </div>
          </div>
        )}

        {/* Botão Reset - ATIVO PARA TESTES 
        {(donations > 0 || TEST_MODE) && (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={resetGoal}
              className="w-full py-3 text-sm text-gray-700 hover:text-gray-900 transition-all hover:bg-white/50 rounded-lg flex items-center justify-center gap-2 border-2 border-gray-300/50 font-semibold hover:border-gray-400 hover:shadow-md bg-white/30 backdrop-blur-sm mb-6"
            >
              <RotateCcw className="w-4 h-4" />
              {TEST_MODE ? 'Resetar Contador (Teste)' : 'Resetar Contador'}
            </button>
          </div>
        )}
        */}

        {/* Cards Informativos */}
        <div className="max-w-5xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Card 1: Benefícios */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-rose-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-100 to-transparent rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-18 h-18 bg-gradient-to-tr from-red-100 to-transparent rounded-full blur-xl opacity-40"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Benefícios de Doar</h3>
                      <p className="text-sm text-rose-600 font-semibold">Transforme vidas através da doação</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Heart className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: 'Salva até 4 vidas por doação', iconType: 'heart', color: 'rose' },
                      { text: 'Renova o sangue naturalmente', iconType: 'refresh', color: 'red' },
                      { text: 'Check-up gratuito de saúde', iconType: 'health', color: 'rose' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group/item">
                        <div className="relative flex-shrink-0">
                          <div className={`w-10 h-10 bg-gradient-to-br ${item.color === 'rose' ? 'from-rose-50 to-red-50' : 'from-red-50 to-rose-50'} rounded-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 border border-${item.color}-100`}>
                            <div className="w-5 h-5">
                              {item.iconType === 'heart' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="heartGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#fb7185" />
                                      <stop offset="100%" stopColor="#f43f5e" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGrad2)" />
                                </svg>
                              )}
                              {item.iconType === 'refresh' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="refreshGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#f43f5e" />
                                      <stop offset="100%" stopColor="#dc2626" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="url(#refreshGrad2)" />
                                </svg>
                              )}
                              {item.iconType === 'health' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="healthGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#ef4444" />
                                      <stop offset="100%" stopColor="#dc2626" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" fill="url(#healthGrad2)" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-sm text-gray-700 font-medium flex-1 group-hover/item:text-gray-900 transition-colors">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Dicas */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-18 h-18 bg-gradient-to-tr from-rose-100 to-transparent rounded-full blur-xl opacity-40"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Dicas Importantes</h3>
                      <p className="text-sm text-red-600 font-semibold">Cuide-se antes e depois</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: 'Homens: intervalo de 60 dias', iconType: 'clock', color: 'red' },
                      { text: 'Mulheres: intervalo de 90 dias', iconType: 'calendar', color: 'rose' },
                      { text: 'Esteja alimentado e hidratado', iconType: 'water', color: 'blue' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 group/item">
                        <div className="relative flex-shrink-0">
                          <div className={`w-10 h-10 bg-gradient-to-br ${item.color === 'blue' ? 'from-blue-50 to-cyan-50' : item.color === 'rose' ? 'from-rose-50 to-red-50' : 'from-red-50 to-rose-50'} rounded-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 border border-${item.color}-100`}>
                            <div className="w-5 h-5">
                              {item.iconType === 'clock' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="clockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#dc2626" />
                                      <stop offset="100%" stopColor="#991b1b" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#clockGrad2)" />
                                  <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                                </svg>
                              )}
                              {item.iconType === 'calendar' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="calendarGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#ef4444" />
                                      <stop offset="100%" stopColor="#dc2626" />
                                    </linearGradient>
                                  </defs>
                                  <rect x="3" y="4" width="18" height="18" rx="2" fill="url(#calendarGrad2)" />
                                  <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                  <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                  <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
                                  <rect x="7" y="14" width="2" height="2" fill="white" rx="0.5" />
                                  <rect x="11" y="14" width="2" height="2" fill="white" rx="0.5" />
                                  <rect x="15" y="14" width="2" height="2" fill="white" rx="0.5" />
                                </svg>
                              )}
                              {item.iconType === 'water' && (
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="waterGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#3b82f6" />
                                      <stop offset="100%" stopColor="#1d4ed8" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#waterGrad2)" />
                                  <ellipse cx="9" cy="12" rx="2" ry="3" fill="white" opacity="0.3" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 ${item.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'} rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity`}></div>
                        </div>
                        <p className="text-sm text-gray-700 font-medium flex-1 group-hover/item:text-gray-900 transition-colors">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Seção Junte-se à Nossa Causa */}
        <div className="max-w-4xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="relative group">
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-rose-200 shadow-sm">
                  <div className="w-5 h-5 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-bold text-rose-700">Inspire Outras Pessoas</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-1">
                    Compartilhe Sua Jornada
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                    Conte sua história de doação e motive outras pessoas a salvarem vidas! Juntos, fazemos a diferença.
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-pink-600" />
                  <span className="text-sm font-semibold text-gray-700">#DoeSangueDoeVida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos das Animações */}
      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-10%) translateX(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(var(--swing)) rotate(360deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(calc(var(--swing) * 1.5)) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes firework-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(cos(var(--angle)) * var(--distance)),
              calc(sin(var(--angle)) * var(--distance) * -1)
            ) scale(0);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }

        @keyframes progress-grow {
          0% {
            transform: scaleX(0.95);
            filter: brightness(1);
          }
          50% {
            transform: scaleX(1.05);
            filter: brightness(1.15);
          }
          100% {
            transform: scaleX(1);
            filter: brightness(1);
          }
        }

        .animate-progress-grow {
          animation: progress-grow 0.6s ease-out;
          transform-origin: left center;
          transition: width 1s ease-out;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DonationGoal;