import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import {fonts} from '../../styles';

const TabBarIcon = ({
  color,
  size,
  name,
  label,
}: {
  focused: boolean;
  color: string;
  size: number;
  name: string;
  label: string;
}) => {
  return (
    <IconContainer>
      <Icon name={name} size={size + 5} color={color} />
      <RouteLabel color={color}>{label}</RouteLabel>
    </IconContainer>
  );
};

export default TabBarIcon;

const RouteLabel = styled.Text<{color: string}>`
  font-family: ${fonts.medium};
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: ${props => props.color};
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
