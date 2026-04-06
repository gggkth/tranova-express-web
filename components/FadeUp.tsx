'use client';
import { useEffect, useRef, useState } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeUp({ children, className = '', delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
