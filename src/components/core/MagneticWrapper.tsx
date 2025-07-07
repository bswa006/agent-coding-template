import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  distance?: number;
  disabled?: boolean;
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  className = '',
  strength = 0.3,
  distance = 100,
  disabled = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distanceFromCenter < distance) {
        const magneticForce = (distance - distanceFromCenter) / distance;
        setPosition({
          x: deltaX * strength * magneticForce,
          y: deltaY * strength * magneticForce
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    // Add event listeners to the document to track cursor globally
    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, distance, disabled]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ 
        x: position.x, 
        y: position.y 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15 
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper; 