import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Shield, 
  FileText, 
  Rocket, 
  Target,
  Building
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { 
  RevealWrapper
} from '../core';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

const features: Feature[] = [
  {
    icon: Settings,
    title: 'Context Management',
    description: 'AI remembers your patterns, conventions, and architecture decisions for consistent code generation',
    metric: '30% fewer tokens'
  },
  {
    icon: Zap,
    title: 'Fast Generation',
    description: 'Skip the back-and-forth explanations every time with pre-configured patterns',
    metric: '5-10x faster'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security patterns and vulnerability prevention for enterprise-grade protection',
    metric: '84% fewer issues'
  },
  {
    icon: FileText,
    title: 'Type Safety',
    description: 'TypeScript interfaces and proper typing from the start with comprehensive validation',
    metric: '100% type safe'
  },
  {
    icon: Rocket,
    title: 'Team Alignment',
    description: 'Everyone uses the same patterns and conventions across the entire development team',
    metric: '95% consistency'
  },
  {
    icon: Target,
    title: 'Quality Gates',
    description: 'Automated testing and coverage requirements ensure high-quality code delivery',
    metric: '53% better coverage'
  }
];

const FeaturesSection: React.FC = () => {

  return (
    <section id="features" className="section relative overflow-hidden py-8">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-surface-light)] to-[var(--color-background)]"></div>
      
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <RevealWrapper animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
              <Settings className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Core Features</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              <span className="text-[var(--color-text)]">Built for Real</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--hover-primary)] mt-1">
                Development Teams
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-3xl mx-auto font-light">
              Research-backed features that{' '}
              <span className="font-semibold text-[var(--accent-primary)]">actually work</span>
              {' '}in production environments
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper animation="slideUp" delay={0.4}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--hover-primary)] flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-100 rounded-full mb-2">
                        <span className="text-xs font-medium text-green-700">{feature.metric}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper animation="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-[var(--color-border)] max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--hover-primary)]">
                  Workflow
                </span>
              </h3>
              
              <p className="text-base text-[var(--color-text-muted)] max-w-2xl mx-auto">
                Join 1000+ teams using PROJECT-TEMPLATE.md to accelerate development with AI assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Building, 
                  title: 'Enterprise Ready', 
                  description: 'Battle-tested patterns for production environments',
                  color: 'blue'
                },
                { 
                  icon: Shield, 
                  title: 'Security First', 
                  description: 'Built-in vulnerability prevention and secure patterns',
                  color: 'green'
                },
                { 
                  icon: Rocket, 
                  title: 'Fast Deployment', 
                  description: 'From development to production in minutes',
                  color: 'purple'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    item.color === 'blue' ? 'bg-blue-50 border border-blue-100' :
                    item.color === 'green' ? 'bg-green-50 border border-green-100' :
                    'bg-purple-50 border border-purple-100'
                  }`}>
                    <item.icon className={`w-6 h-6 ${
                      item.color === 'blue' ? 'text-blue-600' :
                      item.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">{item.title}</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default FeaturesSection;