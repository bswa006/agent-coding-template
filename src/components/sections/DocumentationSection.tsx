import React, { useState } from 'react';
import { 
  FileText, 
  Brain, 
  Wrench, 
  Workflow, 
  BarChart3,
  Target,
  MapPin,
  Ruler,
  Shield,
  Folder,
  Lightbulb,
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { 
  RevealWrapper,
  CodeBlock
} from '../core';

const DocumentationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'context', label: 'Context System', icon: Brain },
    { id: 'patterns', label: 'Code Patterns', icon: Wrench },
    { id: 'workflow', label: 'Workflow', icon: Workflow },
    { id: 'metrics', label: 'Success Metrics', icon: BarChart3 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <div className="prose max-w-none">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  What is PROJECT-TEMPLATE.md?
                </h3>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Think of it as a <span className="font-semibold text-blue-600">GPS for your AI assistant</span>. 
                Just like a GPS needs to know your destination and current location, AI needs to understand your 
                codebase's patterns, conventions, and constraints to generate useful code.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-md">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-3 text-gray-900 text-lg">Your Codebase Map</h4>
                  <p className="text-gray-600">Tells AI where everything lives and how it connects</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto shadow-md">
                      <Ruler className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-3 text-gray-900 text-lg">Your Coding Rules</h4>
                  <p className="text-gray-600">Ensures AI follows YOUR team's conventions</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-md">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-3 text-gray-900 text-lg">Your Safety Net</h4>
                  <p className="text-gray-600">Prevents AI from making dangerous mistakes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Folder className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Template Structure
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <CodeBlock
                  code={`PROJECT-TEMPLATE.md
├── 🚀 Quick Start (Get running in 3 steps)
├── 📋 Project Context (Your tech DNA)
├── 🏗️ Architecture (How pieces fit together)
├── 💻 Development (Day-to-day commands)
├── 🤖 AI-Assisted Development ⭐ (The magic happens here)
│   ├── CODEBASE-CONTEXT.md
│   ├── Directory READMEs
│   ├── Architecture Decision Records
│   └── DOS and DON'TS
├── 🧪 Testing & Quality (Keep standards high)
├── 🚀 Deployment (Ship with confidence)
└── 📊 Success Metrics (Measure improvement)`}
                  language="text"
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 font-mono text-base leading-relaxed"
                />
              </div>
            </div>
          </div>
        );

      case 'context':
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                The Context Management System
              </h3>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                <p className="text-lg font-semibold text-gray-900">Research Finding:</p>
              </div>
              <p className="text-xl text-gray-700">Teams using context files see 30% reduction in AI prompt tokens and 53% better test coverage!</p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">CODEBASE-CONTEXT.md - The Brain</h4>
                </div>
                <p className="text-gray-600 mb-4">This is your AI's knowledge base. It's like giving a new developer a perfect onboarding document.</p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <CodeBlock
                    code={`# CODEBASE-CONTEXT.md

## Project Vision
"We're building a modern e-commerce platform that prioritizes 
user experience and developer happiness"

## Tech Stack & Versions
- Next.js 15.0 (App Router)
- TypeScript 5.3 (strict mode)
- PostgreSQL 16 (with Prisma ORM)
- TailwindCSS 3.4

## Naming Conventions
✅ Components: PascalCase → UserProfile, ShoppingCart
✅ Hooks: useVerbNoun → useFetchProducts, useCartState  
✅ API routes: /plural-nouns → /api/users, /api/products
✅ Files: feature.type.ts → user.service.ts, cart.hooks.ts

## Our Golden Rules
🔒 NEVER store sensitive data in localStorage
🎯 ALWAYS use our custom useAPI() hook for fetching
✨ ALWAYS handle loading/error/empty states
🧪 ALWAYS write tests for new features`}
                    language="markdown"
                    className="bg-gray-50 border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Directory READMEs - Local Guides</h4>
                </div>
                <p className="text-gray-600 mb-4">Each major directory gets its own mini-guide. It's like having sticky notes on every folder!</p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <CodeBlock
                    code={`# components/checkout/README.md

## 🛒 Checkout Components

This directory handles the entire checkout flow.

### Components
- CheckoutForm - Main form with validation
- PaymentMethod - Payment selection UI  
- OrderSummary - Shows cart items & totals

### AI Instructions
⚠️ Payment processing uses Stripe - NEVER log card details
✅ All forms use react-hook-form + Zod validation
🎯 Follow our 3-step checkout pattern: Cart → Info → Payment`}
                    language="markdown"
                    className="bg-gray-50 border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Architecture Decision Records - The Why</h4>
                </div>
                <p className="text-gray-600 mb-4">Document your big decisions so AI understands the reasoning, not just the rules.</p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <CodeBlock
                    code={`# ADR-002: Use Server Components by Default

## Decision
Use React Server Components for all pages unless client 
interactivity is specifically needed.

## Context  
We need better SEO and faster initial page loads.

## Consequences for AI Code Generation
✅ Default to 'server component' unless useState/useEffect needed
✅ Data fetching happens in components, not useEffect
❌ Don't suggest client-side fetching for initial data
💡 Suggest 'use client' directive only when truly needed`}
                    language="markdown"
                    className="bg-gray-50 border border-gray-200"
                  />
                </div>
              </div>

              <div className="bg-white border border-gray-200 border-l-4 border-l-purple-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Context7 - Real-time Documentation</h4>
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-gray-600 mb-4">
                  The secret weapon against outdated AI suggestions. Context7 provides <strong>real-time, version-specific documentation</strong> to your AI assistant.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 border border-red-200 border-l-4 border-l-red-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <h5 className="font-semibold text-red-700">Without Context7</h5>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AI trained on React 16 docs</li>
                      <li>• Suggests deprecated patterns</li>
                      <li>• Uses old Next.js Pages Router</li>
                      <li>• Hallucintates removed APIs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 border-l-4 border-l-green-500 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h5 className="font-semibold text-green-700">With Context7</h5>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time React 19 docs</li>
                      <li>• Latest best practices</li>
                      <li>• Current App Router patterns</li>
                      <li>• Accurate API suggestions</li>
                    </ul>
                  </div>
                </div>

                <CodeBlock
                  code={`# .context7.yaml
libraries:
  - id: /react/docs
    version: 19.0.0
    topics: ["hooks", "server-components", "suspense"]
    
  - id: /nextjs/docs
    version: 15.0.0
    topics: ["app-router", "server-actions", "middleware"]
    
  - id: /typescript/docs
    version: 5.3.0
    topics: ["decorators", "satisfies", "const-type-params"]`}
                  language="yaml"
                  className="bg-gray-50 border border-gray-200"
                />
                
                <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-purple-600" />
                    <strong className="text-purple-700">Pro tip:</strong>
                  </div>
                  <p className="text-sm text-purple-600">
                    Context7 integrates seamlessly with Cursor. Just add the config file and your AI automatically gets current docs! 
                    Visit <a href="https://context7.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-purple-700 hover:text-purple-800">context7.com</a> to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'patterns':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">🔧 Smart Code Patterns</h3>
            
            <div className="bg-yellow-50 border border-yellow-200 border-l-4 border-l-yellow-500 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2 text-gray-900">
                <span className="text-2xl">⚡</span> The Power of Patterns
              </h4>
              <p className="text-gray-700">
                When AI knows your patterns, it writes code that looks like YOUR team wrote it, 
                not like a generic tutorial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-600">✅ DO Patterns (AI Learns These)</h4>
                <CodeBlock
                  code={`// ✅ Your Error Handling Pattern
export async function fetchUserData(id: string) {
  try {
    const data = await api.get(\`/users/\${id}\`);
    return { data, error: null };
  } catch (error) {
    logger.error('Failed to fetch user', { id, error });
    return { data: null, error: formatError(error) };
  }
}

// ✅ Your Component Pattern  
export function UserCard({ user }: UserCardProps) {
  const { theme } = useTheme();
  
  if (!user) return <EmptyState message="No user data" />;
  
  return (
    <Card className={cn('p-4', theme.card)}>
      <UserAvatar user={user} />
      <UserInfo user={user} />
    </Card>
  );
}

// ✅ Your Hook Pattern
export function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => userService.getById(userId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}`}
                  language="typescript"
                  className="bg-gray-50 border border-gray-200"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-600">❌ DON'T Patterns (AI Avoids These)</h4>
                <CodeBlock
                  code={`// ❌ Generic Tutorial Code
function getUser(id) {
  fetch('/api/user/' + id)  // Wrong endpoint format
    .then(res => res.json())
    .then(data => {
      // No error handling!
      setUser(data);
    });
}

// ❌ Hallucinated APIs
import { useSuperQuery } from 'react'; // Doesn't exist!
const data = Array.prototype.lastItem(); // Not real!

// ❌ Security Violations  
localStorage.setItem('token', userToken); // Exposed!
const query = \`SELECT * FROM users WHERE id = \${id}\`; // SQL injection!

// ❌ Wrong Patterns
class UserComponent extends React.Component { // We use functions!
  async componentDidMount() { // Outdated!
    this.state.user = await getUser(); // Direct mutation!
  }
}`}
                  language="typescript"
                  className="bg-gray-50 border border-gray-200"
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">🎯 Pattern Recognition in Action</h4>
              <p className="text-gray-700 mb-4">When you say "Create a product list", AI now knows:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use your <code className="bg-white px-2 py-0.5 rounded border border-gray-200">useQuery</code> pattern for data fetching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Follow your component structure with loading/error/empty states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use your service layer pattern, not direct API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Apply your naming conventions automatically</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'workflow':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">🔄 The AI Development Workflow</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 border-l-4 border-l-green-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">📝 Phase 1: Define the Task</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">Break it down</p>
                      <p className="text-gray-600 text-sm">Split "Build user dashboard" into: data model → API → UI → tests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Reference patterns</p>
                      <p className="text-gray-600 text-sm">"Create UserDashboard following our dashboard pattern in CODEBASE-CONTEXT.md"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">🤖 Phase 2: AI Generation</h4>
                <CodeBlock
                  code={`// Your prompt:
"Create a user profile component with edit functionality 
following our component patterns"

// AI reads your context and generates:
export function UserProfile({ userId }: UserProfileProps) {
  const { data: user, isLoading, error } = useUserData(userId);
  const { isEditing, toggle } = useEditMode();
  
  // Follows YOUR loading pattern
  if (isLoading) return <ProfileSkeleton />;
  
  // Follows YOUR error pattern  
  if (error) return <ErrorBoundary error={error} />;
  
  // Follows YOUR empty state pattern
  if (!user) return <EmptyProfile />;
  
  // Uses YOUR component structure
  return (
    <Card>
      <CardHeader>
        <UserAvatar user={user} size="large" />
        <EditButton onClick={toggle} />
      </CardHeader>
      <CardBody>
        {isEditing ? (
          <ProfileEditForm user={user} />
        ) : (
          <ProfileDisplay user={user} />
        )}
      </CardBody>
    </Card>
  );
}`}
                  language="typescript"
                  className="bg-white border border-gray-200"
                />
              </div>

              <div className="bg-purple-50 border border-purple-200 border-l-4 border-l-purple-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">✅ Phase 3: Validate & Iterate</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold mb-2 text-gray-900">🔍 AI Self-Checks</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• All imports exist in package.json ✓</li>
                      <li>• Follows naming conventions ✓</li>
                      <li>• Includes error handling ✓</li>
                      <li>• Has proper TypeScript types ✓</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold mb-2 text-gray-900">🧪 Your Checks</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Fits the user story ✓</li>
                      <li>• Matches design system ✓</li>
                      <li>• Performance acceptable ✓</li>
                      <li>• Tests pass ✓</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">📊 Success Metrics</h3>
            
            <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">🎯 What Good Looks Like</h4>
              <p className="text-gray-700">
                These metrics help you measure the impact of your AI agent template on development velocity and code quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-green-600">🚀 Velocity Metrics</h4>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Feature Development Time</h5>
                      <p className="text-sm text-gray-600">Time from story to production</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Before Template:</span>
                      <span className="font-semibold text-red-600">3-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">After Template:</span>
                      <span className="font-semibold text-green-600">1-2 days</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">60% faster 🎉</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Prompt Efficiency</h5>
                      <p className="text-sm text-gray-600">Tokens needed per task</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Generic Prompts:</span>
                      <span className="font-semibold text-red-600">800-1200 tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Context-Aware:</span>
                      <span className="font-semibold text-green-600">400-600 tokens</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">50% reduction 💰</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-blue-600">🎯 Quality Metrics</h4>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Test Coverage</h5>
                      <p className="text-sm text-gray-600">Automated test coverage</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Manual Coding:</span>
                      <span className="font-semibold text-red-600">45-60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">AI + Template:</span>
                      <span className="font-semibold text-green-600">70-85%</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">53% improvement 🧪</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Security Issues</h5>
                      <p className="text-sm text-gray-600">Vulnerabilities per feature</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Without Context:</span>
                      <span className="font-semibold text-red-600">2-3 issues</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">With Template:</span>
                      <span className="font-semibold text-green-600">0-1 issues</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">70% reduction 🔒</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="documentation" className="bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-6">
        <RevealWrapper>
                      <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Deep Dive:{' '}
                <span className="text-blue-600">Documentation</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the system that makes AI development teams 10x more effective
            </p>
          </div>
        </RevealWrapper>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-xl p-9 shadow-xl">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection; 