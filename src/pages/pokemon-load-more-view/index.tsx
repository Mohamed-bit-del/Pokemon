import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PokemonViewUI from '../../components/pokemon-screen/PokemonViewUI';
import usePokemonFetch, { Pokemon } from '../../services/mockPokemonData';

const PokemonGridView = () => {
  const location = useLocation();
  const isLoadMorePage = location.pathname.includes('/pokemon-load-more-view');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [currentCount, setCurrentCount] = useState<number>(0);

  const {
    pokemon,
    loading,
    error,
    totalPages,
    totalCount,
    fetchPokemon,
  } = usePokemonFetch(currentPage);

  useEffect(() => {
    if (isLoadMorePage && pokemon?.length > 0) {
      setAllPokemon(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const newPokemon = pokemon.filter(p => !existingIds.has(p.id));
        return [...prev, ...newPokemon];
      });
      setCurrentCount((prev) => prev + pokemon.length);
    }
  }, [pokemon, isLoadMorePage]);

  const handlePageChange = (page: number) => {
    if (!isLoadMorePage && page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetry = () => {
    fetchPokemon(currentPage);
  };

  const handleLoadMore = () => {
    if (currentCount < totalCount && !loading) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <PokemonViewUI
      pokemon={isLoadMorePage ? allPokemon : pokemon}
      loading={loading}
      error={error}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onRetry={handleRetry}
      onLoadMore={handleLoadMore}
      hasMore={currentCount < totalCount}
      currentCount={currentCount}
      totalCount={totalCount}
    />
  );
};

export default PokemonGridView;