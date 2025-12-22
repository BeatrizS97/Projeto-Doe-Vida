// src/contexts/DonationContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState(0);
  const [lastDonation, setLastDonation] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);
  
  // CONSTANTES FIXAS - não recalcula em cada render
  const TEST_MODE = false; // Alterar para true para ativar modo de teste
  const goal = TEST_MODE ? 1 : 2;
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + 1;

  // Calcula vidas salvas com useMemo para evitar recálculo desnecessário
  const livesSaved = useMemo(() => donations * 4, [donations]);

  // Carregar dados do localStorage ao inicializar - APENAS UMA VEZ
  useEffect(() => {
    const savedDonations = localStorage.getItem('totalDonations');
    const savedLastDate = localStorage.getItem('lastDonationDate');
    const savedMonthly = localStorage.getItem('monthlyDonations');
    
    if (savedDonations) {
      const parsedDonations = parseInt(savedDonations, 10);
      setDonations(parsedDonations);
    }
    
    if (savedLastDate) {
      setLastDonation(new Date(savedLastDate));
    }

    if (savedMonthly) {
      try {
        const parsed = JSON.parse(savedMonthly);
        if (parsed.length === 12) {
          setMonthlyData(parsed);
        } else {
          initializeMonthlyData();
        }
      } catch (e) {
        console.error('Erro ao carregar dados mensais:', e);
        initializeMonthlyData();
      }
    } else {
      initializeMonthlyData();
    }
  }, []); // Array vazio = executa APENAS no mount

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

  const updateDonations = (newTotal) => {
    setDonations(newTotal);
    localStorage.setItem('totalDonations', newTotal.toString());
  };

  const updateLastDonation = (date) => {
    setLastDonation(date);
    if (date) {
      localStorage.setItem('lastDonationDate', date.toISOString());
    } else {
      localStorage.removeItem('lastDonationDate');
    }
  };

  const updateMonthlyData = (newData) => {
    setMonthlyData(newData);
    localStorage.setItem('monthlyDonations', JSON.stringify(newData));
  };

  const resetAllData = () => {
    setDonations(0);
    setLastDonation(null);
    localStorage.setItem('totalDonations', '0');
    localStorage.removeItem('lastDonationDate');
    localStorage.removeItem('userGender');
    initializeMonthlyData();
  };

  // Usa useMemo para criar o objeto value APENAS quando as dependências mudarem
  const value = useMemo(() => ({
    donations,
    setDonations: updateDonations,
    lastDonation,
    setLastDonation: updateLastDonation,
    monthlyData,
    setMonthlyData: updateMonthlyData,
    resetAllData,
    goal,
    livesSaved,
    targetYear,
    TEST_MODE
  }), [donations, lastDonation, monthlyData, livesSaved]); // Dependências específicas

  return (
    <DonationContext.Provider value={value}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation deve ser usado dentro de DonationProvider');
  }
  return context;
};