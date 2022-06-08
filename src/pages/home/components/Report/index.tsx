import React from 'react';
import styled from 'styled-components/native';
import {Reports} from '../..';
import {BoldText} from '../../../../components/Text/BoldText';
import {Paragraph} from '../../../../components/Text/Paragraph';
import {colors} from '../../../../styles';

interface ReportProps {
  item: Reports;
}

export default function ReportCard(props: ReportProps) {
  return (
    <Card>
      <CardText>{props.item.title}</CardText>
      <CardContent>
        <CardText>
          Valor: <CardText>R$ 1.692,00</CardText>
        </CardText>
        <CardText>
          Venceu: <CardText>15/02</CardText>
        </CardText>
      </CardContent>
      <Action>Pagar</Action>
    </Card>
  );
}

const Action = styled(BoldText)`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.primary};
`;

const Card = styled.View.attrs({
  elevation: 2.5,
})`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 8px 12px 12px;
  background-color: ${colors.background};
`;

interface TextProps {
  isCapitalized?: boolean;
  color?: string;
}

const CardText = styled(Paragraph)<TextProps>`
  font-size: 10px;
  line-height: 12px;
  color: ${props => (props.color ? props.color : colors.black)};
  ${props => props.isCapitalized && 'text-transform: upppercase'}
`;

const CardContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
`;
