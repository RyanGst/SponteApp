import SignIn from '../pages/signUp';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderComponent from '../components/Header';
import Intro from '../pages/intro';

import type {StackScreenProps} from '@react-navigation/stack';

type AuthRoutesParamList = {
  SignIn: undefined;
  Intro: undefined;
};

const AuthStack = createStackNavigator<AuthRoutesParamList>();
export type Props = StackScreenProps<AuthRoutesParamList>;

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    initialRouteName="Intro"
    screenOptions={() => ({header: props => <HeaderComponent {...props} />})}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Intro" component={Intro} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
