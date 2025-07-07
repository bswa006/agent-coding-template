import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard, NeonButton } from './index';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  maxHeight?: number;
  title?: string;
  filename?: string;
  highlightLines?: number[];
  glowEffect?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  className = '',
  showLineNumbers = true,
  showCopyButton = true,
  maxHeight,
  title,
  filename,
  highlightLines = [],
  glowEffect = false
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');

  // Simple syntax highlighting for common languages
  const highlightSyntax = (line: string, lineNumber: number) => {
    let highlighted = line;
    
    // Keywords
    const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'as', 'default', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'super', 'extends', 'implements', 'interface', 'type', 'enum', 'namespace', 'module', 'declare', 'public', 'private', 'protected', 'readonly', 'static'];
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-purple-400 font-medium">${keyword}</span>`);
    });

    // Strings
    highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$1$2$1</span>');
    
    // Comments
    highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="text-gray-500 italic">$&</span>');
    highlighted = highlighted.replace(/\/\/.*$/gm, '<span class="text-gray-500 italic">$&</span>');
    
    // Numbers
    highlighted = highlighted.replace(/\b\d+(\.\d+)?\b/g, '<span class="text-blue-400">$&</span>');
    
    // Functions
    highlighted = highlighted.replace(/(\w+)(\s*\()/g, '<span class="text-yellow-400">$1</span>$2');

    const isHighlighted = highlightLines.includes(lineNumber + 1);
    
    return (
      <div
        key={lineNumber}
        className={`flex ${isHighlighted ? 'bg-yellow-400/10 border-l-2 border-yellow-400' : ''}`}
      >
        {showLineNumbers && (
          <span className="text-gray-500 text-sm mr-4 select-none w-8 text-right flex-shrink-0">
            {lineNumber + 1}
          </span>
        )}
        <span
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
    );
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
              <GlassCard
          className={`
            overflow-hidden
            ${glowEffect ? 'neon-glow-blue' : ''}
            ${isHovered ? 'glass-heavy' : ''}
          `}
          variant="heavy"
        >
        {/* Header */}
        {(title || filename || showCopyButton) && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              {/* Terminal dots */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
              </div>
              
              {filename && (
                <span className="text-sm text-gray-400 font-mono">{filename}</span>
              )}
              
              {title && (
                <span className="text-sm text-gray-300 font-medium">{title}</span>
              )}
            </div>
            
            {showCopyButton && (
              <NeonButton
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="px-3 py-1 text-xs"
                color={copied ? "green" : "blue"}
              >
                {copied ? (
                  <span className="flex items-center gap-1">
                    ✓ Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    📋 Copy
                  </span>
                )}
              </NeonButton>
            )}
          </div>
        )}
        
        {/* Code content */}
        <div
          className={`
            p-4 font-mono text-sm leading-relaxed overflow-auto
            ${maxHeight ? `max-h-${maxHeight}` : ''}
          `}
          style={maxHeight ? { maxHeight: `${maxHeight}px` } : {}}
        >
          <pre className="text-gray-300">
            {lines.map((line, index) => highlightSyntax(line, index))}
          </pre>
        </div>
        
        {/* Language indicator */}
        {language && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-medium text-gray-400 bg-black/20 rounded">
              {language}
            </span>
          </div>
        )}
      </GlassCard>
      
      {/* Hover effect overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CodeBlock; 