# presentation-app/src/hooks/README.md

## Purpose
Custom React hooks for encapsulating reusable logic and stateful behavior across the presentation app.

## Current Hooks

### useScrollAnimation
- Manages scroll-triggered animations
- Returns visibility state and animation refs
- Used for fade-in effects on scroll
- Features: IntersectionObserver integration

### useActiveSection
- Tracks which section is currently in viewport
- Returns active section ID
- Used for navigation highlighting
- Features: Scroll position tracking

## AI Generation Notes
- Always prefix hook names with 'use'
- Follow useVerbNoun naming pattern
- Return consistent data structures
- Handle cleanup in useEffect
- Keep hooks pure and side-effect free

## Hook Template
```typescript
import { useState, useEffect, useRef } from 'react';

interface UseHookNameReturn {
  // Define return type structure
  data: any;
  loading: boolean;
  error: Error | null;
}

export const useHookName = (param?: any): UseHookNameReturn => {
  const [state, setState] = useState();
  
  useEffect(() => {
    // Effect logic
    
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  return {
    data: state,
    loading: false,
    error: null
  };
};
```

## Best Practices
- Keep hooks focused on a single concern
- Always define return types with TypeScript
- Handle loading and error states
- Clean up effects properly
- Memoize expensive computations
- Document hook parameters and return values

## Common Patterns
- Data fetching hooks (future)
- Form handling hooks (future)
- Animation hooks (current)
- Navigation state hooks (current)
- Window/viewport hooks

## Testing Guidelines
- Test hooks in isolation using @testing-library/react-hooks
- Mock external dependencies
- Test all edge cases and error states
- Verify cleanup functions work correctly 