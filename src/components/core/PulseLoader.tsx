import React from 'react';
import { motion } from 'framer-motion';

interface PulseLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'bars' | 'ring' | 'wave' | 'orbit';
  color?: 'blue' | 'purple' | 'pink' | 'green' | 'orange' | 'gradient';
  speed?: 'slow' | 'medium' | 'fast';
  count?: number;
  glow?: boolean;
  label?: string;
}

const PulseLoader: React.FC<PulseLoaderProps> = ({
  className = '',
  size = 'md',
  variant = 'dots',
  color = 'blue',
  speed = 'medium',
  count = 3,
  glow = true,
  label
}) => {
  const sizeConfig = {
    sm: { base: 8, container: 32 },
    md: { base: 12, container: 48 },
    lg: { base: 16, container: 64 },
    xl: { base: 20, container: 80 }
  };

  const speedConfig = {
    slow: { duration: 1.5, stagger: 0.3 },
    medium: { duration: 1, stagger: 0.2 },
    fast: { duration: 0.6, stagger: 0.1 }
  };

  const colorConfig = {
    blue: { primary: '#3B82F6', secondary: '#1D4ED8' },
    purple: { primary: '#8B5CF6', secondary: '#7C3AED' },
    pink: { primary: '#EC4899', secondary: '#DB2777' },
    green: { primary: '#10B981', secondary: '#059669' },
    orange: { primary: '#F59E0B', secondary: '#D97706' },
    gradient: { primary: '#667eea', secondary: '#764ba2' }
  };

  const { base, container } = sizeConfig[size];
  const { duration, stagger } = speedConfig[speed];
  const { primary, secondary } = colorConfig[color];

  const glowStyle = glow ? {
    filter: `drop-shadow(0 0 ${base}px ${primary}30)`,
    boxShadow: `0 0 ${base * 2}px ${primary}20`
  } : {};

  const DotsLoader = () => (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            width: base,
            height: base,
            background: color === 'gradient' 
              ? `linear-gradient(45deg, ${primary}, ${secondary})`
              : primary,
            ...glowStyle
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * stagger,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const BarsLoader = () => (
    <div className="flex items-end gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-t"
          style={{
            width: base * 0.8,
            height: base * 2,
            background: color === 'gradient' 
              ? `linear-gradient(180deg, ${primary}, ${secondary})`
              : primary,
            ...glowStyle
          }}
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * stagger,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const RingLoader = () => (
    <motion.div
      className="rounded-full border-4 border-transparent"
      style={{
        width: container,
        height: container,
        borderTopColor: primary,
        borderRightColor: secondary,
        ...glowStyle
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  const WaveLoader = () => (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full mx-1"
          style={{
            width: base,
            height: base,
            background: color === 'gradient' 
              ? `linear-gradient(45deg, ${primary}, ${secondary})`
              : primary,
            ...glowStyle
          }}
          animate={{
            y: [0, -base, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * stagger,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const OrbitLoader = () => (
    <div className="relative" style={{ width: container, height: container }}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: duration * 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {Array.from({ length: count }).map((_, index) => {
          const angle = (360 / count) * index;
          const radius = container / 2 - base;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                width: base,
                height: base,
                background: color === 'gradient' 
                  ? `linear-gradient(45deg, ${primary}, ${secondary})`
                  : primary,
                left: container / 2 + x - base / 2,
                top: container / 2 + y - base / 2,
                ...glowStyle
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: duration * 2,
                repeat: Infinity,
                delay: index * stagger,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );

  const getLoaderComponent = () => {
    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'bars':
        return <BarsLoader />;
      case 'ring':
        return <RingLoader />;
      case 'wave':
        return <WaveLoader />;
      case 'orbit':
        return <OrbitLoader />;
      default:
        return <DotsLoader />;
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center">
        {getLoaderComponent()}
      </div>
      
      {label && (
        <motion.p
          className="text-sm font-medium text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: duration * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
};

// Preset loaders for common use cases
export const LoadingSpinner: React.FC<Omit<PulseLoaderProps, 'variant'>> = (props) => (
  <PulseLoader variant="ring" {...props} />
);

export const LoadingDots: React.FC<Omit<PulseLoaderProps, 'variant'>> = (props) => (
  <PulseLoader variant="dots" {...props} />
);

export const LoadingBars: React.FC<Omit<PulseLoaderProps, 'variant'>> = (props) => (
  <PulseLoader variant="bars" {...props} />
);

export const LoadingWave: React.FC<Omit<PulseLoaderProps, 'variant'>> = (props) => (
  <PulseLoader variant="wave" {...props} />
);

export const LoadingOrbit: React.FC<Omit<PulseLoaderProps, 'variant'>> = (props) => (
  <PulseLoader variant="orbit" {...props} />
);

export default PulseLoader; 