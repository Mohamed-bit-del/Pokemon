import React, { useState } from 'react';
import PokemonViewUI from '../../components/pokemon-screen/PokemonViewUI';
import usePokemonFetch from '../../services/mockPokemonData';

const PokemonGridView: React.FC = function PokemonGridView() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    pokemon,
    loading,
    error,
    totalPages,
    fetchPokemon,
  } = usePokemonFetch(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetry = () => {
    fetchPokemon(currentPage);
  };

  return (
    <PokemonViewUI
      pokemon={pokemon}
      loading={loading}
      error={error}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onRetry={handleRetry}
    />
  );
};

export default PokemonGridView;
