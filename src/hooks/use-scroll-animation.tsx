import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { elementRef, isVisible };
};

// Predefined animation variants
export const scrollAnimations = {
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
} as const;