import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

type BreadcrumbNavigationProps = {
  pokemonName?: string;
  className?: string;
};

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = function BreadcrumbNavigation({ pokemonName = '', className = '' }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = location.pathname?.startsWith('/pokemon/');
  const previousView: string = (
    location.state && typeof location.state === 'object' && 'from' in location.state
      ? (location.state as any).from
      : null) || '/pokemon-grid-view';

  const handleBackNavigation = () => {
    navigate(previousView);
  };

  const handleHomeNavigation = () => {
    navigate('/pokemon-grid-view');
  };

  if (!isDetailPage) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {/* Mobile: Simple back button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBackNavigation}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={16}
          className="transition-smooth"
        >
          Back
        </Button>
      </div>
      {/* Desktop: Full breadcrumb */}
      <div className="hidden md:flex items-center space-x-2">
        <button
          onClick={handleHomeNavigation}
          className="text-text-secondary hover:text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-1"
        >
          Browse
        </button>

        <Icon name="ChevronRight" size={16} color="var(--color-text-secondary)" />

        <button
          onClick={handleBackNavigation}
          className="text-text-secondary hover:text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-1"
        >
          {previousView?.includes('grid') ? 'Grid View' : 'Load More View'}
        </button>

        {pokemonName && (
          <>
            <Icon name="ChevronRight" size={16} color="var(--color-text-secondary)" />
            <span className="text-foreground font-medium capitalize">
              {pokemonName}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;