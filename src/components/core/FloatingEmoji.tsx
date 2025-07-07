import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './index';

interface FloatingEmojiProps {
  emoji: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speed?: 'slow' | 'medium' | 'fast';
  magnetic?: boolean;
  magneticStrength?: number;
  magneticDistance?: number;
  initialDelay?: number;
  bounce?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  emoji,
  className = '',
  size = 'md',
  speed = 'medium',
  magnetic = true,
  magneticStrength = 0.4,
  magneticDistance = 120,
  initialDelay = 0,
  bounce = true,
  glow = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  };

  const speedDurations = {
    slow: 4,
    medium: 3,
    fast: 2
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    scale: [1, 1.05, 1]
  };

  const floatingTransition = {
    duration: speedDurations[speed],
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
    delay: initialDelay
  };

  const hoverAnimation = {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      scale: { duration: 0.3 },
      rotate: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    }
  };

  const EmojiElement = (
    <motion.div
      className={`
        inline-block select-none cursor-pointer
        ${sizeClasses[size]}
        ${glow ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''}
        ${bounce ? 'hover:animate-bounce' : ''}
        ${className}
      `}
      animate={floatingAnimation}
      transition={floatingTransition}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        filter: isHovered ? 'brightness(1.2) saturate(1.2)' : 'brightness(1)',
        transition: 'filter 0.3s ease'
      }}
    >
      {emoji}
      
      {/* Sparkle effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                scale: 0
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  if (magnetic) {
    return (
      <MagneticWrapper 
        strength={magneticStrength} 
        distance={magneticDistance}
        className="relative"
      >
        {EmojiElement}
      </MagneticWrapper>
    );
  }

  return EmojiElement;
};

export default FloatingEmoji; 