import styled from 'styled-components/native';

export const PokeImage = styled.Image`
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    opacity: 0.2;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin-left: 20px;
    font-weight: bold;
    top: ${(props: { top: number; }) => props.top + 20}px;
    color: black;
`;
