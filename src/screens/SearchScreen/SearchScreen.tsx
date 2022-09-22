/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { Container, Title } from './style';
import SearchInput from '../../components/Search/SearchInput';
import usePokemonSearch from '../../hook/usePokemonSearch';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';
import { SimplePokemon } from '../../interfaces/pokemonInterface';

function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, isFetching } = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [PokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter((poke) => poke.name.toLowerCase()
          .includes(term.toLowerCase())),
      );
    } else {
      setPokemonFiltered(
        [simplePokemonList.find((poke) => poke.id === term)!],
      );
    }
  }, [term]);

  if (isFetching) {
    return (
      <Loading />
    );
  }
  return (
    <Container>
      <SearchInput
        onDebounce={(value:string) => setTerm(value)}
      />
      <FlatList
        data={PokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        numColumns={2}
        ListHeaderComponent={<Title top={top}>{term}</Title>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </Container>
  );
}

export default SearchScreen;
