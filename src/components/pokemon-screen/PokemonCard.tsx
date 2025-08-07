import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../AppImage';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

type PokemonCardProps = {
  pokemon: Pokemon;
  className?: string;
};

const PokemonCard: React.FC<PokemonCardProps> = function PokemonCard({ pokemon, className = '' }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon?.id}`, {
      state: { from: '/pokemon-grid-view' }
    });
  };

  const formatPokemonId = (id: number) => {
    return `#${String(id)?.padStart(3, '0')}`;
  };

  const capitalizeName = (name: string) => {
    return name.charAt(0)?.toUpperCase() + name.slice(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className={`bg-card rounded-xl border border-border p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary/20 group ${className}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
      aria-label={`View details for ${capitalizeName(pokemon?.name)}`}
    >
      {/* Pokemon Image */}
      <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden flex items-center justify-center">
        <Image
          src={pokemon?.sprite}
          alt={`${capitalizeName(pokemon?.name)} sprite`}
          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      {/* Pokemon Info */}
      <div className="text-center space-y-1">
        <p className="text-xs text-text-secondary font-mono">
          {formatPokemonId(pokemon?.id)}
        </p>
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
          {capitalizeName(pokemon?.name)}
        </h3>
      </div>
    </div>
  );
};

export default PokemonCard;