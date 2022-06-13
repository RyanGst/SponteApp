import {Image, StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../styles';

export default function SplashScreen() {
  return (
    <Container>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Image source={require('../../../assets/images/sponte.png')} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;
