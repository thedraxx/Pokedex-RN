import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    position: absolute;
    z-index:999;
    width: 100%;
    margin-top: ${(props: { top: number }) => (Platform.OS === 'ios' ? props.top : props.top + 20)}px;
`;

export const TextBackground = styled.View`
    background-color: #f3f1f3;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextInputCustom = styled.TextInput`
    flex:1;
    font-size: 18px;
    top: ${Platform.OS === 'ios' ? 0 : 4}px;
`;
