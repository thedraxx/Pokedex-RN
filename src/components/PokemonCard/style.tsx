import styled from 'styled-components/native';

export const CardContainer = styled.View`
    height: 135px;
    width: ${(props: { windowWidth: number; }) => props.windowWidth * 0.4}px;
    margin-bottom: 25px;
    border-radius: 25px;
    margin-top: 70px;
    margin-left: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props: { bgColor: string; }) => props.bgColor || 'grey'};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`;

export const NamePokemon = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white ;
`;

export const ImagePokebola = styled.Image`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    opacity: 0.9;
`;
