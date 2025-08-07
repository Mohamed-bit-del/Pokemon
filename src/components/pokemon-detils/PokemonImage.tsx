import React from 'react';
import Image from '../AppImage';
import PokemonTypes from './PokemonTypes';

type PokemonImageProps = {
  sprite: string;
  name: string;
  description?: string;
  types?: string[];
};

const PokemonImage = ({ sprite, name, description, types }: PokemonImageProps) => {
  const capitalizeName = (pokemonName: string) => {
    return pokemonName?.charAt(0)?.toUpperCase() + pokemonName?.slice(1) || '';
  };

  return (
    <div className="bg-card p-6 sm:p-8">
      {/* Main Pokemon Image */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 sm:w-64 sm:h-64 bg-muted rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={sprite}
            alt={`${capitalizeName(name)} sprite`}
            className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="text-center">
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      )}

      <PokemonTypes types={types ?? []} />

    </div>
  );
};

export default PokemonImage;