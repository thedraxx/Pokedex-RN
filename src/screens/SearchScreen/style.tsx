import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    top: ${Platform.OS === 'ios' ? (props: { top: number; }) => props.top : 10}px;
    margin-left: 20px;
    margin-right: 20px;
    flex:1;
    background-color: #fff;
`;

export const Text = styled.Text``;
