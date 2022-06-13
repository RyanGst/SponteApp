import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Paragraph = styled.Text`
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.gray};
  text-align: center;
  padding: 24px 0 0 0;
  line-height: 20px;
`;
