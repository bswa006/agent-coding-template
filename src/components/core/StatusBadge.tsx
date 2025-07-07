import React from 'react';
import { motion } from 'framer-motion';
import { MagneticWrapper } from './index';

interface StatusBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'premium';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  icon?: string;
  pulse?: boolean;
  glow?: boolean;
  magnetic?: boolean;
  magneticStrength?: number;
  onClick?: () => void;
  count?: number;
  dot?: boolean;
  outline?: boolean;
  gradient?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  icon,
  pulse = false,
  glow = false,
  magnetic = false,
  magneticStrength = 0.2,
  onClick,
  count,
  dot = false,
  outline = false,
  gradient = false
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base'
  };

  // Variant classes
  const variantClasses = {
    default: outline 
      ? 'border border-gray-400 text-gray-300 hover:bg-gray-400/10'
      : 'bg-gray-700 text-gray-300 hover:bg-gray-600',
    success: outline
      ? 'border border-green-400 text-green-400 hover:bg-green-400/10'
      : 'bg-green-500 text-white hover:bg-green-600',
    warning: outline
      ? 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
      : 'bg-yellow-500 text-white hover:bg-yellow-600',
    error: outline
      ? 'border border-red-400 text-red-400 hover:bg-red-400/10'
      : 'bg-red-500 text-white hover:bg-red-600',
    info: outline
      ? 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    premium: outline
      ? 'border border-purple-400 text-purple-400 hover:bg-purple-400/10'
      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
  };

  // Gradient classes
  const gradientClasses = {
    default: 'bg-gradient-to-r from-gray-600 to-gray-800',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-600',
    error: 'bg-gradient-to-r from-red-500 to-rose-600',
    info: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    premium: 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'
  };

  // Glow classes
  const glowClasses = {
    default: 'neon-glow-blue',
    success: 'shadow-green-400/50',
    warning: 'shadow-yellow-400/50',
    error: 'shadow-red-400/50',
    info: 'shadow-blue-400/50',
    premium: 'neon-glow-purple'
  };

  const baseClasses = `
    inline-flex items-center gap-1.5 
    rounded-full font-medium 
    transition-all duration-300 
    ${sizeClasses[size]}
    ${gradient ? gradientClasses[variant] : variantClasses[variant]}
    ${glow ? glowClasses[variant] : ''}
    ${pulse ? 'animate-pulse' : ''}
    ${onClick ? 'cursor-pointer hover:scale-105' : ''}
    ${className}
  `;

  const BadgeElement = (
    <motion.div
      className={baseClasses}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
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
      {/* Status dot */}
      {dot && (
        <motion.div
          className={`
            w-2 h-2 rounded-full 
            ${gradient ? 'bg-white' : 'bg-current'}
            ${pulse ? 'animate-ping' : ''}
          `}
          animate={pulse ? { scale: [1, 1.2, 1] } : {}}
          transition={pulse ? { duration: 2, repeat: Infinity } : {}}
        />
      )}

      {/* Icon */}
      {icon && (
        <span className="text-current">{icon}</span>
      )}

      {/* Content */}
      <span>{children}</span>

      {/* Count */}
      {count !== undefined && (
        <motion.span
          className={`
            ml-1 px-1.5 py-0.5 text-xs 
            bg-white/20 rounded-full 
            ${size === 'xs' ? 'text-xs' : 'text-xs'}
          `}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {count > 99 ? '99+' : count}
        </motion.span>
      )}
    </motion.div>
  );

  if (magnetic) {
    return (
      <MagneticWrapper strength={magneticStrength} distance={40}>
        {BadgeElement}
      </MagneticWrapper>
    );
  }

  return BadgeElement;
};

export default StatusBadge; 