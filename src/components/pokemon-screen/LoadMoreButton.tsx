import React from 'react';
import Button from '../ui/Button';

type LoadMoreButtonProps = {
  onLoadMore?: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
  currentCount?: number;
  totalCount?: number;
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = function LoadMoreButton({
  onLoadMore,
  isLoading,
  hasMore,
  currentCount,
  totalCount
}: LoadMoreButtonProps) {
  if (!hasMore) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary text-sm">
          You've reached the end! All {totalCount} Pokémon loaded.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <Button
        variant="outline"
        size="lg"
        onClick={onLoadMore}
        loading={isLoading}
        disabled={isLoading}
        className="min-w-48"
        iconName={isLoading ? undefined : "Plus"}
        iconPosition="left"
        iconSize={16}
      >
        {isLoading ? `Loading 10 more Pokémon...` : 'Load More Pokémon'}
      </Button>

      <p className="text-text-secondary text-sm mt-3">
        Showing {currentCount} of {totalCount} Pokémon
      </p>
    </div>
  );
};

export default LoadMoreButton;