import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { PokemonFull } from '../../interfaces/pokemonInterface';
import FadeInImage from '../FadeInImage';
import {
  Container,
  ContainerGeneral,
  ContainerSprites,
  TextInfoType,
  TextInfo,
} from './style';

interface Props {
    pokemon: PokemonFull
}

function PokemonDetail({ pokemon }: Props) {
  return (
    <ContainerGeneral>
      <Container>
        <TextInfo>Types</TextInfo>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <TextInfoType key={type.name}>
              {`${type.name} `}
            </TextInfoType>
          ))}
        </View>
        <TextInfo>Weight</TextInfo>
        <TextInfoType>
          {pokemon.weight}
          {' '}
          Kg
        </TextInfoType>
      </Container>

      {/* Sprites */}
      <ContainerSprites>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{ width: 100, height: 100 }}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={{ width: 100, height: 100 }}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={{ width: 100, height: 100 }}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={{ width: 100, height: 100 }}
          />
        </ScrollView>
      </ContainerSprites>

      {/* Habilities */}
      <Container>
        <TextInfo>Skills</TextInfo>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <TextInfoType key={ability.name}>
              {`${ability.name} `}
            </TextInfoType>
          ))}
        </View>
      </Container>

      <Container>
        <TextInfo>Stats</TextInfo>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View
              // eslint-disable-next-line react/no-array-index-key
              key={stat.stat.name + i}
              style={{ flexDirection: 'row' }}
            >

              <Text
                key={stat.stat.name}
                style={{ width: 150, fontSize: 15, color: 'black' }}
              >
                {`${stat.stat.name} `}
              </Text>

              <Text
                key={stat.base_stat}
                style={{
                  fontWeight: 'bold', width: 150, fontSize: 15, color: 'black',
                }}
              >
                {`${stat.base_stat} `}
              </Text>
            </View>
          ))}
          <View style={{
            marginBottom: 20,
            alignItems: 'center',
          }}
          >
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </View>
      </Container>
    </ContainerGeneral>
  );
}

export default PokemonDetail;
