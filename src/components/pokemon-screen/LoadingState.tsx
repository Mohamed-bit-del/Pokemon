import React from 'react';

type LoadingStateProps = {
  className?: string;
  gridCount?: number;
  pageCount?: number;
};

const LoadingState: React.FC<LoadingStateProps> = function LoadingState({ className = '' }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 })?.map((_, index) => (
          <div
            key={index}
            className="bg-card rounded-xl border border-border p-4 animate-pulse"
          >
            <div className="aspect-square bg-muted rounded-lg mb-3"></div>
            <div className="text-center space-y-2">
              <div className="h-3 bg-muted rounded w-12 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-20 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex flex-col items-center space-y-4">
        <div className="h-4 bg-muted rounded w-24"></div>
        <div className="flex items-center space-x-2">
          <div className="h-10 bg-muted rounded w-20"></div>
          {Array.from({ length: 5 })?.map((_, index) => (
            <div key={index} className="h-10 w-10 bg-muted rounded"></div>
          ))}
          <div className="h-10 bg-muted rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;