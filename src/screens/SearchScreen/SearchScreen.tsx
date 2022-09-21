import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './style';
import SearchInput from '../../components/Search/SearchInput';

function SearchScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <Container top={top}>
      <SearchInput />
    </Container>
  );
}

export default SearchScreen;
