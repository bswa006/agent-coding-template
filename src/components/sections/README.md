# presentation-app/src/components/sections/README.md

## Purpose
Main content sections for the PROJECT-TEMPLATE.md presentation app. Each section represents a slide or major content block in the presentation flow.

## Current Sections (in order)
1. **HeroSection** - Landing page hero introducing PROJECT-TEMPLATE.md
2. **ChallengeSection** - Problems with current AI development approaches
3. **FeaturesSection** - Key features and benefits of the template
4. **ComponentsSection** - Breakdown of template components
5. **TransformationSection** - Before/after comparison
6. **SafetySection** - AI safety and hallucination prevention
7. **WorkflowsSection** - Implementation workflows
8. **ImplementationSection** - Getting started guide
9. **OutcomeSection** - Success metrics and results
10. **CTASection** - Call to action

## Public API
Each section exports a default React.FC component that can be imported and used in App.tsx.

## AI Generation Notes
- Always use React.FC<Props> for component types
- Always export default the component
- Import types with 'import type' syntax
- Follow this consistent structure:

```typescript
import React from 'react';
import type { SectionProps } from '../../types';

const SectionName: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section content */}
      </div>
    </section>
  );
};

export default SectionName;
```

## Styling Guidelines
- Use TailwindCSS utility classes
- Maintain consistent padding: `py-16 px-4`
- Use container with mx-auto for content width
- Apply animations with className and animation-delay
- Keep sections responsive with Tailwind breakpoints

## Common Patterns
- Fade-in animations for content reveal
- Gradient backgrounds for visual interest
- Card components for feature displays
- Responsive grid layouts for multiple items 