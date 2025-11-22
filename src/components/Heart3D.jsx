// src/components/Heart3D.jsx
import React, { useState, useEffect } from 'react';

const Heart3D = () => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillLevel(prev => (prev >= 100 ? 0 : prev + 0.5)); // Mais devagar (0.5 ao invés de 1)
    }, 100); // Atualiza a cada 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto animate-pulse-slow">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          {/* Gradiente ESCURO realista igual bolsa */}
          <linearGradient id="bloodGradientDark" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7f1d1d" /> {/* Vermelho bem escuro */}
            <stop offset="30%" stopColor="#991b1b" /> {/* Vermelho escuro */}
            <stop offset="60%" stopColor="#b91c1c" /> {/* Vermelho médio */}
            <stop offset="100%" stopColor="#dc2626" /> {/* Vermelho */}
          </linearGradient>

          {/* Brilho 3D sutil */}
          <radialGradient id="shine3D">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Sombra interna */}
          <filter id="innerShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="2" dy="4" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.6"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Máscara do coração */}
          <clipPath id="heartClip">
            <path d="M100,170 
                     C100,170 30,120 30,80 
                     C30,50 50,35 70,35 
                     C85,35 95,45 100,55 
                     C105,45 115,35 130,35 
                     C150,35 170,50 170,80 
                     C170,120 100,170 100,170 Z"
            />
          </clipPath>
        </defs>

        {/* Sombra do coração */}
        <path 
          d="M100,175 
             C100,175 30,120 30,80 
             C30,50 50,35 70,35 
             C85,35 95,45 100,55 
             C105,45 115,35 130,35 
             C150,35 170,50 170,80 
             C170,120 100,175 100,175 Z"
          fill="#000000"
          opacity="0.25"
          transform="translate(4, 4)"
        />

        {/* Contorno do coração (fundo rosa claro) */}
        <path 
          d="M100,170 
             C100,170 30,120 30,80 
             C30,50 50,35 70,35 
             C85,35 95,45 100,55 
             C105,45 115,35 130,35 
             C150,35 170,50 170,80 
             C170,120 100,170 100,170 Z"
          fill="#fecdd3"
          stroke="#be123c"
          strokeWidth="3"
        />

        {/* Sangue enchendo com cor ESCURA realista */}
        <g clipPath="url(#heartClip)">
          <rect 
            x="0" 
            y={200 - (fillLevel * 1.7)} 
            width="200" 
            height={fillLevel * 1.7}
            fill="url(#bloodGradientDark)"
            className="transition-all duration-200"
          />
          
          {/* Ondas sutis no sangue */}
          <path
            d={`M 0,${200 - (fillLevel * 1.7)} 
                Q 50,${198 - (fillLevel * 1.7)} 100,${200 - (fillLevel * 1.7)} 
                T 200,${200 - (fillLevel * 1.7)} 
                L 200,200 L 0,200 Z`}
            fill="url(#bloodGradientDark)"
            opacity="0.5"
          />
        </g>

        {/* Brilho 3D */}
        <ellipse 
          cx="75" 
          cy="65" 
          rx="25" 
          ry="35" 
          fill="url(#shine3D)"
        />

        {/* Contorno do coração forte */}
        <path 
          d="M100,170 
             C100,170 30,120 30,80 
             C30,50 50,35 70,35 
             C85,35 95,45 100,55 
             C105,45 115,35 130,35 
             C150,35 170,50 170,80 
             C170,120 100,170 100,170 Z"
          fill="none"
          stroke="#991b1b"
          strokeWidth="4"
          filter="url(#innerShadow)"
        />
      </svg>

      {/* Porcentagem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-2xl lg:text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {Math.floor(fillLevel)}%
        </span>
      </div>
    </div>
  );
};

export default Heart3D;