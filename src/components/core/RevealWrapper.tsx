import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  stagger?: number;
  distance?: number;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  }
};

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  stagger = 0,
  distance
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  // If distance is provided, override the animation distance
  const animationVariant = distance ? {
    ...animations[animation],
    hidden: {
      ...animations[animation].hidden,
      ...(animation.includes('slide') && animation.includes('Up') ? { y: distance } : {}),
      ...(animation.includes('slide') && animation.includes('Left') ? { x: distance } : {}),
      ...(animation.includes('slide') && animation.includes('Right') ? { x: -distance } : {})
    }
  } : animations[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariant}
      transition={{
        duration,
        delay: delay + stagger,
        ease: [0.16, 1, 0.3, 1] // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
};

// Higher-order component for staggered children
export const RevealStagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: RevealWrapperProps['animation'];
}> = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1, 
  animation = 'slideUp' 
}) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <RevealWrapper
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </RevealWrapper>
      ))}
    </div>
  );
};

export default RevealWrapper; 