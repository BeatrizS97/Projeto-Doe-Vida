import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const HeartBeat = ({ size = 'medium', filled = true, className = '' }) => {
  const [heartbeat, setHeartbeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };

  return (
    <div className={`transition-transform duration-300 ${heartbeat ? 'scale-110' : 'scale-100'} ${className}`}>
      <Heart 
        className={`${sizes[size]} text-red-600 ${filled ? 'fill-red-600' : ''}`}
      />
    </div>
  );
};

export default HeartBeat;