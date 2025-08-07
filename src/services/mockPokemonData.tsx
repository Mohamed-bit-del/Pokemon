import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type Pokemon = {
    id: number;
    name: string;
    sprite: string;
};

const POKEMON_PER_PAGE = 20;

const usePokemonFetch = (currentPage: number) => {
    const location = useLocation();
    const isLoadMorePage = location.pathname.includes('/pokemon-load-more-view');

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    const fetchPokemon = async (page: number) => {
        setLoading(true);
        setError(null);

        const offset = (page - 1) * POKEMON_PER_PAGE;
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_PER_PAGE}&offset=${offset}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch Pokémon');

            const data = await response.json();

            const results: Pokemon[] = data.results.map((pokemonItem: any, index: number) => {
                const id = offset + index + 1;
                return {
                    id,
                    name: pokemonItem.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                };
            });

            setPokemon(prev =>
                isLoadMorePage ? [...prev, ...results] : results
            );
            setTotalPages(Math.ceil(data.count / POKEMON_PER_PAGE));
            setTotalCount(data.count);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon(currentPage);
    }, [currentPage, isLoadMorePage]);

    const hasMore = pokemon.length < totalCount;


    return {
        pokemon,
        loading,
        error,
        totalPages,
        fetchPokemon,
        hasMore,
        totalCount
    };
};

export default usePokemonFetch;
