import React from 'react';
import {colors, fonts} from '../../styles';
import styled from 'styled-components/native';

export default function Badge({value}: {value: string}) {
  return (
    <BadgeContainer>
      <BadgeText>{value}</BadgeText>
    </BadgeContainer>
  );
}

const BadgeContainer = styled.View`
  background-color: ${colors.error};
  align-items: center;
  border-radius: 8px;
`;
const BadgeText = styled.Text`
  font-family: ${fonts.bold};
  font-size: 8px;
  line-height: 10px;
  color: ${colors.background};
  text-align: center;
  padding: 3px 6px;
`;
