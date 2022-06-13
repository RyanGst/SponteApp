import {FlatList /*  */} from 'react-native';
import React from 'react';
import {
  Frame,
  Background,
  HeaderText,
  CollumCenter,
  Header,
  HelpText,
  Divider,
} from './styles';
import {Container} from '../../components/Container';
import BannerComponent from './components/Banner';
import TimelineComponent from './components/Timeline';
import ReportCard from './components/Report';

export default function Home() {
  return (
    <Container style={{backgroundColor: '#F2F4F8'}}>
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
          <FlatList
            horizontal
            data={data}
            contentContainerStyle={{paddingBottom: 10, paddingLeft: 24}}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={Divider}
            renderItem={({item}) => <ReportCard item={item} />}
          />
        </CollumCenter>
      </Frame>
    </Container>
  );
}

const data: Reports[] = [
  {
    title: 'FINANCEIRO',
    labels: [
      {text: 'Valor:', value: {text: 'R$ 1.692,00', color: '#FF5758'}},
      {text: 'Venceu:', value: {text: '15/02', color: '#FF5758'}},
    ],
    actionLabel: 'Pagar',
  },
  {
    title: 'RESULTADOS',
    labels: [
      {text: 'Média geral:', value: {text: '8.2', color: '#02C836'}},
      {text: 'Faltas:', value: {text: '42', color: '#F1C04E'}},
    ],
    actionLabel: 'Ver Mais',
  },
  {
    title: 'PRÓXIMAS AULAS',
    labels: [
      {text: '7:00:', value: {text: 'Matemática', color: '#46505A'}},
      {text: '8:00:', value: {text: 'Inglês', color: '#46505A'}},
    ],
    actionLabel: 'Ver Mais',
  },
];

export interface Reports {
  title: string;
  labels: Label[];
  actionLabel: string;
}

interface Label {
  text: string;
  value: {
    text: string;
    color: string;
  };
}
