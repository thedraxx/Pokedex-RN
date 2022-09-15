import { useEffect, useRef, useState } from 'react';
import pokemonAPI from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterface';

const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const mapPokemonList = (pokemonList:Result[]) => {
    pokemonList.map((poke) => console.log(poke));
  };

  const loadPokemons = async () => {
    const resp = await pokemonAPI.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    simplePokemonList
  );
};

export default usePokemonPaginated;
