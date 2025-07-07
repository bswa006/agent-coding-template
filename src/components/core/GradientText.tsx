import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'aurora' | 'sunset' | 'ocean' | 'purple' | 'pink';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  pulse?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const gradients = {
  aurora: 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--hover-primary)]',
  sunset: 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]',
  ocean: 'bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--hover-secondary)]',
  purple: 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--hover-primary)]',
  pink: 'bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-primary)]'
};

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  variant = 'aurora',
  size = 'md',
  animated = true,
  pulse = false,
  as: Component = 'span'
}) => {
  const baseClasses = clsx(
    gradients[variant],
    sizes[size],
    'bg-clip-text text-transparent font-bold',
    {
      'animate-pulse': pulse,
      'gradient-text-animated': animated
    },
    className
  );

  const MotionComponent = motion[Component as keyof typeof motion] as any;

  if (animated) {
    return (
      <MotionComponent
        className={baseClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  );
};

export default GradientText; 