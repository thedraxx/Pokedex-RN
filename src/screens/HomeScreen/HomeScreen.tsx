import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginated from '../../hook/usePokemonPaginated';
import { PokeImage, Title } from './style';

function HomeScreen() {
  const { top } = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>
      <PokeImage
        source={require('../../assets/pokebola.png')}
      />
      <Title top={top}>Pokedex</Title>
    </>
  );
}

export default HomeScreen;
