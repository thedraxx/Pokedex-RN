import styled from 'styled-components/native';

export const Container = styled.Image`
 flex:1;
`;

export const ContainerPokemon = styled.View`
    height: ${(props: { top: number; }) => props.top + 500}px;
    align-items: center;
    border-bottom-left-radius: 1000px;
    border-bottom-right-radius: 1000px;
    background-color: ${(props: { color: string; }) => props.color};
    z-index: 999;

`;

export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: ${(props: { top: number; }) => props.top + 10}px;
`;

export const PokemonName = styled.Text`
    font-size: 40px;
    font-weight: bold;
    text-transform: capitalize;
    color: white;
    align-self: flex-start;
    top: ${(props: { top: number; }) => props.top + 70}px;
    left:20px;
    
`;

export const PokeballImage = styled.Image`
    width: 350px;
    height: 350px;
    bottom: -20px;
    opacity: 0.8;

`;

export const LoadingContainer = styled.Image`
 flex:1;
    justify-content: center;
    align-items: center;
`;
