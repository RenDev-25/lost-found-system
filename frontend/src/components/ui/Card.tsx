import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'sm',
  hover = false,
  onClick,
}: CardProps) {
  const padMap = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const shadMap = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div
      onClick={onClick}
      className={[
        'bg-white rounded-xl border border-gray-100',
        padMap[padding],
        shadMap[shadow],
        hover
          ? 'hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

// Card Header
Card.Header = function ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-b border-gray-100 pb-3 mb-3 ${className}`}>
      {children}
    </div>
  );
};

// Card Body
Card.Body = function ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
};

// Card Footer
Card.Footer = function ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-t border-gray-100 pt-3 mt-3 ${className}`}>
      {children}
    </div>
  );
};