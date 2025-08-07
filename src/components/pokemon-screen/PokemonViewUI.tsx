import React from 'react';
import { useLocation } from 'react-router-dom';
import AppHeader from '../ui/AppHeader';
import BreadcrumbNavigation from '../ui/BreadcrumbNavigation';
import PokemonGrid from './PokemonGrid';
import PaginationControls from './PaginationControls';
import ErrorState from './ErrorState';
import LoadingState from './LoadingState';
import { Pokemon } from '../../services/mockPokemonData';
import LoadMoreButton from './LoadMoreButton';

type Props = {
    pokemon: Pokemon[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onRetry: () => void;
    onLoadMore?: () => void;
    hasMore?: boolean;
    currentCount?: number;
    totalCount?: number;
};

const PokemonViewUI = ({
    pokemon,
    loading,
    error,
    currentPage,
    totalPages,
    onPageChange,
    onRetry,
    onLoadMore,
    hasMore = false,
    currentCount = 0,
    totalCount = 0,
}: Props) => {
    const location = useLocation();
    const isLoadMorePage = location.pathname.includes('/pokemon-load-more-view');

    if (error) {
        return (
            <div className="min-h-screen bg-background">
                <AppHeader />
                <main className="pt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <BreadcrumbNavigation />
                        <ErrorState
                            title="Failed to load Pokémon"
                            message={error}
                            onRetry={onRetry}
                            className="mt-8"
                        />
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${loading ? 'bg-gradient-to-br from-[#e1fdf3] to-[#d2fbe9]' : '[background-color:#e6eaf5]'}`}>
            <AppHeader />
            <main className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <BreadcrumbNavigation />

                    {loading ? (
                        <LoadingState />
                    ) : (
                        <div className="space-y-8">
                            <PokemonGrid pokemon={pokemon} loading={loading} />

                            {isLoadMorePage ? (
                                <LoadMoreButton
                                    onLoadMore={onLoadMore}
                                    isLoading={loading}
                                    hasMore={hasMore}
                                    currentCount={currentCount}
                                    totalCount={totalCount}
                                />
                            ) : (

                                totalPages > 1 && (
                                    <PaginationControls
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={onPageChange}
                                        loading={loading}
                                    />
                                )
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PokemonViewUI;
