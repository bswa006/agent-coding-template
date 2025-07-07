import React from 'react';
import { Rocket, Code, BookOpen, Zap } from 'lucide-react';
import { RevealWrapper } from '../core';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-white py-8 relative">
      {/* Clean, minimal background */}

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center">
          <RevealWrapper animation="fadeIn" delay={0.2}>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-gray-900 tracking-tight">
              AI Agent{' '}
              <span className="text-blue-600">Template</span>
            </h1>
          </RevealWrapper>

          <RevealWrapper animation="fadeIn" delay={0.4}>
            <h2 className="text-sm md:text-base font-light mb-3 text-gray-600 max-w-2xl mx-auto">
              The Missing Manual for{' '}
              <span className="font-semibold text-gray-900">AI-Assisted Development</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper animation="fadeIn" delay={0.6}>
            <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              Transform your AI assistant from a generic code generator into a{' '}
              <span className="font-semibold text-blue-600">team member who knows your codebase inside out</span>
              . Get 53% better test coverage and 30% fewer prompt tokens with our research-backed template.
            </p>
          </RevealWrapper>

          <RevealWrapper animation="fadeIn" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              <a
                href="#start"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                <Rocket className="w-5 h-5" />
                Get Started Now
              </a>

              <a
                href="#components"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-md text-sm"
              >
                <BookOpen className="w-5 h-5" />
                Explore Components
              </a>
            </div>
          </RevealWrapper>

          <RevealWrapper animation="fadeIn" delay={1.0}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Zap, label: '5-10X Faster', metric: '5-10X', suffix: 'Faster' },
                { icon: Code, label: '84% Fewer Security Issues', metric: '84%', suffix: 'Fewer Issues' },
                { icon: BookOpen, label: '53% Better Coverage', metric: '53%', suffix: 'Better Coverage' },
                { icon: Rocket, label: '30% Fewer Tokens', metric: '30%', suffix: 'Fewer Tokens' }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {item.suffix}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;