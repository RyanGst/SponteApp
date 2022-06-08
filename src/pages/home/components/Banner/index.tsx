import React from 'react';
import {HeaderText, DotContainer, Dot, HelpText} from '../../styles';
import styled from 'styled-components/native';

export default function BannerComponent() {
  return (
    <Banner>
      <BackgroundImage resizeMode="cover" />
      <ContentContainer>
        <HeaderText align="left">Volta as aulas 2022</HeaderText>
        <HelpText align="left">
          Fevereiro é o mês de volta às aulas para a maioria das redes estaduais
          e municipais de educação do...
        </HelpText>
        <DotContainer>
          <Dot isCurrent />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
      </ContentContainer>
    </Banner>
  );
}

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 16px;
  bottom: 16px;
`;
const BackgroundImage = styled.Image.attrs({
  source: require('../../../../../assets/images/image.png'),
})`

  position: absolute;
  left: -0.29%;
  right: 0%;
  top: -0.44%;
  bottom: -0.88%;
  border-radius: 12px;

  /* background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ) */
`;

const Banner = styled.View`
  width: 343px;
  height: 222px;
  border-radius: 12px;
  flex-grow: 1;
`;
