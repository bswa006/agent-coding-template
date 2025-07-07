import React from 'react';
import { ArrowRight, Code, Shield, Zap, GitBranch } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our latest template v10.0{' '}
              <a href="#" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI Agent Template
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Missing Manual for AI-Assisted Development. Transform your AI assistant from a generic code generator into a{' '}
            <span className="font-semibold text-gray-900">team member who knows your codebase inside out</span>.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#start"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </a>
            <a href="#components" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {[
              { icon: Zap, name: 'Development Speed', value: '5-10X', description: 'Faster development' },
              { icon: Shield, name: 'Security Issues', value: '84%', description: 'Fewer vulnerabilities' },
              { icon: Code, name: 'Test Coverage', value: '53%', description: 'Better coverage' },
              { icon: GitBranch, name: 'Token Usage', value: '30%', description: 'Fewer tokens' },
            ].map((stat) => (
              <div key={stat.name} className="flex flex-col items-center text-center">
                <div className="rounded-lg bg-blue-600/10 p-3 ring-1 ring-blue-600/20">
                  <stat.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <dt className="mt-4 text-base font-semibold leading-7 text-gray-900">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-600">{stat.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;