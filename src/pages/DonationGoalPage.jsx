// src/pages/DonationGoalPage.jsx
import React from 'react';
import DonationGoal from '../components/DonationGoal';

const DonationGoalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-3 lg:px-5">
        <div className="mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Acompanhe a Jornada de Doações
          </h1>
          <p className="text-gray-600 mt-2">
            Cada doação é um passo importante para salvar vidas
          </p>
        </div>
        <DonationGoal />
      </div>
    </div>
  );
};

export default DonationGoalPage;