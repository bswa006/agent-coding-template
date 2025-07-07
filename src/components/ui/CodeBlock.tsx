import React, { useState } from 'react';
import type { CodeExample } from '../../types/index';

interface CodeBlockProps extends Partial<CodeExample> {
  className?: string;
  dataLabel?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  language = 'typescript', 
  code = '', 
  title,
  dataLabel,
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getLanguageClass = () => {
    const languageMap: { [key: string]: string } = {
      typescript: 'language-typescript',
      javascript: 'language-javascript',
      python: 'language-python',
      bash: 'language-bash',
      json: 'language-json'
    };
    return languageMap[language] || 'language-text';
  };

  return (
    <div className={`relative ${className}`}>
      <div className="bg-[var(--color-surface-light)] rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
        {dataLabel && (
          <div className="px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
            <span className="text-xs font-medium text-[var(--color-text-subtle)] uppercase tracking-wider">
              {dataLabel}
            </span>
          </div>
        )}
        <pre className="p-6 overflow-x-auto bg-[var(--color-surface-light)]">
          <code className="text-sm text-[var(--color-text)] leading-relaxed font-mono">
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-[var(--color-surface)] hover:bg-[var(--surface-hover)] rounded-md transition-all duration-200 border border-[var(--color-border)] opacity-90 hover:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;