import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #fff;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin-left: 20px;
    font-weight: bold;
    margin-top: ${(props: { top: number; }) => props.top + 10}px;
    top: ${(props: { top: number; }) => props.top + 60}px;
    color: black;
    margin-bottom: ${(props: { top: number; }) => props.top + 20}px;
`;
