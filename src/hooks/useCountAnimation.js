// src/hooks/useCountAnimation.js
import { useState, useEffect } from 'react';

/**
 * Hook customizado para animar contagem de números
 * @param {number} target - Número final da contagem
 * @param {number} duration - Duração da animação em ms (padrão: 2000)
 * @returns {number} - Valor atual da contagem animada
 */
export const useCountAnimation = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Se o target for 0, zera imediatamente
    if (target === 0) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutCubic) para animação suave
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return count;
};