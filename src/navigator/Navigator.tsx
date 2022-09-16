/* eslint-disable import/no-cycle */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterface';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { SimplePokemon: SimplePokemon, color: string };
}

const Stack = createStackNavigator<RootStackParams>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
