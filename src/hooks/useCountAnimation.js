// src/hooks/useCountAnimation.js
import { useState, useEffect, useRef } from 'react';

/**
 * Hook customizado para animar contagem de números
 * @param {number} target - Número final da contagem
 * @param {number} duration - Duração da animação em ms (padrão: 2000)
 * @param {boolean} animateOnMount - Se deve animar no mount inicial (padrão: false)
 * @returns {number} - Valor atual da contagem animada
 */
export const useCountAnimation = (target, duration = 2000, animateOnMount = false) => {
  const [count, setCount] = useState(animateOnMount ? 0 : target);
  const previousTarget = useRef(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Se o target for 0, zera imediatamente
    if (target === 0) {
      setCount(0);
      previousTarget.current = 0;
      return;
    }

    // Se não deve animar no mount e ainda não animou, apenas seta o valor
    if (!animateOnMount && !hasAnimated.current) {
      setCount(target);
      previousTarget.current = target;
      hasAnimated.current = true;
      return;
    }

    // Se o target não mudou, não anima
    if (previousTarget.current === target) {
      return;
    }

    // Anima apenas quando o target mudar de fato
    let startTime;
    let animationFrame;
    const startValue = previousTarget.current;
    const difference = target - startValue;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutCubic) para animação suave
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(startValue + (easeOut * difference));
      setCount(newValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        previousTarget.current = target;
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, animateOnMount]);

  return count;
};