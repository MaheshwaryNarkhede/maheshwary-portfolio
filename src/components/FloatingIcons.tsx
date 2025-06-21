
import { useEffect, useState } from 'react';
import { Code, Smartphone, Brain, Database, Github, Coffee } from 'lucide-react';

const FloatingIcons = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const icons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Smartphone, delay: 1, x: 80, y: 10 },
    { Icon: Brain, delay: 2, x: 20, y: 70 },
    { Icon: Database, delay: 3, x: 90, y: 60 },
    { Icon: Github, delay: 4, x: 60, y: 30 },
    { Icon: Coffee, delay: 5, x: 40, y: 80 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute opacity-20 text-blue-400"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon 
            size={24} 
            className="animate-bounce"
            style={{ animationDuration: '3s', animationDelay: `${delay * 0.5}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
