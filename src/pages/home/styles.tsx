import styled from 'styled-components/native';
import {BoldText} from '../../components/Text/BoldText';
import {Paragraph} from '../../components/Text/Paragraph';
import {colors, fonts} from '../../styles';

export const ScrollContainer = styled.ScrollView`
  background-color: ${colors.background};
`;

export const Background = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 35%;
  width: 100%;
  background: #00a5e5;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const Frame = styled.ScrollView.attrs({
  contentContainerStyle: {alignItems: 'flex-start'},
})`
  flex: 1;
  position: relative;
  left: 0px;
  flex-direction: column;
  //padding: 0px 16px 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
`;

export const HelpText = styled(Paragraph)<{align?: string}>`
  color: ${colors.background};
  padding: 4px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  ${props => props.align && `text-align: ${props.align}`}
`;

export const HeaderText = styled(BoldText)<{align?: string}>`
  font-size: 18px;
  line-height: 24px;
  align-self: stretch;
  flex-grow: 0;
  ${props => props.align && `text-align: ${props.align}`}
`;

export const CollumCenter = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  width: 100%;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;

export const Dot = styled.View<{isCurrent?: boolean}>`
  width: 8px;
  height: 8px;
  background: ${props => (props.isCurrent ? '#00a5e5' : '#99DBF5')};
  border-radius: 4px;
  margin: 0px 6px;
`;

export const CardTitle = styled.Text`
  font-family: ${fonts.medium};
  font-size: 10px;
  line-height: 12px;
  color: ${colors.black};
`;

export const Divider = styled.View`
  width: 8px;
`;
