import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../../hook/usePokemonPaginated';
import { PokeImage, Title } from './style';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <PokeImage
        source={require('../../assets/pokebola.png')}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        onEndReached={loadPokemons}
        numColumns={2}
        ListHeaderComponent={<Title top={top}>Pokedex</Title>}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
      />
    </>
  );
}

export default HomeScreen;
