import {FlatList, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {Container} from '../../components/Container';
import CarouselItem from './components/CarouselItem';
import styled from 'styled-components/native';
import {width} from '../../styles';
import HandlerComponent from './components/BottomHandler';
import {Props} from '../../routes/auth.routes';

export default function Intro({navigation}: Props) {
  const [current, setCurrent] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const steps = useMemo(
    () => [
      {
        src: require('../../../assets/images/1.png'),
        header: 'Seja bem-vindo(a)!',
        paragraph:
          'Fique mais próximo da escola: o app Spote permite que você tenha acesso a notas e frequências do aluno, eventos escolares e muito mais!',
      },
      {
        src: require('../../../assets/images/2.png'),
        header: 'Mais em menos tempo',
        paragraph:
          'O app Sponte foi pensado para encurtar caminhos! O financeiro permite o controle e pagamento das mensalidades, seja por boleto, cartão de crédito, recorrência ou Pix.',
      },
      {
        src: require('../../../assets/images/3.png'),
        header: 'Comunicação facilitada',
        paragraph:
          'Por meio do chat do app Sponte, você recebe comunicações objetivas e de forma rápida da escola. Ative as notificações para se manter informado de tudo!',
      },
    ],
    [],
  );

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrent(Math.ceil(e.nativeEvent.contentOffset.x / width));
  };

  const handleNavigator = (position: number) => {
    if (current == 2 && position == 1) {
      return navigation.navigate('SignIn');
    }
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: Math.max(current + position, 0),
    });
  };
  return (
    <CarouselContainer>
      <FlatList
        data={steps}
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={15}
        showsHorizontalScrollIndicator={false}
        //onMomentumScrollEnd={handleScroll}
        onScroll={handleScroll}
        renderItem={({item}) => <CarouselItem step={item} />}
      />
      <HandlerComponent
        onPressBack={() => handleNavigator(-1)}
        onPressContinue={() => handleNavigator(+1)}
        steps={steps}
        currentStep={current}
      />
    </CarouselContainer>
  );
}

const CarouselContainer = styled(Container)`
  flex-direction: column;
`;
