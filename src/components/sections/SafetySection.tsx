import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Lock, 
  Zap, 
  CheckCircle,
  XCircle,

  Rocket,

  FileText
} from 'lucide-react';
import { RevealWrapper } from '../core';
import CodeBlock from '../ui/CodeBlock';

const SafetySection: React.FC = () => {
  const safetyFeatures = [
    {
      icon: Eye,
      title: 'Hallucination Prevention',
      description: 'AI verifies imports and APIs exist before suggesting them',
      color: 'blue'
    },
    {
      icon: Lock,
      title: 'Security Enforcement',
      description: 'Your security patterns baked into every suggestion',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Performance Built-In',
      description: 'Proper memoization and optimization from the start',
      color: 'orange'
    }
  ];

  const warningExamples = [
    {
      type: 'error',
      icon: XCircle,
      title: 'Non-existent API',
      code: 'React.useLatestValue()',
      message: 'This hook does not exist in React'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Limited Support',
      code: 'Array.prototype.findLast()',
      message: 'Not available in all environments'
    },
    {
      type: 'error',
      icon: XCircle,
      title: 'Imaginary Method',
      code: 'NextJS.magicServerFunction()',
      message: 'This is not a real Next.js API'
    }
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealWrapper>
                      <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                AI Safety{' '}
                <span className="text-orange-600">System</span>
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Preventing Hallucinations & Enforcing Best Practices
            </p>
          </div>
        </RevealWrapper>

        {/* Safety Features Grid */}
        <RevealWrapper>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {safetyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center shadow-lg ${
                    feature.color === 'blue' ? 'bg-blue-600' :
                    feature.color === 'green' ? 'bg-green-600' :
                    'bg-orange-600'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Warning Examples */}
        <RevealWrapper>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-red-500">⚠️</span> Common AI Hallucinations
              </h3>
              <p className="text-gray-600 text-base">
                These don't exist but AI might suggest them
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {warningExamples.map((example) => (
                <div key={example.title} className={`bg-white border border-gray-200 rounded-xl p-6 border-l-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  example.type === 'error' 
                    ? 'border-l-red-500' 
                    : 'border-l-yellow-500'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      example.type === 'error' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      <example.icon className={`w-6 h-6 ${
                        example.type === 'error' ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        {example.title}
                      </h4>
                      <code className={`text-sm px-3 py-2 rounded font-mono ${
                        example.type === 'error' 
                          ? 'bg-red-50 text-red-700' 
                          : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {example.code}
                      </code>
                      <p className="text-gray-600 text-sm mt-3 font-medium">
                        {example.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <CodeBlock
                code={`// ❌ These don't exist but AI might suggest them:
React.useLatestValue()           // Not a real hook
Array.prototype.findLast()       // Not in all environments  
NextJS.magicServerFunction()     // Imaginary API

// ✅ Template teaches AI to verify first:
// - Check official documentation
// - Verify in node_modules
// - Test in small chunks`}
                language="javascript"
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-inner font-mono text-sm leading-relaxed"
              />
            </div>
          </div>
        </RevealWrapper>

        {/* Context7 Integration */}
        <RevealWrapper>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-4">
                  <span className="text-purple-700 font-bold text-sm">ESSENTIAL FEATURE</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Context7: Real-time Documentation
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The biggest source of AI hallucinations? <strong className="text-red-600">Outdated documentation.</strong> 
                  Context7 solves this by providing real-time, version-specific docs directly to your AI.
                </p>
                
                <div className="mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-inner">
                    <CodeBlock
                      code={`# .context7.yaml
libraries:
  - id: /react/docs
    version: 19.0.0
    topics: ["hooks", "components", "server-components"]
  - id: /nextjs/docs  
    version: 15.0.0
    topics: ["app-router", "api-routes", "middleware"]`}
                      language="yaml"
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm leading-relaxed"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 border-2 border-red-200 border-l-8 border-l-red-500 rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <h4 className="font-bold text-gray-900">Without Context7</h4>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      AI uses training data from 2023, suggests deprecated APIs
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border-2 border-green-200 border-l-8 border-l-green-500 rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h4 className="font-bold text-gray-900">With Context7</h4>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      AI has latest docs, suggests current best practices
                    </p>
                  </div>
                </div>

                <a
                  href="https://context7.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 text-lg"
                >
                  <FileText className="w-5 h-5" />
                  Learn more at context7.com
                </a>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default SafetySection;