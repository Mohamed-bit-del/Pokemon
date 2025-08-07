import { useEffect, useState } from 'react';

export type PokemonType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    sprite: string;
    description: string;
};

function mockPokemonDetilsData(pokemonId?: string) {
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPokemonDetails = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) throw new Error('Failed to fetch Pokémon details');

            const data = await response.json();

            const formattedData: PokemonType = {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                types: data.types.map((t: any) => t.type.name),
                sprite: data.sprites?.front_default || '',
                description: ''
            };

            setPokemon(formattedData);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (pokemonId) {
            fetchPokemonDetails(pokemonId);
        }
    }, [pokemonId]);

    return { pokemon, loading, error, refetch: () => pokemonId && fetchPokemonDetails(pokemonId) };
};

export default mockPokemonDetilsData;
