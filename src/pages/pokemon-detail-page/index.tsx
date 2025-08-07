import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorState from '../../components/pokemon-screen/ErrorState';
import LoadingState from '../../components/pokemon-screen/LoadingState';
import PokemonHeader from '../../components/pokemon-detils/PokemonHeader';
import PokemonImage from '../../components/pokemon-detils/PokemonImage';
import PokemonStats from '../../components/pokemon-detils/PokemonStats';
import mockPokemonDetilsData from '../../services/mockPokemonDetilsData';
import Button from '../../components/ui/Button';

const PokemonDetailPage: React.FC = function PokemonDetailPage() {
  const { id } = useParams();

  const { pokemon, loading, error, refetch } = mockPokemonDetilsData(id);

  const handleBack = () => {
    window.history?.back();
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-4">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ErrorState
              title="Failed to load Pokémon details"
              message={error}
              onRetry={refetch}
              onBack={handleBack}
            />
          </div>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-4">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <LoadingState />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen"
      style={{ backgroundImage: "linear-gradient(rgb(174 128 163 / 16%), rgb(234 152 229 / 11%))" }}
    >
      <main className="pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={16}
          className="transition-smooth hover:bg-muted ml-24"
          aria-label="Go back"
        >
          Back to List
        </Button>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header with back button */}
          <PokemonHeader
            name={pokemon?.name ?? ''}
            id={pokemon?.id ?? 0}
          />

          <div className="">
            {/* Main Pokemon Image */}
            <PokemonImage
              sprite={pokemon?.sprite ?? ''}
              name={pokemon?.name ?? ''}
              description={pokemon?.description}
              types={pokemon?.types ?? []}
            />

            {/* Pokemon Stats */}
            <PokemonStats
              height={pokemon?.height ?? 0}
              weight={pokemon?.weight ?? 0}
              id={pokemon?.id ?? 0}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonDetailPage;