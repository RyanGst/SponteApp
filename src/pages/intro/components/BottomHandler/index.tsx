import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../../../../components/Container';
import Button from '../../../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../styles';

interface HandlerComponentProps {
  steps: any[];
  currentStep: number;
  onPressContinue: () => void;
  onPressBack: () => void;
}
export default function HandlerComponent(props: HandlerComponentProps) {
  return (
    <ButtonContainer>
      <Button style={{height: 48, width: 48}} isFadded onPress={props.onPressBack}>
        <Icon name="arrow-left" color={colors.darkGray} size={16} />
      </Button>
      <DotContainer>
        {props.steps.map((_, key) => (
          <Dot key={key} isCurrent={key == props.currentStep} />
        ))}
      </DotContainer>
      <Button style={{height: 48, width: 48}} isFilled onPress={props.onPressContinue}>
        <Icon name="arrow-right" color={colors.background} size={16} />
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 32px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View<{isCurrent: boolean}>`
  width: 8px;
  height: 8px;
  background: ${props => (props.isCurrent ? '#00a5e5' : '#99DBF5')};
  border-radius: 4px;
  margin: 0px 6px;
`;
