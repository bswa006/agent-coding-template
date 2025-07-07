import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Download, 
  FileText, 
  Settings, 
  Database, 
  Share2,
  Clock,
  CheckCircle,
  ArrowRight,
  Code,
  Terminal,
  Zap,
  Target,
  PlayCircle,
  ExternalLink
} from 'lucide-react';
import { RevealWrapper } from '../core';
import CodeBlock from '../ui/CodeBlock';

const ImplementationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const implementationSteps = [
    {
      id: 'copy',
      title: 'Copy Template',
      duration: '2 min',
      icon: Download,
      color: 'blue',
      description: 'Download and customize the PROJECT-TEMPLATE.md for your project',
      code: `curl -O https://raw.githubusercontent.com/your-repo/ai-agent-template/main/PROJECT-TEMPLATE.md

# Or simply copy-paste the template content
# Customize for your specific project needs`,
      language: 'bash' as const,
      tips: [
        'Keep version numbers up to date',
        'Replace placeholder values with your actual stack',
        'Add your specific project requirements'
      ]
    },
    {
      id: 'patterns',
      title: 'Fill Your Patterns',
      duration: '5 min',
      icon: Settings,
      color: 'orange',
      description: 'Document your team\'s coding patterns and conventions',
      code: `# CODEBASE-CONTEXT.md
## Project Vision
[Your project description and goals]

## Tech Stack & Versions
- React v19.1.0
- TypeScript v5.8.3
- Next.js v15.0.0

## Naming Conventions
- Components: PascalCase
- Hooks: useVerbNoun
- Files: kebab-case

## Implementation Constraints for AI
- NEVER use class components
- ALWAYS validate props with TypeScript
- NEVER skip error handling`,
      language: 'markdown' as const,
      tips: [
        'Be specific about your "never do this" rules',
        'Include version numbers for all dependencies',
        'Document your error handling patterns'
      ]
    },
    {
      id: 'context',
      title: 'Create Context Files',
      duration: '3 min',
      icon: FileText,
      color: 'green',
      description: 'Set up directory-level context files for better AI understanding',
      code: `# src/components/README.md
## Purpose
Reusable UI components following our design system

## AI Generation Notes
- Always use React.FC for component types
- Import types with 'import type' syntax
- Follow existing component patterns

# src/hooks/README.md
## Purpose
Custom React hooks for shared logic

## AI Generation Notes
- Prefix all hooks with 'use'
- Always handle loading and error states
- Include proper TypeScript types`,
      language: 'markdown' as const,
      tips: [
        'Add README.md to each major directory',
        'Include AI-specific constraints',
        'Document your architectural decisions'
      ]
    },
    {
      id: 'context7',
      title: 'Setup Context7',
      duration: '3 min',
      icon: Database,
      color: 'purple',
      description: 'Configure real-time documentation for your AI assistant',
      code: `# .context7.yaml
libraries:
  - id: /react/docs
    version: 19.1.0
    topics: ["hooks", "components", "server-components"]
  - id: /nextjs/docs  
    version: 15.0.0
    topics: ["app-router", "api-routes", "middleware"]
  - id: /typescript/docs
    version: 5.8.3
    topics: ["types", "interfaces", "generics"]`,
      language: 'yaml' as const,
      tips: [
        'Keep library versions synchronized',
        'Focus on topics you use most',
        'Update when you upgrade dependencies'
      ]
    },
    {
      id: 'share',
      title: 'Share & Collaborate',
      duration: '2 min',
      icon: Share2,
      color: 'blue',
      description: 'Commit your context files and share with your team',
      code: `git add CODEBASE-CONTEXT.md .context7.yaml
git add src/*/README.md
git commit -m "feat: add AI context files for better code generation"
git push origin main

# Share with your team
echo "✅ AI-powered development is now active!"
echo "📚 Context files will help AI understand our patterns"
echo "🚀 Start building with consistent, high-quality code"`,
      language: 'bash' as const,
      tips: [
        'Review context files regularly',
        'Update when patterns change',
        'Train new team members on the system'
      ]
    }
  ];

  const toggleStepCompletion = (stepIndex: number) => {
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(i => i !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const currentStep = implementationSteps[activeStep];
  const totalDuration = implementationSteps.reduce((total, step) => {
    const minutes = parseInt(step.duration.split(' ')[0]);
    return total + minutes;
  }, 0);

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border') => {
    const colors = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500' },
    };
    return colors[color as keyof typeof colors]?.[variant] || colors.blue[variant];
  };

  return (
    <section id="start" className="bg-white py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealWrapper>
                      <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Start in{' '}
                <span className="text-blue-600">{totalDuration} Minutes</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five Steps to AI-Powered Development
            </p>

            <div className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-50 border-2 border-green-200 rounded-full shadow-md">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">
                {completedSteps.length}/{implementationSteps.length} steps completed
              </span>
            </div>
          </div>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Simplified Timeline */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-white" />
              </div>
              Implementation Timeline
            </h3>

            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? `bg-white border-4 ${getColorClasses(step.color, 'border')} shadow-xl scale-105`
                      : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={{ scale: activeStep === index ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                        completedSteps.includes(index)
                          ? 'bg-green-500'
                          : activeStep === index
                          ? getColorClasses(step.color, 'bg')
                          : 'bg-gray-200'
                      }`}>
                        {completedSteps.includes(index) ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          <step.icon className={`w-8 h-8 ${
                            activeStep === index ? 'text-white' : 'text-gray-600'
                          }`} />
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className={`font-bold text-lg ${
                          activeStep === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h4>
                        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStepCompletion(index);
                      }}
                      className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                        completedSteps.includes(index)
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-400 hover:bg-green-100 hover:text-green-600'
                      }`}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </button>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-white border border-gray-200 border-l-8 ${getColorClasses(currentStep.color, 'border')} rounded-lg p-6 shadow-xl`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${getColorClasses(currentStep.color, 'bg')}`}>
                      <currentStep.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {currentStep.title}
                      </h3>
                      <p className="text-gray-600">
                        {currentStep.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <CodeBlock
                      code={currentStep.code}
                      language={currentStep.language}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6 font-mono text-base leading-relaxed shadow-inner"
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {currentStep.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-gray-600">
                          <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Special Context7 Highlight */}
        <RevealWrapper>
          <div className="mt-20">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-4 border-purple-300 rounded-xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
                  <span className="text-purple-700 font-bold text-sm">🚀 GAME CHANGER</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Why Context7 is Essential
                  </h3>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
                  Without Context7, your AI uses <span className="text-red-600 font-semibold">outdated documentation</span> from its training data. 
                  With Context7, it gets <span className="text-green-600 font-semibold">real-time, version-specific docs</span> for all your libraries. 
                  This single step prevents <span className="text-blue-600 font-semibold">90% of version-related AI mistakes!</span>
                </p>

                <motion.a
                  href="https://context7.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Learn More at Context7.com
                </motion.a>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ImplementationSection;