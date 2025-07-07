import { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode | string;
}

export interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}