import React from 'react';
import PokemonCard from './PokemonCard';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

type PokemonGridProps = {
  pokemon: Pokemon[];
  loading: boolean;
  className?: string;
};

const PokemonGrid: React.FC<PokemonGridProps> = function PokemonGrid({ pokemon, loading, className = '' }) {
  const gridClasses = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';

  if (loading) {
    return (
      <div className={`${gridClasses} ${className}`}>
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
    );
  }

  return (
    <div className={`${gridClasses} ${className}`}>
      {pokemon?.map((poke) => (
        <PokemonCard
          key={poke?.id}
          pokemon={poke}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;