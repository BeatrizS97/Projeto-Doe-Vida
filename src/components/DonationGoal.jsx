// src/components/DonationGoal.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Heart, Users, TrendingUp, Sparkles, Clock, Calendar, Timer, Info, RotateCcw, BarChart3, CheckCircle, Droplet } from 'lucide-react';

// Componente de gráfico mensal
const MonthlyChart = React.memo(({ monthlyData, showChart, setShowChart, donations }) => {
  const { barHeights, barColors } = useMemo(() => {
    const heights = monthlyData.map(item => {
      const percentage = (item.donations / 5) * 100;
      return item.donations > 0 ? percentage : 5;
    });
    const colors = monthlyData.map(item => {
      if (item.donations === 0) return 'from-gray-200 to-gray-300';
      if (item.donations <= 2) return 'from-rose-400 to-red-500';
      if (item.donations <= 4) return 'from-red-500 to-red-600';
      return 'from-red-600 to-red-700';
    });
    return { barHeights: heights, barColors: colors };
  }, [JSON.stringify(monthlyData)]);

  return (
    <div className="mb-6 animate-slide-up">
      <button
        onClick={() => setShowChart(!showChart)}
        className="w-full flex items-center justify-between text-left hover:bg-white/50 transition-all rounded-xl p-4 group bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Evolução Mensal {new Date().getFullYear() + 1}</h3>
            <p className="text-xs text-gray-600 mt-0.5">
              {showChart ? 'Clique para ocultar' : 'Acompanhe seu progresso'}
            </p>
          </div>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showChart ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showChart && (
        <div className="mt-4 animate-fade-in">
          <div className="bg-white/40 backdrop-blur-md rounded-xl p-5 border border-white/50 shadow-lg">
            <div className="grid grid-cols-12 gap-1.5 items-end h-32 mb-4">
              {monthlyData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-end h-full group cursor-pointer">
                  <div className="h-5 flex items-end justify-center mb-1">
                    {item.donations > 0 && (
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 rounded-full px-1.5 py-0.5 shadow-md">
                        {item.donations}
                      </span>
                    )}
                  </div>

                  <div
                    className={`w-full bg-gradient-to-t ${barColors[idx]} rounded-t-md transition-all duration-500 hover:brightness-110 hover:shadow-md hover:scale-y-110 border-b-2 border-red-700 relative`}
                    style={{
                      height: `${barHeights[idx]}%`,
                      opacity: item.donations > 0 ? 1 : 0.3,
                      minHeight: '10px'
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                      <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded-md shadow-lg">
                        {item.donations} {item.donations === 1 ? 'doação' : 'doações'}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-gray-700 mt-2">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-rose-200/50 pt-3">
              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-50 to-red-50 rounded-lg py-2 px-3">
                <Droplet className="w-4 h-4 text-rose-600" />
                <p className="text-sm text-gray-700 font-bold">
                  Total em {new Date().getFullYear() + 1}:
                  <span className="text-rose-700 ml-1.5">{donations}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

// Componente principal - COMPLETO E FUNCIONAL
const DonationGoal = () => {
  const [donations, setDonations] = useState(0);
  const [lastDonation, setLastDonation] = useState(null);
  const [canDonate, setCanDonate] = useState(true);
  const [daysUntilNext, setDaysUntilNext] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [justDonated, setJustDonated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [monthlyData, setMonthlyData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const TEST_MODE = true;
  const goal = TEST_MODE ? 1 : 500;
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + 1;
  const livesSaved = donations * 4;
  const percentage = Math.min((donations / goal) * 100, 100);
  const COOLDOWN_DAYS = 60;

  useEffect(() => {
    const savedDonations = localStorage.getItem('totalDonations');
    const savedLastDate = localStorage.getItem('lastDonationDate');
    const savedMonthly = localStorage.getItem('monthlyDonations');

    if (savedDonations) setDonations(parseInt(savedDonations));
    if (savedLastDate) {
      const lastDate = new Date(savedLastDate);
      setLastDonation(lastDate);
      checkCanDonate(lastDate);
    }
    if (savedMonthly) {
      const parsed = JSON.parse(savedMonthly);
      parsed.length !== 12 ? initializeMonthlyData() : setMonthlyData(parsed);
    } else {
      initializeMonthlyData();
    }
  }, []);

  const initializeMonthlyData = () => {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const data = months.map((month, i) => ({
      month,
      donations: 0,
      fullDate: new Date(targetYear, i, 1).toISOString()
    }));
    setMonthlyData(data);
    localStorage.setItem('monthlyDonations', JSON.stringify(data));
  };

  const updateMonthlyData = () => {
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
    localStorage.setItem('monthlyDonations', JSON.stringify(updatedData));
  };

  const checkCanDonate = (lastDate) => {
    if (!lastDate) {
      setCanDonate(true);
      setDaysUntilNext(0);
      return;
    }

    const now = new Date();
    const diffTime = Math.abs(now - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= COOLDOWN_DAYS) {
      setCanDonate(true);
      setDaysUntilNext(0);
    } else {
      setCanDonate(false);
      setDaysUntilNext(COOLDOWN_DAYS - diffDays);
    }
  };

  const generateConfetti = () => {
    const colors = ['#dc2626', '#991b1b', '#fee2e2', '#fecaca', '#fca5a5'];
    const pieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.2,
      duration: 4 + Math.random() * 2,
      rotation: Math.random() * 720,
      size: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      swing: Math.random() * 40 - 20,
    }));
    setConfetti(pieces);
  };

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleDonate = () => {
    if (!canDonate || donations >= goal) return;

    const now = new Date();
    const newTotal = donations + 1;

    setDonations(newTotal);
    setLastDonation(now);
    setCanDonate(false);

    localStorage.setItem('totalDonations', newTotal.toString());
    localStorage.setItem('lastDonationDate', now.toISOString());

    updateMonthlyData();
    checkCanDonate(now);

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
      generateConfetti();
      showToastNotification(`META ALCANÇADA! ${livesSaved + 4} vidas salvas!`);
      setTimeout(() => {
        setShowCelebration(false);
        setConfetti([]);
      }, 10000);
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
      localStorage.setItem('totalDonations', '0');
      localStorage.removeItem('lastDonationDate');
      initializeMonthlyData();
      showToastNotification('Contador resetado com sucesso');
    }
  };

  const memoizedSetShowChart = useCallback((value) => setShowChart(value), []);

  return (
    <div className="relative">
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Toast Notification */}
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

        {/* Confetti */}
        {showCelebration && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {confetti.map((piece) => (
              <div
                key={piece.id}
                className="absolute rounded-sm"
                style={{
                  left: `${piece.left}%`,
                  top: '-5%',
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  backgroundColor: piece.color,
                  animation: `confetti ${piece.duration}s ease-out forwards`,
                  animationDelay: `${piece.delay}s`,
                  transform: `rotate(${piece.rotation}deg)`,
                  '--swing': `${piece.swing}px`
                }}
              />
            ))}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          {/* Ícone Personalizado: Gotas de Sangue Animadas */}
          <div className="relative w-14 h-14 flex-shrink-0 mx-auto mb-4">
            {/* Gota principal - formato de gota real */}
            <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '2s' }}>
              <svg viewBox="0 0 56 56" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
                {/* Formato de gota de sangue - mais larga e gordinha */}
                <path
                  d="M28 8 C28 8, 14 20, 14 32 C14 41, 20 49, 28 49 C36 49, 42 41, 42 32 C42 20, 28 8, 28 8 Z"
                  fill="url(#dropGradient)"
                />
                {/* Brilho interno */}
                <ellipse cx="24" cy="26" rx="6" ry="8" fill="white" opacity="0.3" />
                <ellipse cx="22" cy="24" rx="3" ry="4" fill="white" opacity="0.5" />
              </svg>
            </div>

            {/* Gota pequena superior direita */}
            <div className="absolute -top-1 -right-1 w-5 h-5 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>
              <svg viewBox="0 0 20 20" className="w-full h-full drop-shadow-md">
                <path
                  d="M10 2 C10 2, 5 7, 5 11 C5 14, 7 16, 10 16 C13 16, 15 14, 15 11 C15 7, 10 2, 10 2 Z"
                  fill="#dc2626"
                />
                <ellipse cx="8" cy="9" rx="2" ry="2.5" fill="white" opacity="0.4" />
              </svg>
            </div>

            {/* Gota pequena inferior esquerda */}
            <div className="absolute -bottom-1 -left-1 w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.6s' }}>
              <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-md">
                <path
                  d="M8 1 C8 1, 4 5, 4 8 C4 10.5, 5.5 12, 8 12 C10.5 12, 12 10.5, 12 8 C12 5, 8 1, 8 1 Z"
                  fill="#f43f5e"
                />
                <ellipse cx="6.5" cy="6.5" rx="1.5" ry="2" fill="white" opacity="0.4" />
              </svg>
            </div>
          </div>

          {TEST_MODE && (
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-blue-300 mb-3 shadow-sm">
              <Info className="w-3.5 h-3.5" />
              Modo Teste Ativado
            </div>
          )}

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Meta de Doações {targetYear}
          </h1>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa meta coletiva é alcançar <strong className="text-rose-700">{goal.toLocaleString()}</strong> doações e salvar <strong className="text-rose-700">{(goal * 4).toLocaleString()} vidas</strong> em {targetYear}
          </p>
        </div>

        {/* Card de informação pessoal */}
        <div className="max-w-4xl mx-auto mb-6 animate-slide-up">
          <div className="bg-gradient-to-r from-rose-100/80 to-red-100/80 backdrop-blur-sm rounded-xl p-4 border-l-4 border-rose-500 shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm mb-1">
                  Acompanhe seu impacto pessoal
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Este é o seu espaço pessoal para registrar e acompanhar suas próprias doações de sangue. Mantenha o controle dos intervalos recomendados e visualize o impacto positivo que você está fazendo!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador e Progress */}
        <div className="max-w-4xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Doações Realizadas</p>
              <p className="text-4xl font-bold text-rose-700">{donations}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm font-semibold mb-1">Objetivo</p>
              <p className="text-3xl font-bold text-gray-400">{goal}</p>
            </div>
          </div>

          <div className="relative h-8 bg-white/50 backdrop-blur-sm rounded-full overflow-hidden shadow-inner border-2 border-white/60">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 via-red-600 to-rose-600 rounded-full flex items-center justify-end pr-4 shadow-lg $(
                progressAnimation ? 'animate-progress-grow' : 'transition-all duration-1000 ease-out'
              )`}
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

        {/* Cards de Estatísticas */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-rose-100/80 to-red-100/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border-2 border-rose-200/50 group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{livesSaved}</p>
            <p className="text-xs text-gray-700 font-semibold mt-1">Vidas Salvas</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border-2 border-gray-300/50 group cursor-default">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{goal - donations}</p>
            <p className="text-xs text-gray-700 font-semibold mt-1">Restantes</p>
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
                    Última doação registrada
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
                    Próxima doação disponível em
                  </p>
                  <p className="text-rose-700 font-bold text-3xl">
                    {daysUntilNext}
                  </p>
                  <p className="text-gray-600 text-xs font-semibold mt-1">
                    {daysUntilNext === 1 ? 'dia' : 'dias'}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-gray-700 text-xs bg-blue-50/80 backdrop-blur-sm p-2.5 rounded-lg border border-blue-200/50">
                  <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Importante:</strong> Homens devem aguardar 60 dias e mulheres 90 dias entre doações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botão Principal e Celebração */}
        {!showCelebration ? (
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={handleDonate}
              disabled={!canDonate || donations >= goal}
              className={`w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg mb-4 $(
                !canDonate
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-2 border-gray-400'
                  : donations >= goal
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-2 border-gray-400'
                  : 'bg-gradient-to-r from-rose-600 to-red-600 text-white hover:shadow-xl transform hover:scale-105 active:scale-95 hover:from-rose-700 hover:to-red-700'
              ) ${justDonated ? 'animate-pulse' : ''}`}
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

            {lastDonation && canDonate && (
              <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2 font-semibold mb-4">
                <Calendar className="w-4 h-4" />
                Última doação: {lastDonation.toLocaleDateString('pt-BR')}
              </p>
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-8 bg-gradient-to-br from-amber-100/80 to-amber-200/80 backdrop-blur-sm rounded-xl shadow-lg border-2 border-amber-400 mb-6 animate-slide-up">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-rose-700 mb-2">
              🎉 Meta Alcançada! 🎉
            </h3>
            <p className="text-xl font-bold text-gray-900 mb-2">
              {livesSaved} vidas salvas
            </p>
            <p className="text-base text-gray-700 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-rose-700 fill-current" />
              Obrigado por salvar vidas!
            </p>
          </div>
        )}

        {/* Botão Reset */}
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

        {/* Cards Informativos */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>

          <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-5 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800">Benefícios de Doar</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Salva até 4 vidas por doação</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Renova o sangue naturalmente</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Check-up gratuito de saúde</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-5 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800">Dicas Importantes</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Homens: intervalo de 60 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Mulheres: intervalo de 90 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="relative w-4 h-4 flex-shrink-0 mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-500 rounded-full"></div>
                  <svg className="absolute inset-0 w-full h-full text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Esteja alimentado e hidratado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 rounded-xl shadow-lg p-5 text-white text-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="absolute top-3 left-5 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">
                Junte-se à Nossa Causa
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Compartilhe sua jornada e inspire outras pessoas a doar sangue. Juntos, podemos salvar milhares de vidas!
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold">
                <Heart className="w-4 h-4" />
                #DoeSangueDoVida
              </div>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-700 mt-5 flex items-center justify-center gap-2 bg-white/40 backdrop-blur-md rounded-lg p-3 border border-white/50 font-semibold shadow-md">
          <Info className="w-4 h-4 text-rose-600" />
          Cada doação salva até 4 vidas
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-5%) translateX(0) rotate(0deg);
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