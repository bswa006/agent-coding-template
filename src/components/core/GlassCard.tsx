import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'heavy' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn' | 'none';
  hover?: boolean;
  neonColor?: 'blue' | 'purple' | 'pink' | 'green';
  onClick?: () => void;
}

const variants = {
  default: 'glass-card',
  heavy: 'glass-heavy',
  neon: 'glass-card neon-border'
};

const sizes = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

const neonColors = {
  blue: 'neon-glow-blue',
  purple: 'neon-glow-purple',
  pink: 'neon-glow-pink',
  green: 'border-green-400 shadow-green-400/20'
};

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  animation = 'fadeIn',
  hover = true,
  neonColor,
  onClick
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const baseClasses = clsx(
    variants[variant],
    sizes[size],
    {
      'magnetic': hover,
      'cursor-pointer': onClick,
      [neonColors[neonColor!]]: neonColor
    },
    'gpu-accelerated',
    className
  );

  // Simple animation variants
  const getAnimationProps = () => {
    if (animation === 'none') return {};
    
    const baseProps = {
      initial: { opacity: 0 },
      animate: inView ? { opacity: 1 } : { opacity: 0 }
    };

    switch (animation) {
      case 'slideUp':
        return {
          ...baseProps,
          initial: { opacity: 0, y: 50 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        };
      case 'scaleIn':
        return {
          ...baseProps,
          initial: { opacity: 0, scale: 0.8 },
          animate: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        };
      default:
        return baseProps;
    }
  };

  return (
    <motion.div
      ref={ref}
      {...getAnimationProps()}
      whileHover={hover ? { y: -5 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      className={baseClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard; 