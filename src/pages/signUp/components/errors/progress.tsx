import {View, Text} from 'react-native';
import React from 'react';
import styled, {css} from 'styled-components/native';
import {colors} from '../../../../styles';

interface ProgressProps {
  steps: number;
  filled: number;
}

export default function ProgressComponent(props: ProgressProps) {
  return (
    <LineContainer>
      {new Array(props.steps).fill(true).map((node, key) => (
        <ErrorIndicator
          isFirst={key == 0}
          isLast={key == props.steps - 1}
          key={key}
          isFilled={key < props.filled}
        />
      ))}
    </LineContainer>
  );
}

const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 16px 8px;
`;

interface ErrorIndicatorProps {
  isFilled: boolean;
  isFirst: boolean;
  isLast: boolean;
}
const ErrorIndicator = styled(View)<ErrorIndicatorProps>`
  background-color: ${props =>
    props.isFilled ? colors.error : colors.mediumGray};
  width: 59px;
  height: 8px;
  margin: 0px 2px 0px 2px;
  ${props =>
    props.isFirst &&
    `
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `}
  ${props =>
    props.isLast &&
    `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`;
