import React from 'react';
import { Mail, BookOpen, MessageCircle, Download, FileText, Rocket } from 'lucide-react';
import { RevealWrapper } from '../core';

const CTASection: React.FC = () => {
  return (
    <section id="start" className="bg-gradient-to-br from-blue-600 to-blue-900 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
        <RevealWrapper animation="slideUp" delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Start Your AI Transformation{' '}
            <span className="text-blue-200">Today</span>
          </h2>
          
          <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform how your team works with AI. Start now.
          </p>
        </RevealWrapper>

        <RevealWrapper animation="slideUp" delay={0.4}>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              Get the Template
            </a>
            
            <a
              href="#documentation"
              className="inline-flex items-center gap-3 px-8 py-4 border-3 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl"
            >
              <FileText className="w-6 h-6" />
              View Documentation
            </a>
          </div>
        </RevealWrapper>

        <RevealWrapper animation="slideUp" delay={0.6}>
                     <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl max-w-5xl mx-auto p-6 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Resources & Support
              </h3>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/30 rounded-xl p-6 text-center hover:from-white/25 hover:to-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Questions</h4>
                <p className="text-blue-100 mb-4">Get help from our team</p>
                <a 
                  href="mailto:team@example.com" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                >
                  team@example.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/30 rounded-xl p-6 text-center hover:from-white/25 hover:to-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Documentation</h4>
                <p className="text-blue-100 mb-4">Complete guides & tutorials</p>
                <a 
                  href="#documentation" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-medium"
                >
                  View Documentation
                </a>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/30 rounded-xl p-6 text-center hover:from-white/25 hover:to-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Community</h4>
                <p className="text-blue-100 mb-4">Join the conversation</p>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium">
                  #ai-development
                </span>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper animation="fadeIn" delay={0.8}>
                     <div className="mt-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Rocket className="w-6 h-6 text-blue-200" />
              <p className="text-lg text-blue-100 font-medium">
                Ready to transform your development workflow?
              </p>
              <Rocket className="w-6 h-6 text-blue-200" />
            </div>
            
            <div className="inline-block p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl">
              <a
                href="#"
                className="inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-black rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 text-xl shadow-xl transform hover:scale-105 hover:shadow-2xl"
              >
                <Download className="w-8 h-8" />
                Download AI Agent Template
                <Rocket className="w-8 h-8" />
              </a>
            </div>
            
            <p className="text-blue-200 text-sm mt-4 font-medium">
              Free • No signup required • Start in 5 minutes
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default CTASection;