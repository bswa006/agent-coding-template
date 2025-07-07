# presentation-app/src/components/ui/README.md

## Purpose
Reusable UI components used across the presentation app. These are the building blocks for creating consistent user interfaces.

## Current Components

### Button
- Reusable button component with variants
- Props: onClick, children, variant (primary/secondary)
- Used for CTAs and interactive elements

### CodeBlock
- Syntax-highlighted code display component
- Props: code, language, title
- Features copy-to-clipboard functionality
- Used for showing code examples

### FeatureCard
- Card component for displaying features
- Props: feature (Feature type from types/index.ts)
- Displays icon, title, and description
- Used in FeaturesSection

## AI Generation Notes
- Always use TypeScript interfaces for props
- Import types with 'import type { Type } from '../../types/index'
- Keep components pure and focused on presentation
- Handle all edge cases (loading, error, empty states)

## Component Template
```typescript
import React from 'react';
import type { ComponentProps } from '../../types/index';

interface ComponentNameProps {
  // Define all props with TypeScript types
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="tailwind-classes">
      {/* Component markup */}
    </div>
  );
};

export default ComponentName;
```

## Styling Guidelines
- Use TailwindCSS utilities exclusively
- Avoid inline styles unless for dynamic values
- Maintain consistent spacing and sizing
- Ensure all components are responsive
- Use hover and focus states for interactivity

## Best Practices
- Keep components small and focused
- Use descriptive prop names
- Provide default props where sensible
- Add proper TypeScript types for all props
- Test components in isolation before integration 