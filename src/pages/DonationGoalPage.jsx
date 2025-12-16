// src/pages/DonationGoalPage.jsx
import React from 'react';
import DonationGoal from '../components/DonationGoal';

const DonationGoalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Componente de Meta - CONTÉM TODO O CONTEÚDO */}
        <div className="max-w-4xl mx-auto">
          <DonationGoal />
        </div>

      </div>
    </div>
  );
};

export default DonationGoalPage;