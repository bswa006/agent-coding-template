import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { MagneticWrapper } from './index';

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  glow?: boolean;
  pulse?: boolean;
  spin?: boolean;
  bounce?: boolean;
  magnetic?: boolean;
  magneticStrength?: number;
  onClick?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  className = '',
  size = 'md',
  variant = 'default',
  glow = false,
  pulse = false,
  spin = false,
  bounce = false,
  magnetic = false,
  magneticStrength = 0.3,
  onClick
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-gray-300',
    primary: 'text-blue-400',
    secondary: 'text-purple-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };

  const glowClasses = {
    default: 'drop-shadow-[0_0_8px_rgba(156,163,175,0.5)]',
    primary: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]',
    secondary: 'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]',
    success: 'drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]',
    warning: 'drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]',
    error: 'drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]'
  };

  const animations = {
    pulse: pulse ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : {},
    spin: spin ? { rotate: 360 } : {},
    bounce: bounce ? { y: [0, -8, 0] } : {}
  };

  const combinedAnimations = {
    ...animations.pulse,
    ...animations.spin,
    ...animations.bounce
  };

  const transition = {
    duration: spin ? 2 : pulse ? 1.5 : bounce ? 0.6 : 0.3,
    repeat: (spin || pulse || bounce) ? Infinity : 0,
    ease: "easeInOut" as const
  };

  const IconElement = (
    <motion.div
      className={`
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glow ? glowClasses[variant] : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
      animate={combinedAnimations}
      transition={transition}
      whileHover={onClick ? { scale: 1.1 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
    >
      <Icon className="w-full h-full" strokeWidth={1.5} />
    </motion.div>
  );

  if (magnetic) {
    return (
      <MagneticWrapper strength={magneticStrength} distance={40}>
        {IconElement}
      </MagneticWrapper>
    );
  }

  return IconElement;
};

export default IconWrapper; 