import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface GradientCursorProps {
  colors?: string[];
  size?: number;
  trailLength?: number;
  enabled?: boolean;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference';
  opacity?: number;
  springConfig?: {
    stiffness: number;
    damping: number;
  };
}

interface CursorTrail {
  x: number;
  y: number;
  opacity: number;
  size: number;
  timestamp: number;
}

const GradientCursor: React.FC<GradientCursorProps> = ({
  colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'],
  size = 20,
  trailLength = 15,
  enabled = true,
  blendMode = 'screen',
  opacity = 0.6,
  springConfig = { stiffness: 150, damping: 25 }
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef<CursorTrail[]>([]);
  const animationFrameRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animations for smooth trailing
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update motion values
      cursorX.set(clientX);
      cursorY.set(clientY);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
      
      // Add to trail
      const currentTime = Date.now();
      trailRef.current.push({
        x: clientX,
        y: clientY,
        opacity: 1,
        size: isInteractive ? size * 1.5 : size,
        timestamp: currentTime
      });
      
      // Limit trail length
      if (trailRef.current.length > trailLength) {
        trailRef.current.shift();
      }
      
      lastMousePos.current = { x: clientX, y: clientY };
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      trailRef.current = [];
    };

    // Animation loop for trail decay
    const animate = () => {
      const currentTime = Date.now();
      const decayTime = 300; // 300ms trail decay
      
      trailRef.current = trailRef.current
        .map((point, index) => ({
          ...point,
          opacity: Math.max(0, 1 - (currentTime - point.timestamp) / decayTime),
          size: point.size * (0.5 + (point.opacity * 0.5))
        }))
        .filter(point => point.opacity > 0.01);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, size, trailLength, cursorX, cursorY, springConfig, colors, blendMode, opacity]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: springX,
          top: springY,
          width: isHovering ? size * 1.5 : size,
          height: isHovering ? size * 1.5 : size,
          marginLeft: -(isHovering ? size * 0.75 : size * 0.5),
          marginTop: -(isHovering ? size * 0.75 : size * 0.5),
          background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
          mixBlendMode: blendMode,
          opacity: opacity,
          filter: 'blur(2px)',
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />
      
      {/* Trail particles */}
      {trailRef.current.map((point, index) => {
        const colorIndex = index % colors.length;
        const trailOpacity = point.opacity * opacity;
        
        if (trailOpacity < 0.01) return null;
        
        return (
          <motion.div
            key={`${point.timestamp}-${index}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              marginLeft: -point.size * 0.5,
              marginTop: -point.size * 0.5,
              background: `radial-gradient(circle, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`,
              mixBlendMode: blendMode,
              opacity: trailOpacity,
              filter: 'blur(1px)',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
          />
        );
      })}
      
      {/* Glow effect for interactive elements */}
      {isHovering && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: springX,
            top: springY,
            width: size * 3,
            height: size * 3,
            marginLeft: -size * 1.5,
            marginTop: -size * 1.5,
            background: `radial-gradient(circle, transparent 40%, ${colors[2]}20, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        />
      )}
    </div>
  );
};

export default GradientCursor; 