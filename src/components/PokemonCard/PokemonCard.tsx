import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { SimplePokemon } from '../../interfaces/pokemonInterface';
import FadeInImage from '../FadeInImage';
import { CardContainer, ImagePokebola, NamePokemon } from './style';

interface Props{
    pokemon:SimplePokemon
}

const windowWidth = Dimensions.get('window').width;

function PokemonCard({ pokemon }:Props) {
  const [bgColor, setBgColor] = useState('gray');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  const obtainColor = async () => {
    if (isMounted.current) return;
    const result = await ImageColors.getColors(pokemon.picture);
    setBgColor(result.platform === 'android'
      ? result.dominant || 'gray'
      : result.average || 'gray');
  };

  useEffect(() => {
    obtainColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('PokemonScreen', { SimplePokemon: pokemon, color: bgColor }); }}>
      <CardContainer windowWidth={windowWidth} bgColor={bgColor}>
        <NamePokemon>
          {pokemon.name}
        </NamePokemon>
        <ImagePokebola
          source={require('../../assets/pokebola-blanca.png')}
        />
        <FadeInImage
          uri={pokemon.picture}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <NamePokemon>
          {pokemon.id}
        </NamePokemon>

      </CardContainer>
    </TouchableOpacity>
  );
}

export default PokemonCard;
