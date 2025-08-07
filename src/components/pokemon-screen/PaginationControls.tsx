import React from 'react';
import Button from '../ui/Button';

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading?: boolean;
  className?: string;
};

const PaginationControls: React.FC<PaginationControlsProps> = function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  loading = false,
  className = ''
}) {
  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
  };

  const renderNavButton = (
    label: string,
    iconName: string,
    disabled: boolean,
    onClick: () => void,
    mobileOnly = false
  ) => (
    <Button
      variant="outline"
      size={mobileOnly ? 'icon' : 'sm'}
      onClick={onClick}
      disabled={disabled}
      iconName={iconName}
      iconPosition={label === 'Previous' ? 'left' : 'right'}
      iconSize={16}
      className={mobileOnly ? 'sm:hidden' : 'hidden sm:flex'}
      aria-label={mobileOnly ? `${label} page` : undefined}
    >
      {!mobileOnly && label}
    </Button>
  );

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* Info */}
      <p className="text-sm text-text-secondary">
        Page {currentPage} of {totalPages}
      </p>

      {/* Navigation */}
      <div className="flex items-center space-x-2">
        {/* Previous Buttons */}
        {renderNavButton('Previous', 'ChevronLeft', currentPage === 1 || loading, () =>
          onPageChange(currentPage - 1)
        )}
        {renderNavButton('Previous', 'ChevronLeft', currentPage === 1 || loading, () =>
          onPageChange(currentPage - 1), true)}

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {getPages().map((page, index) =>
            page === '...' ? (
              <span key={index} className="px-2 py-1 text-text-secondary">...</span>
            ) : (
              <Button
                key={index}
                variant={currentPage === page ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange(Number(page))}
                disabled={loading}
                className="min-w-[2.5rem] h-10"
              >
                {page}
              </Button>
            )
          )}
        </div>

        {/* Next Buttons */}
        {renderNavButton('Next', 'ChevronRight', currentPage === totalPages || loading, () =>
          onPageChange(currentPage + 1)
        )}
        {renderNavButton('Next', 'ChevronRight', currentPage === totalPages || loading, () =>
          onPageChange(currentPage + 1), true)}
      </div>
    </div>
  );
};

export default PaginationControls;