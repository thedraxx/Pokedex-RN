/* eslint-disable import/no-cycle */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

function PokemonScreen({ navigation, route }:Props) {
  const { SimplePokemon, color } = route.params;
  return (
    <View>
      <Text>
        {SimplePokemon.name}
        {' '}
        -
        {' '}
        {color}
      </Text>
    </View>
  );
}

export default PokemonScreen;
