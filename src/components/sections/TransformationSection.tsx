import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle, Zap, Code2 } from 'lucide-react';
import { RevealWrapper } from '../core';
import CodeBlock from '../ui/CodeBlock';

const TransformationSection: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container max-w-7xl mx-auto px-6">
                  <div className="text-center mb-6">
          <RevealWrapper animation="slideUp" delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">
              How It Transforms{' '}
              <span className="text-blue-600">AI Assistance</span>
            </h2>
          </RevealWrapper>
          
          <RevealWrapper animation="fadeIn" delay={0.4}>
            <p className="text-sm text-gray-600">
              Before vs After: Night & Day Difference
            </p>
          </RevealWrapper>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <RevealWrapper animation="slideLeft" delay={0.6}>
              <div className="bg-white border-l-8 border-l-red-500 border border-gray-200 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border-2 border-red-200">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-red-700 font-bold text-sm">BEFORE Template</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Generic AI Code Generation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    AI generates generic patterns without understanding your codebase
                  </p>
                </div>
                
                <CodeBlock
                  code={`// AI generates generic React:
function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/user')  // Wrong endpoint
      .then(r => r.json())
      .then(setUsers);  // No error handling
  }, []);
  
  return users.map(u => <div>{u}</div>);  // No key
}`}
                  language="javascript"
                  className="bg-gray-50 border border-red-200 rounded-lg p-4 shadow-inner font-mono text-sm leading-relaxed"
                />
                
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium">Wrong API patterns</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium">No error handling</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium">Missing TypeScript types</span>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* After */}
            <RevealWrapper animation="slideRight" delay={0.8}>
              <div className="bg-white border-l-8 border-l-green-500 border border-gray-200 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border-2 border-green-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-bold text-sm">AFTER Template</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Context-Aware AI Generation
                  </h3>
                  <p className="text-gray-600">
                    AI follows YOUR patterns and coding standards perfectly
                  </p>
                </div>
                
                <CodeBlock
                  code={`// AI follows YOUR patterns:
export function UserList() {
  const { data: users, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getAll(),  // Service layer
  });
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorState error={error} />;
  if (!users?.length) return <EmptyState />;
  
  return users.map(user => (
    <UserCard key={user.id} user={user} />
  ));
}`}
                  language="javascript"
                  className="bg-gray-50 border border-green-200 rounded-lg p-4 shadow-inner font-mono text-sm leading-relaxed"
                />
                
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Proper error handling</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Service layer patterns</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Loading & empty states</span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Transformation Arrow */}
          <RevealWrapper animation="scaleIn" delay={1.0}>
            <div className="flex justify-center my-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-full shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
          </RevealWrapper>

          {/* Impact Stats */}
          <RevealWrapper animation="slideUp" delay={1.2}>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '53%', label: 'Better Test Coverage', icon: CheckCircle },
                  { value: '30%', label: 'Fewer Prompt Tokens', icon: Zap },
                  { value: '84%', label: 'Fewer Security Issues', icon: AlertTriangle },
                  { value: '5-10X', label: 'Faster Development', icon: Code2 }
                ].map((stat, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-md">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;