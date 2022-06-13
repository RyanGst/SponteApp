import styled from 'styled-components/native';
import {colors, fonts} from '../../../../styles';

export const TextContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 32px;
`;

export const Header = styled.Text`
  font-family: ${fonts.bold};
  font-size: 18px;
  color: ${colors.black};
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 32px;
`;
