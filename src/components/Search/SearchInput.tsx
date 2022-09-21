import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, TextBackground, TextInputCustom } from './style';

function SearchInput() {
  return (
    <Container>
      <TextBackground>
        <TextInputCustom
          placeholder="Search pokemon"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon
          name="search-outline"
          size={15}
          color="black"
        />
      </TextBackground>
    </Container>
  );
}

export default SearchInput;
