import React, { useState } from 'react';
import { 
  Bot, 
  AlertTriangle, 
  Cpu,
  Wrench,
  Shield,
  Building,
  Sparkles,
  Target,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { 
  RevealWrapper
} from '../core';
import { motion, AnimatePresence } from 'framer-motion';

const ChallengeSection: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState<'before' | 'after'>('before');

  const beforeCode = `// What AI generates without context
function UserComponent() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser);
  }, []);
  
  return <div>{user?.name}</div>;
}`;

  const afterCode = `// What AI generates WITH PROJECT-TEMPLATE.md
import { useAuthQuery } from '@/hooks/useAuthQuery';
import { UserCard } from '@/components/ui/UserCard';
import type { User } from '@/types/auth';

export const UserProfile: React.FC = () => {
  const { data: user, isLoading, error } = useAuthQuery<User>({
    endpoint: '/users/profile',
    requireAuth: true
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorBoundary error={error} />;
  
  return (
    <UserCard 
      user={user} 
      variant="profile"
      className="max-w-md mx-auto"
    />
  );
};`;

  const problemPoints = [
    { icon: Cpu, title: 'Generic Patterns', description: 'Uses basic React patterns instead of your conventions' },
    { icon: Wrench, title: 'No Type Safety', description: 'Missing TypeScript interfaces and proper typing' },
    { icon: AlertTriangle, title: 'No Error Handling', description: 'Lacks your error boundary and loading patterns' },
    { icon: Building, title: 'Wrong Architecture', description: "Doesn't follow your component structure" }
  ];

  const solutionPoints = [
    { icon: Sparkles, title: 'Team Conventions', description: 'Follows your established patterns and naming' },
    { icon: Shield, title: 'Type-Safe', description: 'Uses your TypeScript interfaces and types' },
    { icon: Target, title: 'Proper Error Handling', description: 'Implements your error boundary patterns' },
    { icon: Building, title: 'Correct Architecture', description: 'Matches your component structure exactly' }
  ];

  return (
    <section id="challenge" className="bg-white py-8 relative">
      {/* Clean background */}
      
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper animation="fadeIn" delay={0.2}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-8">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">The Problem</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-gray-900">
              AI Doesn't Know Your{' '}
              <span className="text-red-500">Codebase</span>
            </h2>
            
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Every conversation starts from{' '}
              <span className="font-semibold text-gray-900">zero context</span>
            </p>
          </div>
        </RevealWrapper>

        {/* Visual Flow */}
        <RevealWrapper animation="fadeIn" delay={0.4}>
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              {/* Input Card */}
              <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <Bot className="w-8 h-8 text-gray-500" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Input</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">What AI Sees</h3>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <code className="text-sm text-gray-700 font-mono">
                    "Create a user component"
                  </code>
                </div>
                <p className="text-sm text-gray-500 mt-4">Minimal context provided</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Output Card */}
              <div className="bg-white rounded-lg p-3 border-l-4 border-l-red-500 border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <span className="text-xs font-medium text-red-600 uppercase tracking-wider">Output</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Generic Result</h3>
                <div className="space-y-3">
                  {['Basic React patterns', 'No type safety', 'Wrong architecture', 'Missing conventions'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                    Doesn't fit your codebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Code Comparison */}
        <RevealWrapper animation="fadeIn" delay={0.6}>
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-3">
                See the Difference in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--hover-primary)]">
                  Real Code
                </span>
              </h3>
                              <p className="text-sm text-[var(--color-text-muted)]">
                Compare AI output with and without context
              </p>
            </div>
            
            {/* Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-1 shadow-lg border border-[var(--color-border)]">
                <button
                  onClick={() => setActiveComparison('before')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeComparison === 'before'
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  Without Template
                </button>
                <button
                  onClick={() => setActiveComparison('after')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeComparison === 'after'
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  With Template
                </button>
              </div>
            </div>

            {/* Code Display */}
            <div className="max-w-6xl mx-auto mb-6">
              <AnimatePresence mode="wait">
                {activeComparison === 'before' ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl border-4 border-red-500 shadow-xl"
                  >
                                          <div className="px-4 py-3 bg-red-50 border-b border-red-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-red-900">Generic AI Output</h4>
                            <p className="text-sm text-red-700 mt-0.5">No context • Basic patterns</p>
                          </div>
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                      </div>
                      <div className="p-6">
                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 font-mono text-sm leading-relaxed shadow-inner">
                        <pre className="overflow-x-auto whitespace-pre text-gray-800"><code>{beforeCode}</code></pre>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl border-4 border-green-500 shadow-xl"
                  >
                                          <div className="px-4 py-3 bg-green-50 border-b border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-green-900">Context-Aware Output</h4>
                            <p className="text-sm text-green-700 mt-0.5">Full context • Team patterns</p>
                          </div>
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="p-6">
                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 font-mono text-sm leading-relaxed shadow-inner">
                        <pre className="overflow-x-auto whitespace-pre text-gray-800"><code>{afterCode}</code></pre>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </RevealWrapper>

        {/* Comparison Grid */}
        <RevealWrapper animation="fadeIn" delay={0.8}>
          <div className="relative">
            {/* Section separator */}
            <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Without Context */}
            <div className="relative">
              <div className="text-center mb-8">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4 border-2 border-red-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-2">Without Context</h3>
                <p className="text-[var(--color-text-muted)] text-base">What goes wrong</p>
              </div>
              
              <div className="space-y-8">
                {problemPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[var(--color-text)] mb-1 text-base">{point.title}</h4>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* With Template */}
            <div className="relative">
              <div className="text-center mb-8">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4 border-2 border-green-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-2">With Template</h3>
                <p className="text-[var(--color-text-muted)] text-base">Perfect alignment</p>
              </div>
              
              <div className="space-y-8">
                {solutionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100"
                    whileHover={{ x: -4 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[var(--color-text)] mb-1 text-base">{point.title}</h4>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ChallengeSection;