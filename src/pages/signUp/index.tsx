import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import {Container} from '../../components/Container';
import Input from '../../components/Input';
import {Form, Header, TextContainer} from './components/form/styles';
import { Paragraph } from "../../components/Text/Paragraph";
import {Formik} from 'formik';
import validationService from '../../services/validators';
import {getAllErrorsForSchema} from '../../services/utils';
import {
  ErrorsBox,
  ErrorsText,
  PasswordStrength,
} from './components/errors/styles';
import ProgressComponent from './components/errors/progress';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {errors as errorsContants} from '../../config/contants';
import { useAuth } from '../../contexts/auth/AuthContext';

export default function SignUp() {
  const [secure, isSecure] = useState(true);
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();
  const {signIn} = useAuth();

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
  }, [emailRef]);

  return (
    <Container>
      <TextContainer>
        <Header>Cadastro de responsável</Header>
        <Paragraph>
          Para realizar seu primeiro acesso, você precisa definir uma senha.
        </Paragraph>
      </TextContainer>
      <KeyboardAvoidingView behavior="position">
        <Formik
          initialValues={{email: '', password: ''}}
          validate={getAllErrorsForSchema(validationService.loginSchema)}
          onSubmit={signIn}>
          {({handleChange, handleBlur, handleSubmit, errors, values}) => (
            <Form>
              <Input
                icon="email-outline"
                ref={emailRef}
                placeholder="E-mail"
                returnKeyType="next"
                value={values.email}
                error={errors.hasOwnProperty('email')}
                keyboardType="email-address"
                onSubmitEditing={() => passwordRef.current?.focus()}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                helpText="Email inválido"
              />
              <Input
                icon="lock-outline"
                ref={passwordRef}
                value={values.password}
                error={errors.hasOwnProperty('password')}
                placeholder="Senha"
                secureTextEntry={secure}
                endIcon={
                  <TouchableOpacity onPress={() => isSecure(value => !value)}>
                    <Icon size={24} color={colors.darkGray} name={'eye-off'} />
                  </TouchableOpacity>
                }
                helpText="A senha deve atendender os requisitos abaixo"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <PasswordStrength>
                {errors.hasOwnProperty('password') && (
                  <>
                    <ProgressComponent
                      steps={5}
                      filled={errors.password!.length}
                    />
                    <ErrorsBox>
                      {Array.isArray(errors.password) &&
                        Object.values(errorsContants).map((error, index) => (
                          <ErrorsText key={index} activeError={errors.password?.includes(error)}>
                            {error}
                          </ErrorsText>
                        ))}
                    </ErrorsBox>
                  </>
                )}
              </PasswordStrength>
              <Button isFilled isLarge onPress={handleSubmit}>
                Salvar e continuar
              </Button>
            </Form>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Container>
  );
}
