import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const animationVariants = {
  fadeInUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0'
  },
  fadeInDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0'
  },
  fadeInLeft: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0'
  },
  fadeInRight: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0'
  },
  scaleIn: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100'
  },
  slideInUp: {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0'
  }
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  as: Component = 'div',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });
  
  const animationClasses = animationVariants[animation];
  const baseClasses = 'transition-all duration-700 ease-out';
  
  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: cn(
        baseClasses,
        isVisible ? animationClasses.visible : animationClasses.hidden,
        className
      ),
      style: {
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }
    },
    children
  );
};

export default AnimatedSection;