import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {
  Frame,
  Background,
  HeaderText,
  CollumCenter,
  Header,
  HelpText,
} from './styles';
import {Container} from '../../components/Container';
import BannerComponent from './components/Banner';
import TimelineComponent from './components/Timeline';
import ReportCard from './components/Report';

export default function Home() {
  return (
    <Container>
      <Background />
      <Frame>
        <Header>
          <CollumCenter>
            <HeaderText>Olá, Jacob</HeaderText>
            <HelpText>Acompanhe todas as novidades da escola</HelpText>
          </CollumCenter>
        </Header>
        <CollumCenter>
          <BannerComponent />
        </CollumCenter>
        <CollumCenter>
          <TimelineComponent />
        </CollumCenter>

        <CollumCenter>
          <FlatList horizontal data={data} renderItem={({item}) => <ReportCard item={item} />} />
        </CollumCenter>
        {/* <ReportCard>
            <ReportCard.Title>Resultados</ReportCard.Title>
            <ReportCard.Row>
              <ReportCard.Text>
                Média geral:{' '}
                <ReportCard.SpecialValue red>8.2</ReportCard.SpecialValue>
              </ReportCard.Text>
            </ReportCard.Row>
            <ReportCard.Row>
              <ReportCard.Text>
                Faltas:{' '}
                <ReportCard.SpecialValue red>42</ReportCard.SpecialValue>
              </ReportCard.Text>
            </ReportCard.Row>
            <ReportCard.Action>Ver mais</ReportCard.Action>
          </ReportCard>


          <ReportCard>
            <ReportCard.Title>Próximas Aulas</ReportCard.Title>
            <ReportCard.Row>
              <ReportCard.Text>
                7:00:{' '}
                <ReportCard.SpecialValue red>Matemática</ReportCard.SpecialValue>
              </ReportCard.Text>
            </ReportCard.Row>
            <ReportCard.Row>
              <ReportCard.Text>
                8:00:{' '}
                <ReportCard.SpecialValue red>Inglês</ReportCard.SpecialValue>
              </ReportCard.Text>
            </ReportCard.Row>
            <ReportCard.Action>Ver mais</ReportCard.Action>
          </ReportCard> */}
      </Frame>
    </Container>
  );
}

const data: Reports[] = [
  {title: 'Financeiro', labels: [{text: 'Valor:', value: 'R$ 1.692,00'}, {text: 'Venceu:', value: '15/02'}], actionLabel: 'Pagar'},
  {title: 'Resultados', labels: [{text: 'Média geral:', value: '8.2'}, {text: 'Faltas:', value: '42'}], actionLabel: 'Ver Mais'},
  {title: 'Próximas Aulas', labels: [{text: '7:00:', value: 'Matemática'}, {text: '8:00:', value: 'Inglês'}], actionLabel: 'Ver Mais'}
];

export interface Reports {
  title: string;
  labels: Label[];
  actionLabel: string;
}

interface Label {
  text: string;
  value: string;
}
