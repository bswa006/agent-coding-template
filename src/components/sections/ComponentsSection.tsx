import React from 'react';
import { FileText, Folder, CheckCircle, Zap, Code, Database, Settings } from 'lucide-react';
import { RevealWrapper } from '../core';
import CodeBlock from '../ui/CodeBlock';

const ComponentsSection: React.FC = () => {
  const components = [
    {
      icon: Database,
      title: 'CODEBASE-CONTEXT.md',
      subtitle: 'Your AI\'s Knowledge Base',
      description: 'The foundation that transforms generic AI into your team\'s expert assistant',
      code: `Tech Stack: Next.js 15, TypeScript, PostgreSQL
Patterns: App Router, Server Components, Zod validation
Constraints: No client-side secrets, typed everything
Examples: Good vs bad code patterns`,
      language: 'javascript',
      accent: 'blue'
    },
    {
      icon: FileText,
      title: 'Architecture Decision Records',
      subtitle: 'ADRs with AI Instructions',
      description: 'Document decisions with specific AI generation constraints',
      code: `Decision: Use REST over GraphQL
AI Instructions: Always use plural endpoints
Pattern: GET /users, not GET /user
Never: Expose internal IDs in API responses`,
      language: 'javascript',
      accent: 'purple'
    },
    {
      icon: Folder,
      title: 'Directory README Files',
      subtitle: 'Context at Every Level',
      description: 'Granular guidance for AI in every part of your codebase',
      code: `components/auth/README.md
- Purpose: Authentication UI components
- Use: useAuth() hook for state management
- Never: Store tokens in localStorage
- Pattern: <AuthGuard> wrapper for protected routes`,
      language: 'markdown',
      accent: 'green'
    },
    {
      icon: CheckCircle,
      title: 'DOS and DON\'TS Section',
      subtitle: 'Real Examples That Work',
      description: 'Specific examples of what works and what breaks in your codebase',
      code: `✅ DO: Use import type { User } from './types'
❌ DON'T: Use import { User } from './types'

✅ DO: Handle errors with try-catch
❌ DON'T: Ignore Promise rejections`,
      language: 'typescript',
      accent: 'yellow'
    },
    {
      icon: Zap,
      title: 'Context7 Integration',
      subtitle: 'Always Up-to-Date',
      description: 'Keeps your AI current with latest library documentation',
      code: `# .context7.yaml
libraries:
  - id: /react/docs
    version: 19.0.0  # AI gets React 19 docs, not old versions
  - id: /nextjs/docs
    version: 15.0.0  # Latest App Router patterns
    topics: ["app-router", "server-components"]`,
      language: 'yaml',
      accent: 'pink',
      badge: 'ESSENTIAL'
    }
  ];

  return (
    <section id="components" className="bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-6">
                  <div className="text-center mb-6">
          <RevealWrapper animation="slideUp" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">
              The Core{' '}
              <span className="text-blue-600">Components</span>
            </h2>
          </RevealWrapper>
          
          <RevealWrapper animation="fadeIn" delay={0.4}>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              What's Inside Your AI Agent Template
            </p>
          </RevealWrapper>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {components.map((component, index) => (
              <RevealWrapper key={index} animation="slideUp" delay={0.2 + index * 0.1}>
                <div className="bg-white border border-gray-200 border-l-4 border-l-blue-500 rounded-lg p-3 hover:border-l-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <component.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold text-gray-900">
                          {component.title}
                        </h3>
                        {component.badge && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                            {component.badge}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-blue-600 font-medium mb-2 text-sm">{component.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{component.description}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <CodeBlock
                      code={component.code}
                      language={component.language}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-inner font-mono text-sm leading-relaxed"
                    />
                  </div>
                  
                  {component.title === 'Context7 Integration' && (
                    <div className="mt-6 ml-22 space-y-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Prevents 90% of version-related hallucinations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Settings className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Updates automatically when libraries release new versions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Code className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Works seamlessly with Cursor and other AI tools</span>
                      </div>
                    </div>
                  )}
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;