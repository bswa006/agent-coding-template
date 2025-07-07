import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleFieldProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
  opacity?: number;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  className = '',
  density = 'medium',
  colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'],
  speed = 'medium',
  size = 'medium',
  interactive = false,
  opacity = 0.6,
  blendMode = 'normal'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  // Configuration based on props
  const config = {
    density: {
      low: 0.5,
      medium: 1,
      high: 1.5
    },
    speed: {
      slow: 0.5,
      medium: 1,
      fast: 2
    },
    size: {
      small: { min: 1, max: 3 },
      medium: { min: 2, max: 5 },
      large: { min: 3, max: 7 }
    }
  };

  // Create a particle
  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const sizeRange = config.size[size];
    const particleSize = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
    const speedMultiplier = config.speed[speed];
    
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speedMultiplier,
      vy: (Math.random() - 0.5) * speedMultiplier,
      size: particleSize,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * opacity,
      life: 0,
      maxLife: Math.random() * 200 + 100
    };
  };

  // Initialize particles
  const initParticles = (canvas: HTMLCanvasElement) => {
    const particleCount = Math.floor(
      (canvas.width * canvas.height) / 15000 * config.density[density]
    );
    
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  };

  // Update particle
  const updateParticle = (particle: Particle, canvas: HTMLCanvasElement) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life++;

    // Interactive effect
    if (interactive) {
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += dx * force * 0.001;
        particle.vy += dy * force * 0.001;
      }
    }

    // Fade in/out effect
    const fadeInTime = particle.maxLife * 0.1;
    const fadeOutTime = particle.maxLife * 0.9;
    
    if (particle.life < fadeInTime) {
      particle.opacity = (particle.life / fadeInTime) * opacity;
    } else if (particle.life > fadeOutTime) {
      particle.opacity = ((particle.maxLife - particle.life) / (particle.maxLife - fadeOutTime)) * opacity;
    }

    // Boundary check and wrapping
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;

    // Reset particle if it's too old
    if (particle.life >= particle.maxLife) {
      Object.assign(particle, createParticle(canvas));
    }
  };

  // Render particle
  const renderParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    ctx.globalCompositeOperation = blendMode as GlobalCompositeOperation;
    
    // Create gradient
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size
    );
    gradient.addColorStop(0, particle.color);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and render particles
    particlesRef.current.forEach(particle => {
      updateParticle(particle, canvas);
      renderParticle(ctx, particle);
    });

    // Draw connections between nearby particles
    if (density === 'high') {
      ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!interactive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const container = canvas.parentElement;
    if (!container) return;
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    initParticles(canvas);
  };

  // Initialize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    handleResize();
    animate();
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [density, colors, speed, size, interactive, opacity, blendMode]);

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: interactive ? 'auto' : 'none' }}
      />
    </motion.div>
  );
};

export default ParticleField; 