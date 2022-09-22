import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, Title } from './style';
import SearchInput from '../../components/Search/SearchInput';
import usePokemonSearch from '../../hook/usePokemonSearch';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Loading from '../../components/Loading/Loading';

function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, isFetching } = usePokemonSearch();

  if (isFetching) {
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <SearchInput />
      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        numColumns={2}
        ListHeaderComponent={<Title top={top}>Pokedex</Title>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
      />
    </Container>
  );
}

export default SearchScreen;
