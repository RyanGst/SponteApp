import React from 'react';
import styled from 'styled-components/native';
import {CardTitle} from '../../styles';
import Badge from '../../../../components/Badge';
import {colors, fonts} from '../../../../styles';

export default function TimelineComponent() {
  return (
    <TimelineCard>
      <CardRow>
        <Badge value="+9" />
        <CardTitle> AVISOS E EVENTOS</CardTitle>
      </CardRow>
      <CardRow>
        <CardCollum>
          <CardTitle>SEG</CardTitle>
          <CardTitleBold>12</CardTitleBold>
        </CardCollum>
        <CardCollum isLarge>
          <Activity>
            <ActivityTitle>Início da Semana Acadêmica</ActivityTitle>
          </Activity>
          <Activity isFocused>
            <ActivityTitle>Reunião de Pais</ActivityTitle>
            <ActivityDetails>9:45 - 10:45</ActivityDetails>
          </Activity>
          <Activity isFocused>
            <ActivityTitle>Evento de Volta as Aulas</ActivityTitle>
            <ActivityDetails>10:45 - 11:30</ActivityDetails>
          </Activity>
        </CardCollum>
      </CardRow>
    </TimelineCard>
  );
}

const TimelineCard = styled.View.attrs({
  elevation: 2.5,
})`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;
  width: 343px;
  height: 178px;
  background: #ffffff;
  border-radius: 12px;
  flex-grow: 0;
  /* border-color: #ff0000;
  border-width: 2px; */
`;

const CardTitleBold = styled(CardTitle)`
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 32px;
`;

const ActivityTitle = styled(CardTitle)`
  font-family: ${fonts.bold};
  color: ${colors.background};
`;

const ActivityDetails = styled(CardTitle)`
  font-size: 8px;
  line-height: 10px;
  color: ${colors.background};
`;

const CardRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0px;
  flex-grow: 0;
`;

const CardCollum = styled.View<{isLarge?: boolean}>`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 8px 0px 0px;
  height: 100%;
  flex-grow: 0;
  ${props => props.isLarge && 'width: 270px'};
  flex-wrap: wrap;
  //
`;

const Activity = styled.View<{isFocused?: boolean}>`
  align-items: flex-start;
  padding: 8px 12px;
  background-color: ${props =>
    props.isFocused ? colors.primary : colors.darkGray};
  border-radius: 12px;
  margin: 2px 0px;
  flex-basis: auto;
  width: 100%;
`;
