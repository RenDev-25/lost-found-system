interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullPage?: boolean;
}

export default function Loader({
  size = 'md',
  text,
  fullPage = false,
}: LoaderProps) {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <svg
        className={`animate-spin text-blue-600 ${sizeMap[size]}`}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>

      {text && <p className="text-sm text-gray-500">{text}</p>}
    </div>
  );

  if (fullPage)
    return (
      <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
        {spinner}
      </div>
    );

  return <div className="flex items-center justify-center py-12">{spinner}</div>;
}