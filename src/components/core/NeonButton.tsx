import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface NeonButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'purple' | 'pink' | 'green';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-[var(--accent-primary)] text-white border-transparent hover:bg-[var(--hover-primary)]',
  secondary: 'bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:bg-[var(--color-surface-light)]',
  outline: 'bg-transparent border-2',
  ghost: 'bg-transparent border-transparent hover:bg-[var(--color-surface-light)]'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const colorClasses = {
  blue: {
    primary: '',
    secondary: '',
    outline: 'border-[var(--accent-secondary)] text-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)] hover:text-white',
    ghost: 'text-[var(--accent-secondary)]',
    glow: ''
  },
  purple: {
    primary: '',
    secondary: '',
    outline: 'border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white',
    ghost: 'text-[var(--accent-primary)]',
    glow: ''
  },
  pink: {
    primary: '',
    secondary: '',
    outline: 'border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white',
    ghost: 'text-[var(--accent-pink)]',
    glow: ''
  },
  green: {
    primary: '',
    secondary: '',
    outline: 'border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)] hover:text-white',
    ghost: 'text-[var(--accent-green)]',
    glow: ''
  }
};

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  color = 'blue',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  href,
  target,
  type = 'button'
}) => {
  const baseClasses = clsx(
    'relative inline-flex items-center justify-center',
    'font-medium rounded-lg border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-primary)] focus:ring-offset-white',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    colorClasses[color][variant],
    colorClasses[color].glow,
    {
      'cursor-not-allowed': disabled || loading,
      'animate-pulse': loading
    },
    className
  );

  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className={clsx('flex items-center gap-2', { 'opacity-0': loading })}>
        {icon && iconPosition === 'left' && <span className="w-4 h-4">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="w-4 h-4">{icon}</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.button>
  );
};

export default NeonButton; 