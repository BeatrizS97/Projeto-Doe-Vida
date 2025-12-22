// src/contexts/DonationContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState(0);
  const [lastDonation, setLastDonation] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);
  
  const TEST_MODE = false;
  const goal = TEST_MODE ? 1 : 500;
  const livesSaved = donations * 4;
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear + 1;

  // Carregar dados do localStorage ao inicializar
  useEffect(() => {
    const savedDonations = localStorage.getItem('totalDonations');
    const savedLastDate = localStorage.getItem('lastDonationDate');
    const savedMonthly = localStorage.getItem('monthlyDonations');
    
    if (savedDonations) {
      setDonations(parseInt(savedDonations));
    }
    
    if (savedLastDate) {
      setLastDonation(new Date(savedLastDate));
    }

    if (savedMonthly) {
      const parsed = JSON.parse(savedMonthly);
      if (parsed.length === 12) {
        setMonthlyData(parsed);
      } else {
        initializeMonthlyData();
      }
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

  const value = {
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
  };

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