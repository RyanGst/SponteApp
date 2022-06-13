import {Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '../../../../components/Text/Paragraph';
import {colors, fonts, width} from '../../../../styles';

interface CarouselItemProps {
  step: {
    src: ImageSourcePropType;
    header: string;
    paragraph: string;
  };
}

export default function CarouselItem({step}: CarouselItemProps) {
  return (
    <Content>
      <Image resizeMode="contain" source={step.src} />
      <Header>{step.header}</Header>
      <CarouselParagraph>{step.paragraph}</CarouselParagraph>
    </Content>
  );
}

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${width}px;
`;

const CarouselParagraph = styled(Paragraph)`
  width: 311px;
`;

const Header = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 24px;
  line-height: 32px;
  padding-top: 24px;
`;
