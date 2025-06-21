
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = isVisible ? 'opacity-100 transform translate-y-0 translate-x-0 scale-100' : 'opacity-0';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClass} ${!isVisible ? 'transform translate-y-8' : ''}`;
      case 'fade-in':
        return baseClass;
      case 'slide-left':
        return `${baseClass} ${!isVisible ? 'transform -translate-x-8' : ''}`;
      case 'slide-right':
        return `${baseClass} ${!isVisible ? 'transform translate-x-8' : ''}`;
      case 'scale-in':
        return `${baseClass} ${!isVisible ? 'transform scale-95' : ''}`;
      default:
        return baseClass;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
