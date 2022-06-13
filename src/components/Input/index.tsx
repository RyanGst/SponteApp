import {Animated, TextInputProps} from 'react-native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps extends TextInputProps {
  icon: string;
  endIcon?: JSX.Element;
  error?: boolean;
  helpText?: string;
  [x: string]: any;
}

const Input = React.forwardRef((props: InputProps, ref) => {
  const [focused, isFocused] = useState(false);
  const [labelAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (!focused && props.value) {
      return;
    }

    Animated.timing(labelAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused, labelAnimation, props.value]);

  return (
    <Field>
      <InputContainer error={props.error} isFocused={focused}>
        <ContentContainer>
          <Icon size={24} color={colors.darkGray} name={props.icon} />
          <TextContainer>
            <Label
              style={{
                top: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, -6],
                }),
                fontSize: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 10],
                }),
                color: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [colors.black, colors.darkGray],
                }),
              }}>
              {props.placeholder}
            </Label>
            <InputText
              //@ts-ignore
              ref={ref}
              hitSlop={{top: 80, bottom: 80, left: 50, right: 50}}
              returnKeyType={props.returnKeyType}
              keyboardType={props.keyboardType}
              secureTextEntry={props.secureTextEntry}
              onSubmitEditing={props.onSubmitEditing}
              onFocus={() => isFocused(true)}
              onBlur={e => {
                isFocused(false);
                props.onBlur?.(e);
              }}
              onChangeText={props.onChangeText}
            />
          </TextContainer>
          {props.endIcon}
        </ContentContainer>
      </InputContainer>
      {props.error && (
        <HelpTextContainer>
          <Label style={{position: 'relative', fontSize: 10}}>
            {props.helpText}
          </Label>
        </HelpTextContainer>
      )}
    </Field>
  );
});

export default Input;
interface FocusedProps {
  isFocused: boolean;
  error?: boolean;
}

const Field = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px 16px;
`;

const InputContainer = styled.View<FocusedProps>`
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
  background: ${props =>
    props.isFocused ? colors.background : colors.lightGray};
  min-height: 48px;
  border: 1px solid ${props => validateProps(props.isFocused, props.error)};
  border-radius: 24px;
`;

function validateProps(isFocused: boolean, error?: boolean): string {
  if (error) {
    return colors.error;
  }
  if (!error && isFocused) {
    return colors.primary;
  }
  return colors.mediumGray;
}

const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 12px 0px 12px;
`;

const HelpTextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 12px 0px 20px;
`;

const Label = styled(Animated.Text)`
  position: absolute;
  line-height: 12px;
  font-family: ${fonts.medium};
`;

const InputText = styled.TextInput.attrs<InputProps>({
  selectionColor: colors.black,
})`
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
`;
