import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {fonts, colors} from '../../../../styles';

export const PasswordStrength = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  padding-bottom: 16px;
`;

export const ErrorsBox = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
`;

interface ErrorTextProps extends TextProps {
  activeError: any;
}

export const ErrorsText = styled.Text<ErrorTextProps>`
  font-family: ${fonts.medium};
  font-size: 10px;
  line-height: 12px;
  padding: 2px 0px;
  color: ${props => (props.activeError ? colors.error : colors.gray)};
`;
