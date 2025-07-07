import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  className?: string;
  gradient?: 'aurora' | 'sunset' | 'ocean' | 'purple' | 'pink';
  height?: number;
  position?: 'top' | 'bottom';
  zIndex?: number;
}

const gradients = {
  aurora: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500',
  sunset: 'bg-gradient-to-r from-pink-400 to-yellow-400',
  ocean: 'bg-gradient-to-r from-blue-400 to-cyan-400',
  purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
  pink: 'bg-gradient-to-r from-pink-400 to-pink-600'
};

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = '',
  gradient = 'aurora',
  height = 3,
  position = 'top',
  zIndex = 50
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    // Update on scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Update on resize (content height might change)
    window.addEventListener('resize', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  const positionClasses = position === 'top' ? 'top-0' : 'bottom-0';

  return (
    <div
      className={`fixed left-0 right-0 ${positionClasses} ${className}`}
      style={{ zIndex }}
    >
      <div 
        className="w-full bg-gray-900/20 backdrop-blur-sm"
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={`h-full ${gradients[gradient]} shadow-lg`}
          initial={{ width: '0%' }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          style={{
            boxShadow: `0 0 20px rgba(255, 255, 255, 0.3)`
          }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator; 