import { useEffect, useState } from 'react';

interface UseActiveSectionOptions {
  sectionIds: string[];
  offset?: number;
}

export const useActiveSection = ({ sectionIds, offset = 100 }: UseActiveSectionOptions) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the current section
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If no section is found and we're near the top, set the first section as active
      if (!currentSection && window.scrollY < offset) {
        currentSection = sectionIds[0] || '';
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed navigation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return {
    activeSection,
    scrollToSection
  };
};