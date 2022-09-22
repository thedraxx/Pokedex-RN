import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ContainerLoading } from './style';

function Loading() {
  return (
    <ContainerLoading>
      <ActivityIndicator
        size={50}
        color="gray"
      />
      <Text style={{ color: 'black' }}>Loading...</Text>
    </ContainerLoading>
  );
}

export default Loading;
