import {StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoldText} from '../Text/BoldText';
import {useAuth} from '../../contexts/auth/AuthContext';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

interface HeaderProps extends BottomTabHeaderProps {
  isFilled?: boolean;
}

export default function HeaderComponent(props: HeaderProps) {
  const {user} = useAuth();
  return (
    <Row isFilled={props.isFilled}>
      <StatusBar
        backgroundColor={props.isFilled ? colors.primary : colors.background}
        barStyle={props.isFilled ? 'light-content' : 'dark-content'}
      />
      <Content>
        {props.navigation.canGoBack() && (
          <TouchableOpacity onPress={props.navigation.goBack}>
            <Icon
              style={{paddingRight: 4}}
              size={24}
              color={colors.darkGray}
              name="chevron-left"
            />
          </TouchableOpacity>
        )}
        <Logo
          source={
            props.isFilled
              ? require('../../../assets/images/tab_logo_white.png')
              : require('../../../assets/images/tab_logo.png')
          }
        />
      </Content>
      {!props.isFilled && props.route.name !== 'SignIn' && (
        <Button onPress={() => props.navigation.navigate('SignIn')}>
          Entrar
        </Button>
      )}
      {props.isFilled && (
        <SwapUser>
          <TextContainer>
            <UserName numberOfLines={1} ellipsizeMode="middle">
              {user?.email}
            </UserName>
            <UserClass>Turma - Período (Ano)</UserClass>
          </TextContainer>
          <UserPhoto resizeMode="cover" />
        </SwapUser>
      )}
    </Row>
  );
}

const UserPhoto = styled.Image.attrs({
  source: require('../../../assets/images/profile.png'),
})``;

const UserName = styled(BoldText)`
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  flex-wrap: wrap;
  flex-grow: 0;
`;

const UserClass = styled(BoldText)`
  font-size: 8px;
  line-height: 10px;
  text-align: right;
`;

const SwapUser = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px 4px 4px 16px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  align-items: center;
  width: 170px;
`;

const TextContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: -2px 10px 0px 0px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.Image.attrs<StyleVariations>({
  resizeMode: 'contain',
})`
  padding: 0px 12px;
`;

const Row = styled.SafeAreaView<StyleVariations>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: ${props =>
    props.isFilled ? colors.primary : colors.background};
`;

interface StyleVariations {
  isFilled?: boolean;
}
