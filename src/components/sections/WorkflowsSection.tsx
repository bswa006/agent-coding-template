import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Workflow, 
  Plus, 
  Bug, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Code,
  FileText,
  Shield,
  Zap,
  User,
  Settings,
  GitBranch,
  PlayCircle
} from 'lucide-react';
import { RevealWrapper } from '../core';

const WorkflowsSection: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const workflows = [
    {
      id: 'feature',
      title: 'New Feature Development',
      icon: Plus,
      color: 'blue',
      description: 'Building new features with AI assistance',
      prompt: 'Create a payment processing module following our patterns',
      steps: [
        { 
          icon: FileText, 
          title: 'AI reads context', 
          description: 'CODEBASE-CONTEXT.md + /services/README.md',
          color: 'blue'
        },
        { 
          icon: Code, 
          title: 'Generates module', 
          description: 'Complete module with your exact patterns',
          color: 'green'
        },
        { 
          icon: Settings, 
          title: 'Correct structure', 
          description: 'Proper service architecture',
          color: 'blue'
        },
        { 
          icon: Shield, 
          title: 'Error handling', 
          description: 'Your validation approach',
          color: 'orange'
        },
        { 
          icon: CheckCircle, 
          title: 'Test patterns', 
          description: 'Matching test coverage',
          color: 'green'
        }
      ]
    },
    {
      id: 'bugfix',
      title: 'Bug Fixing',
      icon: Bug,
      color: 'red',
      description: 'Intelligent debugging with context',
      prompt: 'Fix the user profile loading issue',
      steps: [
        { 
          icon: Eye, 
          title: 'Reads patterns', 
          description: 'Your error patterns + state management rules',
          color: 'blue'
        },
        { 
          icon: User, 
          title: 'Understands context', 
          description: 'How you handle loading states specifically',
          color: 'orange'
        },
        { 
          icon: CheckCircle, 
          title: 'Provides fix', 
          description: 'Solution that matches your codebase style',
          color: 'green'
        }
      ]
    },
    {
      id: 'review',
      title: 'Code Reviews',
      icon: GitBranch,
      color: 'purple',
      description: 'AI-powered code review with your standards',
      prompt: 'Review this PR for compliance',
      steps: [
        { 
          icon: Settings, 
          title: 'Naming conventions', 
          description: 'Checks against your style guide',
          color: 'blue'
        },
        { 
          icon: FileText, 
          title: 'Architecture', 
          description: 'Validates architectural decisions',
          color: 'orange'
        },
        { 
          icon: Zap, 
          title: 'Performance', 
          description: 'Reviews against your requirements',
          color: 'green'
        },
        { 
          icon: Shield, 
          title: 'Security', 
          description: 'Enforces your security standards',
          color: 'red'
        }
      ]
    }
  ];

  const currentWorkflow = workflows[activeWorkflow];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border') => {
    const colors = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-500' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500' },
    };
    return colors[color as keyof typeof colors]?.[variant] || colors.blue[variant];
  };

  return (
    <section id="workflows" className="bg-white py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealWrapper>
                      <div className="text-center mb-15">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Real Development{' '}
                <span className="text-blue-600">Workflows</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How Teams Actually Use This Template
            </p>
          </div>
        </RevealWrapper>

        {/* Color Legend */}
        <RevealWrapper>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step Types</h3>
              <p className="text-sm text-gray-600">Each step is color-coded by function</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { color: 'blue', label: 'Context Reading', icon: FileText },
                { color: 'green', label: 'Code Generation', icon: Code },
                { color: 'orange', label: 'Validation', icon: Shield },
                { color: 'red', label: 'Security Check', icon: Shield },
                { color: 'purple', label: 'Architecture', icon: Settings }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full ${getColorClasses(item.color, 'bg')}`} />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Workflow Selector */}
        <RevealWrapper>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-16">
            {workflows.map((workflow, index) => (
              <motion.button
                key={workflow.id}
                onClick={() => setActiveWorkflow(index)}
                className={`relative group p-8 rounded-xl transition-all duration-300 ${
                  activeWorkflow === index 
                    ? `bg-white border-4 ${getColorClasses(workflow.color, 'border')} shadow-2xl scale-105` 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
                whileHover={{ scale: activeWorkflow === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                    activeWorkflow === index ? getColorClasses(workflow.color, 'bg') : 'bg-gray-100'
                  }`}>
                    <workflow.icon className={`w-8 h-8 ${
                      activeWorkflow === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`font-bold text-lg ${
                      activeWorkflow === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {workflow.title}
                    </h3>
                    <p className="text-sm text-gray-500 max-w-48">
                      {workflow.description}
                    </p>
                  </div>
                </div>
                {activeWorkflow === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </RevealWrapper>

        {/* Active Workflow Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
                          <div className={`bg-white border border-gray-200 border-l-8 ${getColorClasses(currentWorkflow.color, 'border')} rounded-lg p-6 md:p-8 mb-8 shadow-xl`}>
                             <div className="text-center mb-6">
                                  <div className="flex items-center justify-center gap-3 mb-4">
                                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-lg ${getColorClasses(currentWorkflow.color, 'bg')}`}>
                                          <currentWorkflow.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {currentWorkflow.title}
                  </h3>
                </div>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
                  <PlayCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-mono text-sm">
                    "{currentWorkflow.prompt}"
                  </span>
                </div>
              </div>

              {/* Simplified Workflow Steps */}
              <div className="space-y-6">
                {currentWorkflow.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: stepIndex * 0.2 }}
                  >
                    {/* Step Number */}
                    <div className={`w-12 h-12 rounded-full ${getColorClasses(currentWorkflow.color, 'bg')} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                      {stepIndex + 1}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(step.color, 'bg')}`}>
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow (except for last step) */}
                    {stepIndex < currentWorkflow.steps.length - 1 && (
                      <div className="flex-shrink-0 ml-2">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Benefits Summary */}
        <RevealWrapper>
          <div className="bg-white border border-gray-200 border-l-8 border-l-green-500 rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why This Works
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              By providing AI with your specific patterns, conventions, and architectural decisions, 
              you get code that looks like your team wrote it. No more generic suggestions that don't 
              fit your codebase.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default WorkflowsSection;