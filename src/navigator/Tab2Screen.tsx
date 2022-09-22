import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';
import { RootStackParams } from './Tab1';

function Tab2Screen() {
  const Tab2 = createStackNavigator<RootStackParams>();
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  );
}

export default Tab2Screen;
