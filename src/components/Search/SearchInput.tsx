import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, TextBackground, TextInputCustom } from './style';
import useDebounceValue from '../../hook/useDebounceValue';

function SearchInput() {
  const { top } = useSafeAreaInsets();

  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebounceValue(textValue, 500);

  useEffect(() => () => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <Container top={top}>
      <TextBackground>
        <TextInputCustom
          placeholder="Search pokemon"
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
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
