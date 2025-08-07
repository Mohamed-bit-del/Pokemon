import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const AppHeader: React.FC = function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  type ViewType = 'grid' | 'loadmore';

  const currentView = location.pathname === '/' || location.pathname === '/pokemon-grid-view' ? 'grid' : 'loadmore';

  const handleViewChange = (view: ViewType) => {
    const path = view === 'grid' ? '/pokemon-grid-view' : '/pokemon-load-more-view';
    navigate(path);
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="">
      <div className="">
        <div className="flex items-center justify-center flex-col">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href='/'
              className="flex items-center space-x-2 transition-smooth hover:opacity-80 rounded-lg p-1"
              aria-label="PokéBrowser Home"
            >
              <Icon name="Zap" size={20} color="gold" strokeWidth={2.5} />
              <span className="text-2xl font-bold text-black">
                Pokémdex
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center rounded-lg p-1 gap-2">
              <Button
                variant={currentView === 'loadmore' ? 'black' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('loadmore')}
                iconName="List"
                iconPosition="left"
                iconSize={16}
                className="transition-smooth"
              >
                Load More
              </Button>

              <Button
                variant={currentView === 'grid' ? 'black' : 'ghost'}
                size="sm"
                onClick={() => handleViewChange('grid')}
                iconName="Grid3X3"
                iconPosition="left"
                iconSize={16}
                className="transition-smooth"
              >
                Grid View
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              iconSize={20}
              aria-label="Toggle menu"
              className="transition-smooth"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant={currentView === 'grid' ? 'black' : 'ghost'}
                fullWidth
                onClick={() => handleViewChange('grid')}
                iconName="Grid3X3"
                iconPosition="left"
                iconSize={16}
                className="justify-start transition-smooth"
              >
                Grid View
              </Button>
              <Button
                variant={currentView === 'loadmore' ? 'black' : 'ghost'}
                fullWidth
                onClick={() => handleViewChange('loadmore')}
                iconName="List"
                iconPosition="left"
                iconSize={16}
                className="justify-start transition-smooth"
              >
                Load More View
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;