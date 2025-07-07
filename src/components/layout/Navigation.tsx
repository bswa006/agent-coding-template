import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Zap, 
  Lightbulb, 
  Package, 
  Workflow, 
  BookOpen, 
  Rocket,
  Menu,
  X
} from 'lucide-react';
import { MagneticWrapper, ScrollIndicator } from '../core';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home', icon: Home },
    { href: '#challenge', label: 'Challenge', icon: Zap },
    { href: '#solution', label: 'Solution', icon: Lightbulb },
    { href: '#components', label: 'Components', icon: Package },
    { href: '#workflows', label: 'Workflows', icon: Workflow },
    { href: '#documentation', label: 'Documentation', icon: BookOpen },
    { href: '#start', label: 'Get Started', icon: Rocket },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <ScrollIndicator gradient="aurora" height={3} />
      
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
         
            {/* Desktop Navigation - Fixed Alignment */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <MagneticWrapper strength={0.15} distance={40}>
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`group relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeSection === item.href.substring(1)
                          ? 'text-[var(--accent-primary)]'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Enhanced Active Indicator */}
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="absolute -inset-y-2 inset-x-0 bg-[var(--color-surface-light)] border border-[var(--accent-primary)] rounded-lg"
                          layoutId="activeNavItem"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      
                      {/* Enhanced Hover Effect */}
                      {activeSection !== item.href.substring(1) && (
                        <div className="absolute inset-0 bg-[var(--color-surface-light)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                      
                      <span className="relative flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </span>
                    </motion.a>
                  </MagneticWrapper>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-light)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-[var(--color-border)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="container py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-[var(--color-surface-light)] text-[var(--accent-primary)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-light)]'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;