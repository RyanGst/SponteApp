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
      <CardText isCapitalized>{props.item.title}</CardText>
      <CardContent>
        {props.item.labels.map((label, key) => (
          <CardText key={key}>
            {label.text}{' '}
            <CardText isBold color={label.value.color}>
              {label.value.text}
            </CardText>
          </CardText>
        ))}
      </CardContent>
      <Action>{props.item.actionLabel}</Action>
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
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  background-color: ${colors.background};
  width: 138.33px;
  border-radius: 12px;
`;

interface TextProps {
  isCapitalized?: boolean;
  isBold?: boolean;
  color?: string;
}

const CardText = styled(Paragraph).attrs({
  elevation: 2.5,
})<TextProps>`
  font-size: 10px;
  line-height: 12px;
  padding: 0px;
  color: ${props => (props.color ? props.color : colors.black)};
  ${props => props.isCapitalized && 'text-transform: uppercase'}
  ${props => props.isBold && 'font-family: Montserrat-Bold'}
`;

const CardContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 0px;
`;
