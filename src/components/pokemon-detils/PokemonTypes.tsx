import React from 'react';
import Icon from '../AppIcon';

type PokemonTypesProps = {
  types: string[];
};

type TypeColorConfig = {
  bg: string;
  text: string;
  icon: string;
};

// Type colors mapping
const typeColors: Record<string, TypeColorConfig> = {
  normal: { bg: 'bg-gray-400', text: 'text-white', icon: 'Circle' },
  fire: { bg: 'bg-red-500', text: 'text-white', icon: 'Flame' },
  water: { bg: 'bg-blue-500', text: 'text-white', icon: 'Droplets' },
  electric: { bg: 'bg-yellow-400', text: 'text-gray-900', icon: 'Zap' },
  grass: { bg: 'bg-green-500', text: 'text-white', icon: 'Leaf' },
  ice: { bg: 'bg-blue-200', text: 'text-gray-900', icon: 'Snowflake' },
  fighting: { bg: 'bg-red-700', text: 'text-white', icon: 'Sword' },
  poison: { bg: 'bg-purple-500', text: 'text-white', icon: 'Skull' },
  ground: { bg: 'bg-yellow-600', text: 'text-white', icon: 'Mountain' },
  flying: { bg: 'bg-indigo-400', text: 'text-white', icon: 'Wind' },
  psychic: { bg: 'bg-pink-500', text: 'text-white', icon: 'Brain' },
  bug: { bg: 'bg-lime-500', text: 'text-white', icon: 'Bug' },
  rock: { bg: 'bg-yellow-800', text: 'text-white', icon: 'Mountain' },
  ghost: { bg: 'bg-purple-700', text: 'text-white', icon: 'Ghost' },
  dragon: { bg: 'bg-indigo-700', text: 'text-white', icon: 'Sparkles' },
  dark: { bg: 'bg-gray-800', text: 'text-white', icon: 'Moon' },
  steel: { bg: 'bg-gray-500', text: 'text-white', icon: 'Shield' },
  fairy: { bg: 'bg-pink-300', text: 'text-gray-900', icon: 'Star' }
};

const PokemonTypes = ({ types }: PokemonTypesProps) => {

  if (!types || types?.length === 0) {
    return null;
  }

  return (
    <div className="bg-card p-6">
      <div className="flex justify-center gap-3 flex-wrap">
        {types?.map((type, index) => {
          const typeConfig = typeColors?.[type?.toLowerCase()] || typeColors?.normal;

          return (
            <div
              key={index}
              className={`${typeConfig?.bg} ${typeConfig?.text} px-2 py-1 rounded-full flex items-center text-sm shadow-sm transition-transform duration-200 hover:scale-105`}
            >
              <span>{type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonTypes;