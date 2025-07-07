import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StatusBadge, MagneticWrapper } from './index';

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'premium';
  icon?: string;
  count?: number;
  visible?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
  floating?: boolean;
  magnetic?: boolean;
  pulse?: boolean;
  glow?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  offset?: { x: number; y: number };
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  children,
  className = '',
  position = 'top-right',
  variant = 'default',
  icon,
  count,
  visible = true,
  autoHide = false,
  autoHideDelay = 3000,

  magnetic = false,
  pulse = false,
  glow = false,
  onClick,
  onClose,
  offset = { x: 0, y: 0 }
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
    
    if (autoHide && visible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, autoHideDelay);
      
      return () => clearTimeout(timer);
    }
  }, [visible, autoHide, autoHideDelay, onClose]);

  const getPositionClasses = () => {
    const baseClasses = 'fixed z-50';
    
    switch (position) {
      case 'top-left':
        return `${baseClasses} top-4 left-4`;
      case 'top-right':
        return `${baseClasses} top-4 right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      case 'center':
        return `${baseClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const getAnimationVariants = () => {
    const slideDirection = position.includes('right') ? 'right' : 'left';
    const slideDistance = 100;
    
    return {
      initial: {
        opacity: 0,
        scale: 0.8,
        x: slideDirection === 'right' ? slideDistance : -slideDistance,
        y: position.includes('bottom') ? 20 : -20
      },
      animate: {
        opacity: 1,
        scale: 1,
        x: offset.x,
        y: offset.y
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        x: slideDirection === 'right' ? slideDistance : -slideDistance,
        y: position.includes('bottom') ? 20 : -20
      }
    };
  };

  const BadgeContent = (
    <motion.div
      className={`
        ${getPositionClasses()}
        ${className}
      `}
      variants={getAnimationVariants()}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
    >
      <div className="relative">
        <StatusBadge
          variant={variant}
          icon={icon}
          count={count}
          pulse={pulse}
          glow={glow}
          onClick={onClick}
          className="shadow-lg"
        >
          {children}
        </StatusBadge>
        
        {/* Close button */}
        {onClose && (
          <motion.button
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
              onClose();
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        )}
        
        {/* Pulse animation overlay */}
        {pulse && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-current"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}
      </div>
    </motion.div>
  );

  if (magnetic) {
    return (
      <AnimatePresence>
        {isVisible && (
          <MagneticWrapper strength={0.2} distance={60}>
            {BadgeContent}
          </MagneticWrapper>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && BadgeContent}
    </AnimatePresence>
  );
};

// Preset components for common use cases
export const NotificationBadge: React.FC<Omit<FloatingBadgeProps, 'variant'>> = (props) => (
  <FloatingBadge variant="info" icon="🔔" autoHide={true} {...props} />
);

export const SuccessBadge: React.FC<Omit<FloatingBadgeProps, 'variant'>> = (props) => (
  <FloatingBadge variant="success" icon="✅" autoHide={true} {...props} />
);

export const ErrorBadge: React.FC<Omit<FloatingBadgeProps, 'variant'>> = (props) => (
  <FloatingBadge variant="error" icon="❌" autoHide={true} {...props} />
);

export const MetricBadge: React.FC<Omit<FloatingBadgeProps, 'variant'>> = (props) => (
  <FloatingBadge variant="premium" icon="📊" floating={true} glow={true} {...props} />
);

export default FloatingBadge; 