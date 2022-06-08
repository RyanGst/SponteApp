import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import HeaderComponent from '../components/Header';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator
        initialRouteName="Home"  screenOptions={() => ({header: props => <HeaderComponent isFilled {...props} />})}>
        <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
);

export default AppRoutes;