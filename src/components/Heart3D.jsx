import React, { useState, useEffect } from 'react';

const Heart3D = ({ wingImageUrl = null }) => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillLevel(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full mx-auto">
      <style>{`
        @keyframes wingFlapLeft {
          0%, 100% { transform: perspective(1000px) rotateY(0deg) rotateZ(0deg); }
          50% { transform: perspective(1000px) rotateY(-8deg) rotateZ(-2deg); }
        }
        @keyframes wingFlapRight {
          0%, 100% { transform: perspective(1000px) rotateY(0deg) rotateZ(0deg); }
          50% { transform: perspective(1000px) rotateY(8deg) rotateZ(2deg); }
        }
        @keyframes floatHeart {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .wing-left {
          animation: wingFlapLeft 4s ease-in-out infinite;
          transform-origin: 100% 50%;
        }
        .wing-right {
          animation: wingFlapRight 4s ease-in-out infinite;
          transform-origin: 0% 50%;
        }
        .heart-float {
          animation: floatHeart 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Renderiza asas apenas se a imagem for fornecida */}
        {wingImageUrl && (
          <div 
            className="absolute" 
            style={{ 
              left: '50%', 
              top: '75%', 
              transform: 'translate(-50%, -50%)',
              width: '180%',
              height: 'auto',
              zIndex: 0,
            }}
          >
            <img 
              src="/asas.png"
              alt="Asas de anjo"
              className="w-full h-full object-contain"
              style={{ 
                opacity: 0.95,
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.3)) drop-shadow(0 0 40px rgba(251,113,133,0.2))',
              }}
            />
          </div>
        )}

        {/* Coração - TAMANHO ORIGINAL */}
        <div className="relative heart-float" style={{ zIndex: 10, width: '100%', maxWidth: '200px' }}>
          <svg viewBox="0 0 200 128" className="w-full h-full" preserveAspectRatio="xMidYMin meet">
            <defs>
              <linearGradient id="bloodGradientDark" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="30%" stopColor="#991b1b" />
                <stop offset="60%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>

              <radialGradient id="shine3D">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>

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

              <clipPath id="heartClip">
                <path d="M100,123 
                         C100,123 20,83 20,43 
                         C20,16 42,0 62,0 
                         C80,0 92,10 100,22 
                         C108,10 120,0 138,0 
                         C158,0 180,16 180,43 
                         C180,83 100,123 100,123 Z"
                />
              </clipPath>
            </defs>

            {/* Sombra do coração */}
            <path 
              d="M100,126 
                 C100,126 20,83 20,43 
                 C20,16 42,0 62,0 
                 C80,0 92,10 100,22 
                 C108,10 120,0 138,0 
                 C158,0 180,16 180,43 
                 C180,83 100,126 100,126 Z"
              fill="#000000"
              opacity="0.25"
              transform="translate(4, 4)"
            />

            {/* Contorno do coração */}
            <path 
              d="M100,123 
                 C100,123 20,83 20,43 
                 C20,16 42,0 62,0 
                 C80,0 92,10 100,22 
                 C108,10 120,0 138,0 
                 C158,0 180,16 180,43 
                 C180,83 100,123 100,123 Z"
              fill="#fecdd3"
              stroke="#be123c"
              strokeWidth="3"
            />

            {/* Sangue enchendo */}
            <g clipPath="url(#heartClip)">
              <rect 
                x="0" 
                y={128 - (fillLevel * 1.23)}
                width="200" 
                height={fillLevel * 1.23}
                fill="url(#bloodGradientDark)"
                className="transition-all duration-200"
              />
              
              <path
                d={`M 0,${128 - (fillLevel * 1.23)} 
                    Q 50,${126 - (fillLevel * 1.23)} 100,${128 - (fillLevel * 1.23)} 
                    T 200,${128 - (fillLevel * 1.23)} 
                    L 200,128 L 0,128 Z`}
                fill="url(#bloodGradientDark)"
                opacity="0.5"
              />
            </g>

            {/* Brilho 3D */}
            <ellipse 
              cx="70" 
              cy="26"
              rx="28" 
              ry="38" 
              fill="url(#shine3D)"
            />

            {/* Contorno forte */}
            <path 
              d="M100,123 
                 C100,123 20,83 20,43 
                 C20,16 42,0 62,0 
                 C80,0 92,10 100,22 
                 C108,10 120,0 138,0 
                 C158,0 180,16 180,43 
                 C180,83 100,123 100,123 Z"
              fill="none"
              stroke="#991b1b"
              strokeWidth="4"
              filter="url(#innerShadow)"
            />

            {/* Texto */}
            <text 
              x="100" 
              y="65" 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="fill-white font-bold text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {Math.floor(fillLevel)}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Heart3D;