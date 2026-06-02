import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionPath?: string;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionPath,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      
      {/* Icon */}
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 max-w-xs mb-5">
          {description}
        </p>
      )}

      {/* Action Button */}
      {actionLabel && actionPath && (
        <Link
          to={actionPath}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}