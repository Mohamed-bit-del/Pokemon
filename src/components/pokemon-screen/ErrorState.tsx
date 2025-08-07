import React from 'react';
import Button from '../ui/Button';
import Icon from '../AppIcon';
type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
  className?: string;
};

const ErrorState: React.FC<ErrorStateProps> = function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the Pokémon data. Please try again.",
  onRetry,
  onBack,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-4">
        <Icon name="AlertTriangle" size={32} color="var(--color-error)" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>

      <p className="text-text-secondary mb-6 max-w-md">
        {message}
      </p>

      {onRetry && (
        <Button
          variant="outline"
          onClick={onRetry}
          iconName="RefreshCw"
          iconPosition="left"
          iconSize={16}
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;