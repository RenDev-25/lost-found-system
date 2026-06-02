import React from 'react';

type BadgeVariant =
  | 'lost'
  | 'found'
  | 'claimed'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'default'
  | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  lost: 'bg-red-100 text-red-700 ring-red-200',
  found: 'bg-green-100 text-green-700 ring-green-200',
  claimed: 'bg-blue-100 text-blue-700 ring-blue-200',
  pending: 'bg-yellow-100 text-yellow-700 ring-yellow-200',
  approved: 'bg-green-100 text-green-700 ring-green-200',
  rejected: 'bg-red-100 text-red-700 ring-red-200',
  default: 'bg-gray-100 text-gray-600 ring-gray-200',
  info: 'bg-blue-50 text-blue-600 ring-blue-100',
};

export default function Badge({
  variant = 'default',
  children,
  className = '',
  dot = false,
}: BadgeProps) {
  const dotColors: Record<BadgeVariant, string> = {
    lost: 'bg-red-500',
    found: 'bg-green-500',
    claimed: 'bg-blue-500',
    pending: 'bg-yellow-500',
    approved: 'bg-green-500',
    rejected: 'bg-red-500',
    default: 'bg-gray-400',
    info: 'bg-blue-400',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full',
        'text-xs font-semibold ring-1 ring-inset capitalize',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
}