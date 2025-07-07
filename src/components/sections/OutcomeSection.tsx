import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
 
  Users, 
  Shield, 
  Code, 
  Clock,
  Zap,

  CheckCircle,
  BarChart3,
  Rocket,
  Heart,
  Star,
  Trophy
} from 'lucide-react';
import { RevealWrapper } from '../core';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const startCount = 0;

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(startCount + (end - startCount) * easeOutExpo);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

const OutcomeSection: React.FC = () => {
  const metrics = [
    {
      icon: Zap,
      title: 'For Developers',
      value: 10,
      suffix: 'X',
      description: 'Faster Development',
      color: 'blue',
      details: [
        'Instant context understanding',
        'Consistent code patterns',
        'Reduced debugging time'
      ]
    },
    {
      icon: Shield,
      title: 'For Teams',
      value: 84,
      suffix: '%',
      description: 'Fewer Security Issues',
      color: 'green',
      details: [
        'Built-in security patterns',
        'Automated vulnerability checks',
        'Consistent security practices'
      ]
    },
    {
      icon: BarChart3,
      title: 'For Quality',
      value: 53,
      suffix: '%',
      description: 'Better Test Coverage',
      color: 'orange',
      details: [
        'AI-generated test patterns',
        'Comprehensive edge cases',
        'Automated quality gates'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time to Market',
      description: 'Ship features 5x faster with AI-powered development',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Users,
      title: 'Team Velocity',
      description: 'Onboard new developers in hours, not weeks',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-600'
    },
    {
      icon: Code,
      title: 'Code Quality',
      description: 'Consistent patterns across your entire codebase',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-600'
    },
    {
      icon: Trophy,
      title: 'Developer Experience',
      description: 'Happier developers building better software',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600' },
      green: { bg: 'bg-green-600', text: 'text-green-600' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600' },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealWrapper>
                      <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                The{' '}
                <span className="text-blue-600">Outcome</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Better Code, Happier Developers, Faster Delivery
            </p>
          </div>
        </RevealWrapper>

        {/* Enhanced Metrics Grid */}
        <RevealWrapper>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className={`w-20 h-20 ${getColorClasses(metric.color).bg} rounded-xl flex items-center justify-center mx-auto shadow-md`}>
                      <metric.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-700 mb-6">
                    {metric.title}
                  </h3>
                  
                  <div className="mb-6">
                    <motion.div
                      className={`text-8xl md:text-9xl font-black ${getColorClasses(metric.color).text} leading-none`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.2) + 0.5 }}
                    >
                      <AnimatedCounter 
                        end={metric.value} 
                        suffix={metric.suffix}
                        duration={2000 + (index * 200)}
                      />
                    </motion.div>
                  </div>
                  
                  <p className="text-lg font-bold text-gray-900 mb-6">
                    {metric.description}
                  </p>

                  <div className="space-y-3">
                    {metric.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-center gap-3 text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + 0.8 + (detailIndex * 0.1) }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        {/* Enhanced Benefits Grid */}
        <RevealWrapper>
                      <div className="mb-10">
            <motion.h3
              className="text-2xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Teams Choose This Approach
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${benefit.bgColor} border-2 ${benefit.borderColor} rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <div className="mb-4">
                      <div className={`w-16 h-16 ${benefit.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-base font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Enhanced Success Story */}
        <RevealWrapper>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-4 border-green-300 rounded-xl p-8 md:p-12 text-center shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
                <span className="text-green-700 font-bold text-sm">✨ SUCCESS STORY</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Real Results from Real Teams
                </h3>
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 italic font-medium">
                "After implementing this template, our team went from inconsistent AI suggestions 
                to production-ready code in minutes. Our junior developers now write senior-level code, 
                and our seniors focus on architecture instead of code reviews."
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700">
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">50+ Development Teams</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">1000+ Projects Shipped</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">99% Developer Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default OutcomeSection;