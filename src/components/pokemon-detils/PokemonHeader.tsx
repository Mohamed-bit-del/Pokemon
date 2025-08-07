import React from 'react';
import Icon from '../AppIcon';

type PokemonHeaderProps = {
  name: string;
  id: number;
};

function PokemonHeader({ name, id }: PokemonHeaderProps) {
  const capitalizeName = (pokemonName: string) => {
    return pokemonName?.charAt(0)?.toUpperCase() + pokemonName?.slice(1) || '';
  };

  const formatPokemonId = (pokemonId: number) => {
    return `#${String(pokemonId)?.padStart(3, '0')}`;
  };

  return (
    <div className="flex items-center justify-between py-5 rounded-tr-md rounded-tl-md"
      style={{ backgroundImage: "linear-gradient(to left, #fd477e, #fd47ec, #bd07e6)" }}
    >
      <div className="text-center flex-1 ">
        <h1 className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-white">
          <Icon name="Zap" size={20} color="gold" strokeWidth={2.5} />
          {capitalizeName(name)}
        </h1>
        <p className="text-white font-mono text-sm mt-1">
          {formatPokemonId(id)}
        </p>
      </div>
    </div>
  );
};

export default PokemonHeader;