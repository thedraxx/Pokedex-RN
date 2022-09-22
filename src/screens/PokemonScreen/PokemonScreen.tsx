/* eslint-disable import/no-cycle */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../../navigator/Tab1';
import {
  ButtonBack,
  ContainerPokemon,
  PokeballImage,
  PokemonName,
} from './style';
import FadeInImage from '../../components/FadeInImage';
import usePokemon from '../../hook/usePokemon';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

function PokemonScreen({ navigation, route }: Props) {
  const { SimplePokemon, color } = route.params;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon: FullPokemon } = usePokemon(SimplePokemon.id);

  return (
    <View style={{ flex: 1 }}>
      <ContainerPokemon color={color} top={top}>
        <ButtonBack
          activeOpacity={0.8}
          top={top}
          onPress={() => navigation.pop()}
        >
          <Icon name="arrow-back-outline" color="white" size={35} />
        </ButtonBack>

        <PokemonName top={top}>
          {SimplePokemon.name}
          {' \n'}
          #
          {SimplePokemon.id}
        </PokemonName>

        <PokeballImage
          source={require('../../assets/pokebola-blanca.png')}
        />

        <FadeInImage
          uri={SimplePokemon.picture}
          style={{
            width: 300, height: 300, position: 'absolute', bottom: -10, right: 30,
          }}
        />
      </ContainerPokemon>

      {
        isLoading ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
              size={50}
              color={color}
            />
          </View>
        )
          : <PokemonDetail pokemon={FullPokemon} />
      }

    </View>
  );
}

export default PokemonScreen;
