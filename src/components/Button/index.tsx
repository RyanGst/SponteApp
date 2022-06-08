import React from 'react';
import {TextProps, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export default function Button(props: IButtonProps) {
  return (
    <ButtonContainer
      style={props.style}
      isFilled={props.isFilled}
      isLarge={props.isLarge}
      onPress={props.onPress}
      isFadded={props.isFadded}>
      <ButtonText filled={props.isFilled}>{props.children}</ButtonText>
    </ButtonContainer>
  );
}

interface IButtonProps extends TouchableOpacityProps {
  isFilled?: boolean;
  isLarge?: boolean;
  isFadded?: boolean;
}

const ButtonContainer = styled.TouchableOpacity<IButtonProps>`
  ${props => !props.isFilled && 'border: 1px solid #00a5e5'};
  ${props => props.isFadded && 'border: 1px solid #919CAB'}
  background-color: ${props =>
    props.isFilled ? colors.primary : colors.background};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  height: 40px;
  width: ${props => (props.isLarge ? '100%' : 'auto')};
`;

interface IButtonTextProps extends TextProps {
  filled?: boolean;
}
const ButtonText = styled.Text<IButtonTextProps>`
  color: ${props => (props.filled ? colors.background : colors.primary)};
  font-family: ${fonts.bold};
  font-size: 12px;
`;
